// Investment Banking (Certificate) Course Content
// Complete with 6 modules, quizzes, and final exam

export const investmentBankingCertificate = {
  id: "investment-banking-certificate",
  title: "Investment Banking (Certificate)",
  description: "Learn the fundamentals of investment banking including financial markets, valuation methods, mergers and acquisitions, and capital raising. Perfect for beginners interested in finance careers.",
  duration: "6 weeks",
  timeCommitment: "5-7 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🏦",
  badge: "Certificate",
  
  // Learning Path
  learningPath: {
    certificate: "Investment Banking Fundamentals",
    diploma: "Portfolio Management (Advanced)",
    progression: [
      "Certificate: Core Banking Concepts",
      "Diploma: Advanced Portfolio Strategies",
      "Diploma: Risk Management",
      "Career Path: Investment Banker / Financial Analyst"
    ]
  },
  
  // Course Modules
  modules: [
    {
      id: 1,
      title: "Introduction to Investment Banking",
      completed: false,
      content: `
# Module 1: Introduction to Investment Banking

Welcome to the world of investment banking! This module introduces you to what investment banks do, who works there, and how they create value for clients. Investment banking is about helping companies and governments raise money and execute important financial transactions.

## What is Investment Banking?
Investment banking is different from commercial banking. While commercial banks take deposits and make loans to individuals and businesses, investment banks help organizations with larger, more complex financial needs. They act as intermediaries between those who need capital and those who have capital to invest.

Investment banks provide several key services:
- **Capital Raising**: Helping companies raise money by issuing stocks or bonds
- **Mergers & Acquisitions**: Advising companies on buying, selling, or merging with other companies
- **Sales & Trading**: Buying and selling securities for clients or the bank's own account
- **Research**: Analyzing companies and markets to provide investment recommendations

## Key Players in Investment Banking
Different professionals work together in investment banks:

**Investment Bankers**: Work directly with corporate clients on transactions like mergers or fundraising. They build relationships and structure deals.

**Salespeople**: Connect with institutional clients (like pension funds or insurance companies) to sell securities and services.

**Traders**: Execute buy and sell orders in financial markets. They work on trading floors buying and selling stocks, bonds, and other securities.

**Research Analysts**: Study companies, industries, and economies to provide investment recommendations. Their reports help clients make informed decisions.

**Support Staff**: Includes compliance officers, risk managers, technology professionals, and operations teams who ensure everything runs smoothly and legally.

## How Investment Banks Make Money
Investment banks earn revenue through several channels:

**Advisory Fees**: Charging clients for advice on mergers, acquisitions, or other strategic transactions. These fees are typically a percentage of the deal value.

**Underwriting Fees**: Earning money for helping companies issue new stocks or bonds to raise capital. The bank buys the securities from the company and sells them to investors.

**Trading Revenue**: Making money from buying and selling securities. This can be through market-making (facilitating trades) or proprietary trading (trading the bank's own money).

**Asset Management Fees**: Charging fees for managing clients' investment portfolios. This includes mutual funds, pension funds, and private wealth management.

## Career Paths in Investment Banking
Investment banking offers several career tracks:

**Analyst Program**: Entry-level position typically for recent graduates. Analysts work long hours doing financial modeling, research, and presentations.

**Associate Role**: The next level after analyst or for MBA graduates. Associates manage analysts and have more client interaction.

**Vice President**: Senior role focusing on client relationships and deal execution. VPs manage teams and develop business.

**Managing Director**: Senior leadership responsible for major client relationships and business development. MDs have significant experience and expertise.

**Specialist Roles**: Focusing on specific areas like mergers, debt capital markets, equity capital markets, or industry sectors.

## The Investment Banking Process
While each transaction is unique, most follow a similar process:

1. **Pitching**: Presenting to potential clients to win their business
2. **Due Diligence**: Thorough investigation of the client and transaction details
3. **Valuation**: Determining what companies or securities are worth
4. **Documentation**: Preparing legal and financial documents
5. **Execution**: Completing the transaction in the market
6. **Settlement**: Finalizing all payments and transfers

## Ethical Considerations
Investment banking involves significant ethical responsibilities:
- **Conflicts of Interest**: Managing situations where the bank's interests might conflict with clients'
- **Confidential Information**: Protecting sensitive client information
- **Fair Dealing**: Treating all clients fairly and avoiding preferential treatment
- **Regulatory Compliance**: Following financial regulations and laws

Remember: Investment banking is about building trust and creating value through financial expertise.
      `,
      quiz: [
        {
          id: 1,
          question: "What is the main difference between investment banking and commercial banking?",
          options: [
            "Investment banks help with large financial transactions, commercial banks take deposits and make loans",
            "Investment banks are smaller than commercial banks",
            "Commercial banks only work with individuals, investment banks only work with companies",
            "There is no difference between them"
          ],
          correctAnswer: 0,
          explanation: "Investment banks focus on large transactions like mergers and capital raising, while commercial banks handle deposits and loans."
        },
        {
          id: 2,
          question: "What service involves helping companies raise money by issuing stocks or bonds?",
          options: [
            "Capital raising",
            "Mergers and acquisitions",
            "Sales and trading",
            "Research analysis"
          ],
          correctAnswer: 0,
          explanation: "Capital raising involves helping companies obtain funding through stock or bond offerings."
        },
        {
          id: 3,
          question: "Who works directly with corporate clients on transactions like mergers?",
          options: [
            "Investment bankers",
            "Traders",
            "Research analysts",
            "Compliance officers"
          ],
          correctAnswer: 0,
          explanation: "Investment bankers work directly with corporate clients on financial transactions."
        },
        {
          id: 4,
          question: "How do investment banks earn advisory fees?",
          options: [
            "By charging clients for advice on mergers and acquisitions",
            "By taking deposits from clients",
            "By making loans to businesses",
            "By selling insurance products"
          ],
          correctAnswer: 0,
          explanation: "Advisory fees are earned for providing strategic financial advice to clients."
        },
        {
          id: 5,
          question: "What is the typical entry-level position in investment banking?",
          options: [
            "Analyst",
            "Managing Director",
            "Vice President",
            "Chief Executive Officer"
          ],
          correctAnswer: 0,
          explanation: "Analyst is the standard entry-level position for recent graduates in investment banking."
        },
        {
          id: 6,
          question: "What does due diligence involve in investment banking?",
          options: [
            "Thorough investigation of clients and transaction details",
            "Quick review of financial statements",
            "Checking office supplies",
            "Counting money in the bank"
          ],
          correctAnswer: 0,
          explanation: "Due diligence involves comprehensive investigation to verify information and identify risks."
        },
        {
          id: 7,
          question: "What do research analysts primarily do?",
          options: [
            "Study companies and provide investment recommendations",
            "Execute trades in the market",
            "Manage client relationships",
            "Process payroll for bank employees"
          ],
          correctAnswer: 0,
          explanation: "Research analysts analyze companies, industries, and economies to provide investment advice."
        },
        {
          id: 8,
          question: "What is underwriting in investment banking?",
          options: [
            "Helping companies issue new stocks or bonds to raise capital",
            "Writing insurance policies",
            "Signing documents for loans",
            "Approving credit card applications"
          ],
          correctAnswer: 0,
          explanation: "Underwriting involves investment banks buying securities from companies and selling them to investors."
        },
        {
          id: 9,
          question: "Who executes buy and sell orders in financial markets?",
          options: [
            "Traders",
            "Investment bankers",
            "Research analysts",
            "Human resources staff"
          ],
          correctAnswer: 0,
          explanation: "Traders are responsible for executing securities transactions in financial markets."
        },
        {
          id: 10,
          question: "What ethical consideration involves protecting sensitive client information?",
          options: [
            "Confidential information",
            "Fair dealing",
            "Regulatory compliance",
            "Office cleanliness"
          ],
          correctAnswer: 0,
          explanation: "Confidentiality involves protecting sensitive client information from unauthorized disclosure."
        },
        {
          id: 11,
          question: "What do salespeople in investment banks do?",
          options: [
            "Connect with institutional clients to sell securities and services",
            "Sell retail products in bank branches",
            "Advertise banking services on television",
            "Manage bank teller operations"
          ],
          correctAnswer: 0,
          explanation: "Salespeople build relationships with institutional investors to sell investment products and services."
        },
        {
          id: 12,
          question: "What is the role of support staff in investment banks?",
          options: [
            "Ensure everything runs smoothly and legally",
            "Make investment decisions",
            "Negotiate with clients",
            "Set interest rates"
          ],
          correctAnswer: 0,
          explanation: "Support staff handle compliance, risk management, technology, and operations to support banking activities."
        },
        {
          id: 13,
          question: "How do investment banks earn trading revenue?",
          options: [
            "By buying and selling securities",
            "By charging monthly account fees",
            "By collecting interest on loans",
            "By renting office space"
          ],
          correctAnswer: 0,
          explanation: "Trading revenue comes from executing securities transactions for clients or the bank's own account."
        },
        {
          id: 14,
          question: "What is the typical career progression after analyst in investment banking?",
          options: [
            "Associate, Vice President, Managing Director",
            "Teller, Branch Manager, Regional Director",
            "Intern, Analyst, CEO",
            "Salesperson, Trader, Research Analyst"
          ],
          correctAnswer: 0,
          explanation: "The typical progression is Analyst → Associate → Vice President → Managing Director."
        },
        {
          id: 15,
          question: "What does valuation determine in investment banking?",
          options: [
            "What companies or securities are worth",
            "Employee salaries",
            "Office rental costs",
            "Travel expenses"
          ],
          correctAnswer: 0,
          explanation: "Valuation determines the economic value of companies, assets, or securities."
        },
        {
          id: 16,
          question: "What is market-making in trading?",
          options: [
            "Facilitating trades by providing buy and sell prices",
            "Creating new markets from scratch",
            "Setting up physical marketplaces",
            "Advertising products aggressively"
          ],
          correctAnswer: 0,
          explanation: "Market-making involves providing liquidity by offering to buy and sell securities continuously."
        },
        {
          id: 17,
          question: "What do investment banks provide in mergers and acquisitions?",
          options: [
            "Advice on buying, selling, or merging with other companies",
            "Legal representation in court",
            "Building construction services",
            "Employee training programs"
          ],
          correctAnswer: 0,
          explanation: "M&A advisory involves strategic advice on corporate transactions involving other companies."
        },
        {
          id: 18,
          question: "What is proprietary trading?",
          options: [
            "Trading the bank's own money for profit",
            "Trading only for retail clients",
            "Trading only government bonds",
            "Trading using borrowed funds only"
          ],
          correctAnswer: 0,
          explanation: "Proprietary trading involves the bank trading with its own capital to generate profits."
        },
        {
          id: 19,
          question: "What ethical issue involves managing situations where bank interests might conflict with clients?",
          options: [
            "Conflicts of interest",
            "Confidential information",
            "Fair dealing",
            "Regulatory compliance"
          ],
          correctAnswer: 0,
          explanation: "Conflicts of interest occur when the bank's interests potentially oppose clients' interests."
        },
        {
          id: 20,
          question: "What is the final step in the investment banking process?",
          options: [
            "Settlement",
            "Pitching",
            "Due diligence",
            "Valuation"
          ],
          correctAnswer: 0,
          explanation: "Settlement finalizes all payments and transfers to complete the transaction."
        }
      ]
    },
    {
      id: 2,
      title: "Financial Markets and Instruments",
      completed: false,
      content: `
# Module 2: Financial Markets and Instruments

Understanding financial markets and the instruments traded in them is essential for investment banking. This module covers the major markets, key securities, and how they function to facilitate capital flow between investors and those who need funding.

## Types of Financial Markets
Financial markets are where buyers and sellers trade financial assets. Different markets serve different purposes:

**Capital Markets**: Where long-term securities are traded. This includes stock markets for equities and bond markets for debt securities.

**Money Markets**: Where short-term debt instruments are traded. These typically mature in one year or less and include treasury bills and commercial paper.

**Derivatives Markets**: Where contracts based on underlying assets are traded. These include options, futures, and swaps.

**Foreign Exchange Markets**: Where currencies are traded. This is the largest financial market by trading volume.

**Commodity Markets**: Where physical goods like oil, gold, or agricultural products are traded.

## Equity Securities
Equity represents ownership in a company. Common types include:

**Common Stock**: Basic ownership shares in a company. Common stockholders have voting rights and may receive dividends, but they're last in line for assets if the company fails.

**Preferred Stock**: Hybrid security with characteristics of both stocks and bonds. Preferred stockholders receive fixed dividends and have priority over common stockholders for dividends and assets, but usually don't have voting rights.

**American Depositary Receipts (ADRs)**: Certificates representing shares in foreign companies that trade on U.S. exchanges. They make it easier for U.S. investors to buy foreign stocks.

## Debt Securities
Debt represents money borrowed that must be repaid with interest:

**Bonds**: Long-term debt securities where the issuer promises to pay periodic interest and repay the principal at maturity. Governments and corporations issue bonds to raise money.

**Treasury Securities**: Bonds issued by governments. In the U.S., these include Treasury bills (short-term), notes (medium-term), and bonds (long-term).

**Municipal Bonds**: Bonds issued by state and local governments. Interest is often exempt from federal income tax.

**Corporate Bonds**: Bonds issued by companies to raise capital. They typically offer higher interest rates than government bonds to compensate for higher risk.

## Money Market Instruments
Short-term debt instruments include:

**Treasury Bills**: Short-term U.S. government securities with maturities of one year or less. They're considered very safe investments.

**Commercial Paper**: Unsecured, short-term debt issued by corporations. Maturities typically range from a few days to 270 days.

**Certificates of Deposit (CDs)**: Time deposits with banks that pay interest. They have fixed terms and penalties for early withdrawal.

**Repurchase Agreements (Repos)**: Short-term loans where securities are sold with an agreement to repurchase them later at a higher price.

## Derivatives
Derivatives derive their value from underlying assets:

**Options**: Contracts giving the right (but not obligation) to buy or sell an asset at a set price by a certain date. Call options provide buying rights, put options provide selling rights.

**Futures**: Contracts obligating buyers to purchase (or sellers to sell) assets at predetermined prices on future dates. Used for hedging or speculation.

**Swaps**: Agreements to exchange cash flows or other financial instruments. Common types include interest rate swaps and currency swaps.

**Forwards**: Similar to futures but customized contracts traded over-the-counter rather than on exchanges.

## How Markets Function
Financial markets serve several important functions:

**Price Discovery**: Determining fair prices for securities based on supply and demand.

**Liquidity Provision**: Allowing investors to buy and sell securities easily.

**Risk Transfer**: Enabling investors to transfer risk through instruments like derivatives.

**Capital Allocation**: Directing funds from savers to those who need capital for productive uses.

**Information Aggregation**: Incorporating all available information into security prices.

## Market Participants
Different participants play different roles:

**Issuers**: Companies or governments that issue securities to raise capital.

**Investors**: Individuals or institutions that buy securities for returns.

**Intermediaries**: Investment banks, brokers, and dealers that facilitate transactions.

**Regulators**: Government agencies that oversee markets to ensure fairness and stability.

**Market Makers**: Firms that provide liquidity by continuously offering to buy and sell securities.

## Trading Mechanisms
Securities trade through different systems:

**Exchange Trading**: Centralized marketplaces like the New York Stock Exchange where buyers and sellers meet through brokers.

**Over-the-Counter (OTC)**: Decentralized trading directly between parties, common for bonds and derivatives.

**Electronic Trading**: Computer-based systems that match buy and sell orders automatically.

**Dark Pools**: Private exchanges where large institutional investors trade without revealing their intentions publicly.

Understanding these markets and instruments is fundamental to investment banking work.
      `,
      quiz: [
        {
          id: 1,
          question: "Where are long-term securities like stocks and bonds traded?",
          options: [
            "Capital markets",
            "Money markets",
            "Derivatives markets",
            "Commodity markets"
          ],
          correctAnswer: 0,
          explanation: "Capital markets facilitate trading of long-term securities like stocks and bonds."
        },
        {
          id: 2,
          question: "What do common stockholders typically have that preferred stockholders usually don't?",
          options: [
            "Voting rights",
            "Fixed dividends",
            "Priority in bankruptcy",
            "Guaranteed returns"
          ],
          correctAnswer: 0,
          explanation: "Common stockholders usually have voting rights, while preferred stockholders typically receive fixed dividends instead."
        },
        {
          id: 3,
          question: "What are bonds?",
          options: [
            "Long-term debt securities where issuers promise to pay interest and repay principal",
            "Short-term loans between banks",
            "Insurance policies for investments",
            "Guarantees of stock performance"
          ],
          correctAnswer: 0,
          explanation: "Bonds are debt instruments where borrowers promise to pay interest and return the principal at maturity."
        },
        {
          id: 4,
          question: "What are Treasury bills?",
          options: [
            "Short-term U.S. government securities with maturities of one year or less",
            "Long-term corporate bonds",
            "State government debt instruments",
            "International currency notes"
          ],
          correctAnswer: 0,
          explanation: "Treasury bills are short-term debt securities issued by the U.S. government."
        },
        {
          id: 5,
          question: "What do derivatives derive their value from?",
          options: [
            "Underlying assets",
            "Government guarantees",
            "Bank deposits",
            "Company reputations"
          ],
          correctAnswer: 0,
          explanation: "Derivatives get their value from underlying assets like stocks, bonds, or commodities."
        },
        {
          id: 6,
          question: "What do call options provide?",
          options: [
            "The right to buy an asset at a set price",
            "The right to sell an asset at a set price",
            "An obligation to buy an asset",
            "An obligation to sell an asset"
          ],
          correctAnswer: 0,
          explanation: "Call options give holders the right (but not obligation) to buy assets at predetermined prices."
        },
        {
          id: 7,
          question: "What is the largest financial market by trading volume?",
          options: [
            "Foreign exchange markets",
            "Stock markets",
            "Bond markets",
            "Commodity markets"
          ],
          correctAnswer: 0,
          explanation: "The foreign exchange market, where currencies are traded, has the largest daily trading volume."
        },
        {
          id: 8,
          question: "What are municipal bonds?",
          options: [
            "Bonds issued by state and local governments",
            "Bonds issued by foreign governments",
            "Corporate bonds for infrastructure projects",
            "Bonds backed by mortgages"
          ],
          correctAnswer: 0,
          explanation: "Municipal bonds are debt securities issued by state, city, or local governments."
        },
        {
          id: 9,
          question: "What is commercial paper?",
          options: [
            "Unsecured, short-term debt issued by corporations",
            "Long-term corporate bonds",
            "Government-issued currency",
            "Stock purchase agreements"
          ],
          correctAnswer: 0,
          explanation: "Commercial paper is short-term corporate debt typically used for working capital needs."
        },
        {
          id: 10,
          question: "What function determines fair prices for securities based on supply and demand?",
          options: [
            "Price discovery",
            "Liquidity provision",
            "Risk transfer",
            "Capital allocation"
          ],
          correctAnswer: 0,
          explanation: "Price discovery establishes market prices through the interaction of buyers and sellers."
        },
        {
          id: 11,
          question: "What are American Depositary Receipts (ADRs)?",
          options: [
            "Certificates representing shares in foreign companies that trade on U.S. exchanges",
            "U.S. government savings bonds",
            "Receipts for safe deposit boxes",
            "Documents for international money transfers"
          ],
          correctAnswer: 0,
          explanation: "ADRs allow U.S. investors to easily invest in foreign companies through U.S. exchanges."
        },
        {
          id: 12,
          question: "What are futures contracts?",
          options: [
            "Agreements to buy or sell assets at predetermined prices on future dates",
            "Guarantees of future stock performance",
            "Insurance against investment losses",
            "Options to cancel trades"
          ],
          correctAnswer: 0,
          explanation: "Futures obligate parties to transact at specified prices on future dates."
        },
        {
          id: 13,
          question: "What are swaps?",
          options: [
            "Agreements to exchange cash flows or financial instruments",
            "Trades of identical securities",
            "Exchanges of physical commodities",
            "Switching between different stock exchanges"
          ],
          correctAnswer: 0,
          explanation: "Swaps involve exchanging one set of cash flows or financial instruments for another."
        },
        {
          id: 14,
          question: "Who are issuers in financial markets?",
          options: [
            "Companies or governments that issue securities to raise capital",
            "Individuals who buy stocks",
            "Banks that process transactions",
            "Regulators who oversee markets"
          ],
          correctAnswer: 0,
          explanation: "Issuers create and sell securities to obtain funding for their operations or projects."
        },
        {
          id: 15,
          question: "What is over-the-counter (OTC) trading?",
          options: [
            "Decentralized trading directly between parties",
            "Trading on formal stock exchanges",
            "Trading through vending machines",
            "Automatic computer trading"
          ],
          correctAnswer: 0,
          explanation: "OTC trading occurs directly between parties without a centralized exchange."
        },
        {
          id: 16,
          question: "What do market makers provide?",
          options: [
            "Liquidity by continuously offering to buy and sell securities",
            "Guarantees against losses",
            "Free investment advice",
            "Physical marketplaces"
          ],
          correctAnswer: 0,
          explanation: "Market makers facilitate trading by always being ready to buy or sell securities."
        },
        {
          id: 17,
          question: "What are money markets for?",
          options: [
            "Trading short-term debt instruments",
            "Long-term investment planning",
            "Real estate transactions",
            "International currency exchange"
          ],
          correctAnswer: 0,
          explanation: "Money markets specialize in short-term debt securities with maturities under one year."
        },
        {
          id: 18,
          question: "What advantage do municipal bonds often have?",
          options: [
            "Interest exempt from federal income tax",
            "Guaranteed by the federal government",
            "Higher returns than all other investments",
            "No risk of default"
          ],
          correctAnswer: 0,
          explanation: "Municipal bond interest is often exempt from federal taxes, making them attractive to investors."
        },
        {
          id: 19,
          question: "What are dark pools?",
          options: [
            "Private exchanges where large institutional investors trade privately",
            "Illegal trading venues",
            "Poorly lit trading floors",
            "Markets for dark commodities like oil"
          ],
          correctAnswer: 0,
          explanation: "Dark pools allow large trades to occur without revealing trading intentions to the public."
        },
        {
          id: 20,
          question: "What function directs funds from savers to those who need capital?",
          options: [
            "Capital allocation",
            "Price discovery",
            "Risk transfer",
            "Information aggregation"
          ],
          correctAnswer: 0,
          explanation: "Capital allocation efficiently directs investment capital to its most productive uses."
        }
      ]
    },
    {
      id: 3,
      title: "Financial Statement Analysis",
      completed: false,
      content: `
# Module 3: Financial Statement Analysis

Financial statement analysis is fundamental to investment banking. This module teaches how to read and interpret financial statements to assess company performance, identify trends, and make informed investment decisions.

## The Three Core Financial Statements
Companies produce three primary financial statements that tell different parts of their financial story:

**Income Statement**: Shows profitability over a period of time (usually quarterly or annually). It answers: How much money did the company make?

**Balance Sheet**: Shows financial position at a specific point in time. It answers: What does the company own and owe?

**Cash Flow Statement**: Shows cash movements over a period. It answers: How did cash move in and out of the company?

These statements work together to provide a complete picture of financial health.

## Income Statement Components
The income statement has several key sections:

**Revenue/Sales**: Money earned from selling products or services. This is the top line showing total income before any expenses.

**Cost of Goods Sold (COGS)**: Direct costs of producing goods or services sold. For manufacturers, this includes materials and labor; for retailers, it's purchase cost of inventory.

**Gross Profit**: Revenue minus COGS. Shows how much profit is made from core operations before overhead costs.

**Operating Expenses**: Costs not directly tied to production. Includes selling, general & administrative (SG&A) expenses like salaries, rent, marketing, and research.

**Operating Income**: Gross profit minus operating expenses. Also called EBIT (Earnings Before Interest and Taxes).

**Net Income**: The "bottom line" - final profit after all expenses, including taxes and interest. This is what's left for shareholders.

## Balance Sheet Structure
The balance sheet follows the accounting equation: Assets = Liabilities + Equity

**Assets**: What the company owns. Divided into:
- **Current Assets**: Cash and assets convertible to cash within one year (inventory, accounts receivable)
- **Non-Current Assets**: Long-term assets (property, equipment, patents)

**Liabilities**: What the company owes. Divided into:
- **Current Liabilities**: Debts due within one year (accounts payable, short-term debt)
- **Non-Current Liabilities**: Long-term debts (bonds, mortgages)

**Shareholders' Equity**: Owners' residual claim after liabilities. Includes:
- **Common Stock**: Money raised from selling shares
- **Retained Earnings**: Profits reinvested in the business
- **Additional Paid-In Capital**: Money from stock sales above par value

## Cash Flow Statement Categories
Cash flows are divided into three activities:

**Operating Activities**: Cash from core business operations. This includes cash received from customers and paid to suppliers and employees.

**Investing Activities**: Cash used for long-term assets. This includes buying or selling property, equipment, or investments.

**Financing Activities**: Cash from or to investors and creditors. This includes issuing stock, paying dividends, or borrowing/repaying debt.

Positive operating cash flow is generally a healthy sign, showing the business generates cash from its operations.

## Key Financial Ratios
Ratios help compare companies and assess performance:

**Profitability Ratios**:
- **Gross Margin**: Gross Profit / Revenue (measures production efficiency)
- **Operating Margin**: Operating Income / Revenue (measures operational efficiency)
- **Net Profit Margin**: Net Income / Revenue (measures overall profitability)

**Liquidity Ratios**:
- **Current Ratio**: Current Assets / Current Liabilities (measures short-term solvency)
- **Quick Ratio**: (Current Assets - Inventory) / Current Liabilities (more conservative liquidity measure)

**Leverage Ratios**:
- **Debt-to-Equity**: Total Debt / Total Equity (measures financial risk)
- **Interest Coverage**: EBIT / Interest Expense (measures ability to pay interest)

**Efficiency Ratios**:
- **Inventory Turnover**: COGS / Average Inventory (measures inventory management)
- **Receivables Turnover**: Revenue / Average Accounts Receivable (measures collection efficiency)

## Common Size Analysis
Common size statements express each line item as a percentage of a base figure:
- **Income Statement**: Each item as percentage of revenue
- **Balance Sheet**: Each item as percentage of total assets

This allows comparison between companies of different sizes and identification of structural differences.

## Trend Analysis
Examining financial statements over multiple periods reveals trends:
- **Year-over-Year Growth**: Comparing current period to same period last year
- **Sequential Growth**: Comparing to immediately preceding period
- **Compound Annual Growth Rate (CAGR)**: Smooth annual growth rate over multiple periods

Trends help identify whether performance is improving or deteriorating.

## DuPont Analysis
DuPont analysis breaks return on equity (ROE) into components:
ROE = Net Profit Margin × Asset Turnover × Equity Multiplier

This shows whether ROE comes from profitability, efficiency, or leverage.

## Limitations of Financial Analysis
While essential, financial analysis has limitations:
- **Historical Data**: Financial statements show past performance, not future prospects
- **Accounting Choices**: Different accounting methods can affect comparability
- **Off-Balance Sheet Items**: Some obligations may not appear on balance sheets
- **Quality of Earnings**: Reported earnings may not reflect sustainable performance
- **Industry Differences**: Ratios vary significantly by industry

Investment bankers must look beyond the numbers to understand the full story.
      `,
      quiz: [
        {
          id: 1,
          question: "Which financial statement shows profitability over a period of time?",
          options: [
            "Income statement",
            "Balance sheet",
            "Cash flow statement",
            "Statement of equity"
          ],
          correctAnswer: 0,
          explanation: "The income statement shows revenues, expenses, and profits over a specific period."
        },
        {
          id: 2,
          question: "What is the accounting equation for the balance sheet?",
          options: [
            "Assets = Liabilities + Equity",
            "Revenue - Expenses = Profit",
            "Assets - Liabilities = Equity",
            "Cash In - Cash Out = Net Cash"
          ],
          correctAnswer: 0,
          explanation: "The balance sheet always balances with assets equaling liabilities plus equity."
        },
        {
          id: 3,
          question: "What does gross profit equal?",
          options: [
            "Revenue minus cost of goods sold",
            "Revenue minus all expenses",
            "Cash received minus cash paid",
            "Assets minus liabilities"
          ],
          correctAnswer: 0,
          explanation: "Gross profit is revenue minus the direct costs of producing goods or services sold."
        },
        {
          id: 4,
          question: "What are current assets?",
          options: [
            "Assets convertible to cash within one year",
            "Assets that never lose value",
            "Assets purchased this year",
            "Cash only"
          ],
          correctAnswer: 0,
          explanation: "Current assets include cash and assets expected to convert to cash within one year."
        },
        {
          id: 5,
          question: "Which cash flow category includes cash from core business operations?",
          options: [
            "Operating activities",
            "Investing activities",
            "Financing activities",
            "Non-operating activities"
          ],
          correctAnswer: 0,
          explanation: "Operating activities include cash flows from primary business operations."
        },
        {
          id: 6,
          question: "What does the current ratio measure?",
          options: [
            "Short-term solvency",
            "Profitability",
            "Long-term debt capacity",
            "Investment returns"
          ],
          correctAnswer: 0,
          explanation: "Current ratio measures ability to pay short-term obligations with current assets."
        },
        {
          id: 7,
          question: "What is net income?",
          options: [
            "Final profit after all expenses",
            "Revenue from sales",
            "Cash in the bank",
            "Value of company assets"
          ],
          correctAnswer: 0,
          explanation: "Net income is the bottom-line profit after deducting all expenses from revenue."
        },
        {
          id: 8,
          question: "What does common size analysis express financial statement items as?",
          options: [
            "Percentages of a base figure",
            "Dollar amounts only",
            "Ratios to industry averages",
            "Growth rates from previous year"
          ],
          correctAnswer: 0,
          explanation: "Common size analysis converts line items to percentages for better comparison."
        },
        {
          id: 9,
          question: "What are retained earnings?",
          options: [
            "Profits reinvested in the business",
            "Money from selling stock",
            "Cash kept in bank accounts",
            "Employee salary savings"
          ],
          correctAnswer: 0,
          explanation: "Retained earnings are cumulative profits kept in the business rather than paid as dividends."
        },
        {
          id: 10,
          question: "What does the debt-to-equity ratio measure?",
          options: [
            "Financial risk from leverage",
            "Profitability efficiency",
            "Liquidity position",
            "Asset quality"
          ],
          correctAnswer: 0,
          explanation: "Debt-to-equity measures how much debt finances assets relative to equity."
        },
        {
          id: 11,
          question: "What is EBIT?",
          options: [
            "Earnings Before Interest and Taxes",
            "Extra Business Income Total",
            "Estimated Basic Investment Return",
            "Ending Balance Interest Total"
          ],
          correctAnswer: 0,
          explanation: "EBIT shows operating profitability before financing costs and taxes."
        },
        {
          id: 12,
          question: "What does inventory turnover measure?",
          options: [
            "How quickly inventory sells",
            "Profit on inventory sales",
            "Cost of storing inventory",
            "Value of inventory assets"
          ],
          correctAnswer: 0,
          explanation: "Inventory turnover measures how efficiently inventory is managed and sold."
        },
        {
          id: 13,
          question: "What is trend analysis?",
          options: [
            "Examining financial statements over multiple periods",
            "Comparing to industry averages",
            "Analyzing stock price movements",
            "Studying economic trends"
          ],
          correctAnswer: 0,
          explanation: "Trend analysis identifies patterns and changes over time in financial performance."
        },
        {
          id: 14,
          question: "What does the quick ratio exclude that the current ratio includes?",
          options: [
            "Inventory",
            "Cash",
            "Accounts receivable",
            "Short-term investments"
          ],
          correctAnswer: 0,
          explanation: "Quick ratio excludes inventory as it may not be easily convertible to cash."
        },
        {
          id: 15,
          question: "What does DuPont analysis break down?",
          options: [
            "Return on equity into components",
            "Revenue growth drivers",
            "Cash flow sources",
            "Balance sheet structure"
          ],
          correctAnswer: 0,
          explanation: "DuPont analysis decomposes ROE into profitability, efficiency, and leverage components."
        },
        {
          id: 16,
          question: "What are operating expenses?",
          options: [
            "Costs not directly tied to production",
            "Costs of goods sold",
            "Interest and tax expenses",
            "Capital investment costs"
          ],
          correctAnswer: 0,
          explanation: "Operating expenses include overhead costs like salaries, rent, and marketing."
        },
        {
          id: 17,
          question: "What does positive operating cash flow generally indicate?",
          options: [
            "Business generates cash from operations",
            "Company is highly profitable",
            "No debt on balance sheet",
            "High stock price"
          ],
          correctAnswer: 0,
          explanation: "Positive operating cash flow shows the core business produces cash."
        },
        {
          id: 18,
          question: "What is a limitation of financial analysis?",
          options: [
            "Historical data shows past, not future performance",
            "Too many ratios to calculate",
            "Requires expensive software",
            "Only works for large companies"
          ],
          correctAnswer: 0,
          explanation: "Financial statements are historical and may not predict future performance."
        },
        {
          id: 19,
          question: "What does receivables turnover measure?",
          options: [
            "How quickly customers pay",
            "Profit on credit sales",
            "Bad debt expense",
            "Credit policy effectiveness"
          ],
          correctAnswer: 0,
          explanation: "Receivables turnover measures efficiency in collecting customer payments."
        },
        {
          id: 20,
          question: "What are financing activities in cash flow statements?",
          options: [
            "Cash from or to investors and creditors",
            "Cash from daily operations",
            "Cash for buying equipment",
            "Cash from selling products"
          ],
          correctAnswer: 0,
          explanation: "Financing activities include transactions with owners and creditors like issuing stock or borrowing."
        }
      ]
    },
    {
      id: 4,
      title: "Valuation Methods",
      completed: false,
      content: `
# Module 4: Valuation Methods

Valuation is core to investment banking - determining what companies, assets, or securities are worth. This module covers the primary valuation approaches used by investment bankers to assess value for mergers, acquisitions, capital raising, and investment decisions.

## Why Valuation Matters
Valuation serves several critical purposes in investment banking:

**Mergers & Acquisitions**: Determining fair prices for buying or selling companies. Both buyers and sellers need to understand value to negotiate effectively.

**Capital Raising**: Setting prices for new stock or bond offerings. Companies need to know their value to price securities appropriately.

**Investment Decisions**: Assessing whether securities are fairly priced. Investors use valuation to identify undervalued or overvalued opportunities.

**Financial Reporting**: Testing assets for impairment or marking them to market. Companies must periodically assess asset values.

**Strategic Planning**: Evaluating different business strategies or investment projects. Valuation helps compare alternatives.

## Three Main Valuation Approaches
Professional valuation typically uses three approaches:

**Income Approach**: Values assets based on their ability to generate future economic benefits. The most common method is Discounted Cash Flow (DCF) analysis.

**Market Approach**: Values assets based on what similar assets trade for in the market. This includes comparable company analysis and precedent transactions.

**Asset Approach**: Values assets based on their underlying net asset value. This is most relevant for asset-heavy businesses or liquidation scenarios.

Investment bankers often use multiple approaches to triangulate on a reasonable value range.

## Discounted Cash Flow (DCF) Analysis
DCF is the most theoretically sound valuation method. It values a company based on its ability to generate cash flows in the future:

**Free Cash Flow**: Cash available to all investors (debt and equity holders) after necessary investments. Calculated as: Operating Cash Flow - Capital Expenditures.

**Forecast Period**: Typically 5-10 years of detailed cash flow projections. This captures the company's growth phase.

**Terminal Value**: Value beyond the forecast period, assuming stable growth forever. Calculated using the perpetuity growth formula or exit multiple.

**Discount Rate**: Rate used to convert future cash flows to present value. For equity valuation, this is the cost of equity; for firm valuation, it's the weighted average cost of capital (WACC).

**Present Value**: Sum of discounted future cash flows plus terminal value. This represents the estimated intrinsic value.

DCF's strength is its focus on cash generation, but it's sensitive to assumptions about growth rates and discount rates.

## Comparable Company Analysis
This market approach compares the target company to similar publicly traded companies:

**Selecting Comparables**: Identifying companies with similar business models, size, growth, and risk characteristics.

**Calculating Multiples**: Computing valuation multiples like:
- **P/E Ratio**: Price / Earnings (measures value relative to profits)
- **EV/EBITDA**: Enterprise Value / EBITDA (measures value relative to operating cash flow)
- **P/S Ratio**: Price / Sales (measures value relative to revenue)
- **P/B Ratio**: Price / Book Value (measures value relative to net assets)

**Applying Multiples**: Taking the average or median multiple from comparables and applying it to the target company's financial metrics.

**Adjusting for Differences**: Modifying the multiple based on how the target differs from comparables (better/worse growth, margins, risk, etc.).

Comparable analysis is popular because it's based on actual market prices, but finding truly comparable companies can be challenging.

## Precedent Transactions Analysis
This market approach looks at what similar companies were acquired for in past transactions:

**Identifying Transactions**: Finding recent acquisitions of comparable companies. Typically look back 2-3 years for relevance.

**Calculating Transaction Multiples**: Computing the same multiples (EV/EBITDA, P/E, etc.) based on acquisition prices.

**Analyzing Premiums**: Calculating the acquisition premium paid over the target's trading price before the deal announcement.

**Applying to Target**: Using transaction multiples and premiums to estimate what the target might be worth in an acquisition.

Precedent transactions are useful for M&A valuations because they reflect control premiums that acquirers pay, but transaction details may not be fully comparable.

## Leveraged Buyout (LBO) Analysis
LBO analysis determines what a financial buyer (like a private equity firm) could pay:

**Debt Capacity**: How much debt the target can support based on its cash flows and assets.

**Returns Analysis**: Calculating the internal rate of return (IRR) an investor would earn at different purchase prices.

**Exit Assumptions**: Projecting how and when the investor would sell the company, and at what multiple.

**Purchase Price Range**: The maximum price that still delivers the investor's required return (typically 20-30% IRR).

LBO analysis establishes a "floor" value - what financial buyers might pay - which is useful in M&A negotiations.

## Sum-of-the-Parts Valuation
For diversified companies, value each business segment separately:

**Segment Identification**: Breaking the company into distinct business units.

**Separate Valuation**: Valuing each segment using appropriate methods (DCF for growth segments, multiples for mature segments, asset value for declining segments).

**Aggregation**: Adding up segment values to get total company value.

**Conglomerate Discount**: Sometimes applying a discount because diversified companies often trade at lower multiples than focused companies.

This approach recognizes that different businesses have different characteristics and deserve different valuation approaches.

## Key Valuation Multiples
Understanding common multiples is essential:

**Enterprise Value (EV)**: Total value of the company (equity value + debt - cash). Represents value to all investors.

**EBITDA**: Earnings Before Interest, Taxes, Depreciation, and Amortization. Proxy for operating cash flow.

**P/E Ratio Limitations**: Can be distorted by accounting differences, non-recurring items, or capital structure differences.

**EV/Sales**: Useful for companies with losses or minimal profits but significant revenue growth.

**EV/EBITDA Advantages**: Less affected by accounting choices and capital structure than P/E ratio.

## Valuation Adjustments
Final valuations often require adjustments:

**Control Premium**: Additional value for acquiring control versus buying minority shares.

**Liquidity Discount**: Reduction in value for shares that aren't easily tradable.

**Synergy Value**: In M&A, additional value from combining companies (cost savings, revenue enhancements).

**Market Conditions**: Adjusting for whether markets are currently favoring or discounting certain types of companies.

Remember: Valuation is both art and science - different methods should converge on a reasonable range, not a single precise number.
      `,
      quiz: [
        {
          id: 1,
          question: "What are the three main valuation approaches?",
          options: [
            "Income, market, and asset approaches",
            "Historical, current, and future approaches",
            "Simple, moderate, and complex approaches",
            "Accounting, economic, and market approaches"
          ],
          correctAnswer: 0,
          explanation: "The three primary approaches are income-based, market-based, and asset-based valuation."
        },
        {
          id: 2,
          question: "What does DCF stand for in valuation?",
          options: [
            "Discounted Cash Flow",
            "Direct Comparable Financing",
            "Dollar Cost Foundation",
            "Dividend Capitalization Formula"
          ],
          correctAnswer: 0,
          explanation: "DCF values companies based on the present value of their future cash flows."
        },
        {
          id: 3,
          question: "What is free cash flow?",
          options: [
            "Cash available to all investors after necessary investments",
            "Cash in the bank account",
            "Profit shown on income statement",
            "Revenue minus all expenses"
          ],
          correctAnswer: 0,
          explanation: "Free cash flow represents cash available to debt and equity holders after capital expenditures."
        },
        {
          id: 4,
          question: "What does comparable company analysis use?",
          options: [
            "Valuation multiples from similar public companies",
            "Only the target company's financials",
            "Government bond rates",
            "Economic growth forecasts"
          ],
          correctAnswer: 0,
          explanation: "Comparable analysis values companies based on how similar companies are valued in the market."
        },
        {
          id: 5,
          question: "What is terminal value in DCF?",
          options: [
            "Value beyond the forecast period, assuming stable growth forever",
            "Value of physical terminals or facilities",
            "Final year's cash flow",
            "Value at bankruptcy"
          ],
          correctAnswer: 0,
          explanation: "Terminal value captures the continuing value of a business after the detailed forecast period."
        },
        {
          id: 6,
          question: "What does precedent transactions analysis examine?",
          options: [
            "What similar companies were acquired for in past deals",
            "Legal precedents in court cases",
            "Previous stock price movements",
            "Historical financial statements"
          ],
          correctAnswer: 0,
          explanation: "Precedent transactions analysis looks at acquisition prices paid for comparable companies."
        },
        {
          id: 7,
          question: "What does LBO analysis determine?",
          options: [
            "What a financial buyer could pay for a company",
            "How much a company should borrow",
            "Optimal capital structure",
            "Stock option values"
          ],
          correctAnswer: 0,
          explanation: "LBO analysis calculates what private equity firms could pay while achieving target returns."
        },
        {
          id: 8,
          question: "What is enterprise value (EV)?",
          options: [
            "Total value of the company (equity + debt - cash)",
            "Market value of equity only",
            "Book value of assets",
            "Revenue multiplied by a multiple"
          ],
          correctAnswer: 0,
          explanation: "EV represents the total value of the business to all capital providers."
        },
        {
          id: 9,
          question: "What does the P/E ratio measure?",
          options: [
            "Price relative to earnings",
            "Profit efficiency",
            "Enterprise value to sales",
            "Debt to equity"
          ],
          correctAnswer: 0,
          explanation: "P/E ratio compares market price per share to earnings per share."
        },
        {
          id: 10,
          question: "What is a control premium?",
          options: [
            "Additional value for acquiring control versus buying minority shares",
            "Discount for lack of control",
            "Premium for controlling expenses",
            "Extra charge for management services"
          ],
          correctAnswer: 0,
          explanation: "Control premium reflects the additional value of being able to direct company decisions."
        },
        {
          id: 11,
          question: "What is sum-of-the-parts valuation used for?",
          options: [
            "Valuing diversified companies with different business segments",
            "Adding up all asset values",
            "Calculating total revenue",
            "Combining multiple valuation methods"
          ],
          correctAnswer: 0,
          explanation: "Sum-of-the-parts values each business segment separately then adds them together."
        },
        {
          id: 12,
          question: "What does EBITDA stand for?",
          options: [
            "Earnings Before Interest, Taxes, Depreciation, and Amortization",
            "Earnings Before Income Tax Deductions and Adjustments",
            "Estimated Business Income Totals and Data Analysis",
            "Ending Balance Including Taxes and Depreciation Amounts"
          ],
          correctAnswer: 0,
          explanation: "EBITDA approximates operating cash flow by removing non-cash and financing items."
        },
        {
          id: 13,
          question: "What is a liquidity discount?",
          options: [
            "Reduction in value for shares that aren't easily tradable",
            "Discount for paying cash",
            "Price reduction for large purchases",
            "Early payment discount"
          ],
          correctAnswer: 0,
          explanation: "Liquidity discount reflects the difficulty of selling illiquid investments quickly."
        },
        {
          id: 14,
          question: "What is the forecast period in DCF typically?",
          options: [
            "5-10 years of detailed projections",
            "1-2 years maximum",
            "20-30 years long-term",
            "Only the current year"
          ],
          correctAnswer: 0,
          explanation: "DCF typically uses 5-10 year forecasts to capture a company's growth phase."
        },
        {
          id: 15,
          question: "What does EV/EBITDA multiple compare?",
          options: [
            "Enterprise value to operating cash flow",
            "Stock price to earnings",
            "Revenue to profits",
            "Assets to liabilities"
          ],
          correctAnswer: 0,
          explanation: "EV/EBITDA compares total company value to operating profitability."
        },
        {
          id: 16,
          question: "What is synergy value in M&A?",
          options: [
            "Additional value from combining companies",
            "Value of working together",
            "Cost of integration",
            "Legal fees for the deal"
          ],
          correctAnswer: 0,
          explanation: "Synergies are cost savings or revenue enhancements from combining businesses."
        },
        {
          id: 17,
          question: "Why use multiple valuation methods?",
          options: [
            "To triangulate on a reasonable value range",
            "Because one method is always wrong",
            "To confuse the client",
            "To fill more pages in reports"
          ],
          correctAnswer: 0,
          explanation: "Multiple methods provide different perspectives that should converge on a value range."
        },
        {
          id: 18,
          question: "What is the perpetuity growth formula used for?",
          options: [
            "Calculating terminal value in DCF",
            "Estimating infinite growth rates",
            "Projecting stock prices forever",
            "Calculating bond yields"
          ],
          correctAnswer: 0,
          explanation: "The perpetuity growth formula calculates terminal value assuming constant growth forever."
        },
        {
          id: 19,
          question: "What does IRR stand for in LBO analysis?",
          options: [
            "Internal Rate of Return",
            "Investment Return Ratio",
            "Interest Rate Risk",
            "Initial Revenue Recognition"
          ],
          correctAnswer: 0,
          explanation: "IRR measures the annualized return an investor would earn on an investment."
        },
        {
          id: 20,
          question: "What is valuation ultimately?",
          options: [
            "Both art and science",
            "A precise mathematical calculation",
            "Just guessing future prices",
            "Only about current market prices"
          ],
          correctAnswer: 0,
          explanation: "Valuation combines quantitative analysis with qualitative judgment about the future."
        }
      ]
    },
    {
      id: 5,
      title: "Mergers and Acquisitions",
      completed: false,
      content: `
# Module 5: Mergers and Acquisitions

Mergers and acquisitions (M&A) are central to investment banking. This module covers the M&A process, deal structures, strategic rationale, and how investment bankers advise clients through these complex transactions.

## What are Mergers and Acquisitions?
M&A refers to transactions where companies combine or one company buys another:

**Merger**: Combination of two companies to form a new entity. In theory, mergers involve equals coming together, though in practice one usually dominates.

**Acquisition**: One company purchases another. The acquired company may continue operating under its own name or be absorbed.

**Takeover**: Acquisition against the target company's wishes (hostile takeover). The acquirer goes directly to shareholders rather than negotiating with management.

**Consolidation**: Multiple companies in the same industry combining to reduce competition and achieve scale.

M&A activity tends to increase during economic expansions as companies seek growth opportunities.

## Strategic Rationale for M&A
Companies pursue M&A for various strategic reasons:

**Growth**: Acquiring revenue and market share faster than organic growth allows. This is particularly attractive in mature industries with slow growth.

**Synergies**: Combining companies to achieve cost savings or revenue enhancements that wouldn't be possible separately. Synergies can come from eliminating duplicate functions, combining purchasing power, or cross-selling products.

**Diversification**: Entering new markets or product lines to reduce dependence on a single business. This can stabilize earnings but may not create as much value as focusing on core strengths.

**Vertical Integration**: Acquiring suppliers (backward integration) or customers (forward integration) to control more of the value chain. This can reduce costs and improve coordination.

**Technology/Acqui-hires**: Buying companies primarily for their technology or talented employees rather than their business operations. Common in fast-moving tech industries.

**Defensive Moves**: Acquiring competitors to preempt them from being acquired by others or to eliminate competitive threats.

**Financial Engineering**: Buying companies to restructure them, improve operations, and sell at a profit. Private equity firms specialize in this approach.

## The M&A Process
A typical M&A transaction follows these stages:

**Strategy Development**: The acquirer identifies what type of company they want to buy and why. This includes defining strategic fit, size parameters, and geographic focus.

**Target Identification**: Creating a list of potential acquisition targets. Investment bankers use databases, industry knowledge, and networks to identify candidates.

**Initial Contact**: Reaching out to potential targets, usually through investment bankers acting as intermediaries to maintain confidentiality.

**Due Diligence**: Thorough investigation of the target company. This includes financial, legal, operational, and commercial due diligence to verify information and identify risks.

**Valuation**: Determining what the target is worth. Multiple valuation methods are used to establish a price range for negotiations.

**Negotiation**: Agreeing on price and terms. This includes not just the purchase price but also deal structure, payment method, and post-closing arrangements.

**Financing**: Arranging funds to pay for the acquisition. This could involve cash, stock, debt, or a combination.

**Signing**: Executing the purchase agreement. This legally binds both parties subject to closing conditions.

**Regulatory Approval**: Obaining necessary approvals from government agencies, which may review the deal for antitrust or other concerns.

**Closing**: Finalizing the transaction with payment and transfer of ownership. The companies are now legally combined.

**Integration**: Merging operations, systems, and cultures after closing. Integration success often determines whether the deal creates value.

## Deal Structures
M&A transactions can be structured in different ways:

**Stock Purchase**: Buying the target company's shares from its shareholders. The buyer acquires the entire company, including all assets and liabilities.

**Asset Purchase**: Buying specific assets of the target company rather than the whole entity. The buyer can pick which assets and liabilities to assume.

**Merger**: Combining companies through a legal merger where one company survives and the other ceases to exist.

**Consolidation**: Both companies disappear and a new entity is formed (true merger in the legal sense).

Each structure has different tax, legal, and accounting implications that must be considered.

## Payment Methods
Acquirers can pay for acquisitions with:

**Cash**: Paying with cash on hand or borrowed funds. Simple for the seller but may strain the buyer's finances.

**Stock**: Issuing new shares to target shareholders. Allows sharing of risk and reward but dilutes existing shareholders.

**Mixed Consideration**: Combination of cash and stock. Provides some cash to sellers while preserving the buyer's cash position.

**Earn-outs**: Additional future payments based on the target's performance after closing. Helps bridge valuation gaps when future performance is uncertain.

## Hostile Takeovers
When a target company resists acquisition, the acquirer may attempt a hostile takeover:

**Tender Offer**: Going directly to shareholders with an offer to buy their shares, bypassing management.

**Proxy Fight**: Trying to replace the target's board of directors with ones who will approve the deal.

**Bear Hug**: Making an attractive public offer that pressures the target's board to negotiate or face shareholder anger if they refuse.

Hostile deals are rare because they're expensive, difficult, and often create integration challenges if management resists.

## Regulatory Considerations
M&A deals often require regulatory approval:

**Antitrust Review**: Government review to ensure the deal won't substantially reduce competition. In the U.S., this is done by the Department of Justice and Federal Trade Commission.

**Industry-Specific Regulations**: Certain industries (banking, utilities, defense) have additional regulatory requirements.

**International Approvals**: Cross-border deals require approvals from regulators in each country involved.

**Shareholder Approval**: Most public company acquisitions require shareholder votes from both companies.

## Post-Merger Integration
Integration is where deals succeed or fail:

**Cultural Integration**: Merging different corporate cultures, which can be more challenging than merging operations.

**Systems Integration**: Combining IT systems, which is often complex and expensive.

**Organizational Integration**: Deciding on management structure and reporting lines.

**Customer Integration**: Ensuring customer service continues smoothly during the transition.

**Cost Synergy Realization**: Actually achieving the cost savings projected during the deal analysis.

Investment bankers often help plan integration, though execution is typically handled by management consultants and internal teams.

Remember: The best deals create value for both companies' shareholders through strategic fit and effective integration.
      `,
      quiz: [
        {
          id: 1,
          question: "What is the difference between a merger and an acquisition?",
          options: [
            "Merger combines companies into new entity, acquisition is one buying another",
            "Merger is friendly, acquisition is hostile",
            "Merger is for equal companies, acquisition is for unequal",
            "There is no difference between them"
          ],
          correctAnswer: 0,
          explanation: "Mergers theoretically combine equals into a new company, while acquisitions involve one company buying another."
        },
        {
          id: 2,
          question: "What are synergies in M&A?",
          options: [
            "Cost savings or revenue enhancements from combining companies",
            "Happy feelings among employees",
            "Similar business strategies",
            "Matching office locations"
          ],
          correctAnswer: 0,
          explanation: "Synergies are the additional value created when companies combine, beyond their separate values."
        },
        {
          id: 3,
          question: "What is the first stage in the M&A process?",
          options: [
            "Strategy development",
            "Due diligence",
            "Negotiation",
            "Closing"
          ],
          correctAnswer: 0,
          explanation: "The process begins with defining what type of company to acquire and why."
        },
        {
          id: 4,
          question: "What is due diligence?",
          options: [
            "Thorough investigation of the target company",
            "Quick review of financial statements",
            "Checking office cleanliness",
            "Counting inventory quickly"
          ],
          correctAnswer: 0,
          explanation: "Due diligence involves comprehensive examination of all aspects of the target company."
        },
        {
          id: 5,
          question: "What is a stock purchase?",
          options: [
            "Buying the target company's shares from shareholders",
            "Purchasing stock on the open market",
            "Buying only selected assets",
            "Issuing new stock to raise money"
          ],
          correctAnswer: 0,
          explanation: "Stock purchase involves buying ownership shares, transferring the entire company including all liabilities."
        },
        {
          id: 6,
          question: "What is a hostile takeover?",
          options: [
            "Acquisition against the target company's wishes",
            "Any acquisition paid with cash",
            "Merger of two competitors",
            "International acquisition"
          ],
          correctAnswer: 0,
          explanation: "Hostile takeovers occur when the acquirer bypasses management to deal directly with shareholders."
        },
        {
          id: 7,
          question: "What is vertical integration?",
          options: [
            "Acquiring suppliers or customers in the value chain",
            "Merging with companies in different industries",
            "Combining with direct competitors",
            "Buying companies in different countries"
          ],
          correctAnswer: 0,
          explanation: "Vertical integration involves acquiring companies upstream (suppliers) or downstream (customers)."
        },
        {
          id: 8,
          question: "What is an earn-out?",
          options: [
            "Additional future payments based on target's performance",
            "Money earned from the deal",
            "Payment for early completion",
            "Bonus for investment bankers"
          ],
          correctAnswer: 0,
          explanation: "Earn-outs tie part of the purchase price to future performance metrics."
        },
        {
          id: 9,
          question: "What do antitrust regulations review?",
          options: [
            "Whether the deal will reduce competition",
            "Tax implications of the deal",
            "Accounting treatment",
            "Employee benefits"
          ],
          correctAnswer: 0,
          explanation: "Antitrust review ensures mergers won't create monopolies or substantially reduce competition."
        },
        {
          id: 10,
          question: "What is post-merger integration?",
          options: [
            "Combining operations, systems, and cultures after closing",
            "Legal paperwork after the deal",
            "Payment of fees to advisors",
            "Announcing the deal to the public"
          ],
          correctAnswer: 0,
          explanation: "Integration is the process of actually combining the companies after the legal transaction closes."
        },
        {
          id: 11,
          question: "What is a tender offer?",
          options: [
            "Going directly to shareholders with an offer to buy their shares",
            "Gentle request to negotiate",
            "Offering tender documents to management",
            "Bidding process for assets"
          ],
          correctAnswer: 0,
          explanation: "Tender offers allow acquirers to bypass resistant management by dealing directly with shareholders."
        },
        {
          id: 12,
          question: "What is diversification through M&A?",
          options: [
            "Entering new markets or product lines",
            "Buying more of the same type of company",
            "Splitting the company into parts",
            "Selling non-core assets"
          ],
          correctAnswer: 0,
          explanation: "Diversification involves acquiring businesses in different industries or markets."
        },
        {
          id: 13,
          question: "What is an asset purchase?",
          options: [
            "Buying specific assets rather than the whole company",
            "Purchasing office equipment",
            "Buying stock assets only",
            "Acquiring only profitable parts"
          ],
          correctAnswer: 0,
          explanation: "Asset purchases allow buyers to select which assets and liabilities to acquire."
        },
        {
          id: 14,
          question: "What is a bear hug in M&A?",
          options: [
            "Making an attractive public offer that pressures the target's board",
            "Friendly acquisition offer",
            "Legal requirement for disclosure",
            "Post-merger employee welcome"
          ],
          correctAnswer: 0,
          explanation: "A bear hug publicly pressures target management to negotiate or face shareholder disapproval."
        },
        {
          id: 15,
          question: "What often determines whether an M&A deal creates value?",
          options: [
            "Successful post-merger integration",
            "The initial purchase price",
            "Size of the investment banking fees",
            "Public announcement timing"
          ],
          correctAnswer: 0,
          explanation: "Integration success is crucial because poor integration can destroy anticipated synergies."
        },
        {
          id: 16,
          question: "What is consolidation in M&A?",
          options: [
            "Multiple companies in same industry combining",
            "Making financial statements consistent",
            "Reducing debt after acquisition",
            "Combining office locations"
          ],
          correctAnswer: 0,
          explanation: "Consolidation reduces the number of competitors in an industry through mergers."
        },
        {
          id: 17,
          question: "What is mixed consideration?",
          options: [
            "Payment combining cash and stock",
            "Different opinions about the deal",
            "Various due diligence reports",
            "Multiple regulatory approvals"
          ],
          correctAnswer: 0,
          explanation: "Mixed consideration provides both immediate cash and ongoing equity participation to sellers."
        },
        {
          id: 18,
          question: "What is strategic rationale in M&A?",
          options: [
            "The business reason for doing the deal",
            "Legal justification for the price",
            "Financial calculations only",
            "Marketing campaign for the merger"
          ],
          correctAnswer: 0,
          explanation: "Strategic rationale explains how the deal supports the company's overall business strategy."
        },
        {
          id: 19,
          question: "What is cultural integration?",
          options: [
            "Merging different corporate cultures",
            "Training on cultural differences",
            "Celebrating different holidays",
            "Language translation services"
          ],
          correctAnswer: 0,
          explanation: "Cultural integration addresses differences in values, behaviors, and work styles between companies."
        },
        {
          id: 20,
          question: "When does M&A activity tend to increase?",
          options: [
            "During economic expansions",
            "During recessions",
            "Only in election years",
            "At the end of fiscal years"
          ],
          correctAnswer: 0,
          explanation: "M&A activity typically increases when economies are growing and financing is readily available."
        }
      ]
    },
    {
      id: 6,
      title: "Capital Raising and IPOs",
      completed: false,
      content: `
# Module 6: Capital Raising and IPOs

Capital raising is a core investment banking function. This module covers how companies raise money through debt and equity offerings, with special focus on Initial Public Offerings (IPOs) - when private companies first sell shares to the public.

## Why Companies Raise Capital
Companies need capital for various reasons:

**Growth Funding**: Financing expansion plans like opening new locations, developing new products, or entering new markets. Growth often requires more capital than internal cash flow can provide.

**Acquisition Funding**: Raising money to buy other companies. Cash acquisitions require substantial capital.

**Debt Refinancing**: Replacing existing debt with new debt at better terms (lower interest rates, longer maturities).

**Working Capital**: Funding day-to-day operations, especially for seasonal businesses or those experiencing rapid growth.

**Balance Sheet Strengthening**: Building cash reserves to weather economic downturns or take advantage of opportunities.

**Shareholder Liquidity**: Allowing early investors or founders to sell some of their shares and realize returns.

## Types of Capital
Companies can raise different types of capital:

**Equity Capital**: Selling ownership shares in the company. Doesn't require repayment but dilutes existing owners.

**Debt Capital**: Borrowing money that must be repaid with interest. Creates fixed obligations but doesn't dilute ownership.

**Hybrid Securities**: Instruments with characteristics of both debt and equity, like convertible bonds or preferred stock.

**Mezzanine Financing**: Subordinated debt that ranks below senior debt but above equity. Often includes equity features like warrants.

The choice depends on cost, risk tolerance, and impact on ownership and control.

## The Initial Public Offering (IPO) Process
An IPO is when a private company first sells shares to the public:

**Decision to Go Public**: The company decides the benefits of being public (access to capital, liquidity for shareholders, prestige) outweigh the costs (disclosure requirements, quarterly reporting, loss of privacy).

**Selecting Underwriters**: Choosing investment banks to manage the IPO. Usually a lead underwriter (bookrunner) and several co-managers.

**Due Diligence and Documentation**: Preparing the registration statement (Form S-1 in the U.S.) with extensive disclosures about the business, financials, risks, and management.

**Roadshow**: Management presents the investment story to institutional investors across multiple cities to generate interest and gauge demand.

**Pricing**: Setting the IPO price based on investor feedback, market conditions, and valuation analysis. Usually happens after market close the day before trading starts.

**Allocation**: Deciding which investors get shares. Investment banks allocate to preferred clients, balancing demand with long-term shareholder quality.

**Trading Begins**: Shares start trading on a stock exchange (NYSE, NASDAQ). The opening price may differ from the IPO price based on supply and demand.

**Stabilization**: Underwriters may support the stock price in early trading by buying shares if the price falls below the IPO price.

**Lock-up Period**: Typically 180 days where insiders (employees, early investors) cannot sell shares to prevent flooding the market.

## IPO Alternatives
Not all companies go public through traditional IPOs:

**Direct Listing**: Company lists shares directly on an exchange without raising new capital or using underwriters. Existing shareholders can sell directly to the public.

**Special Purpose Acquisition Company (SPAC)**: Blank-check company raises money through an IPO first, then merges with a private company to take it public.

**Reverse Merger**: Private company merges with a public shell company to become public without a traditional IPO.

**Regulation A+ Offering**: Smaller public offering with reduced disclosure requirements for companies raising up to $75 million.

## Follow-on Offerings
After going public, companies may do additional offerings:

**Secondary Offering**: Selling additional shares to raise more capital. Dilutes existing shareholders.

**Follow-on Public Offering (FPO)**: Another public offering after the IPO. Can be primary (company sells new shares) or secondary (existing shareholders sell).

**At-the-Market (ATM) Offering**: Selling shares directly into the market over time rather than in a single offering. Provides flexibility to raise capital when needed.

**Rights Issue**: Offering existing shareholders the right to buy additional shares at a discount, allowing them to maintain their ownership percentage.

## Debt Offerings
Companies also raise capital through debt:

**Investment Grade Bonds**: Debt issued by companies with strong credit ratings. Lower interest rates but stringent covenants.

**High-Yield Bonds**: Debt from companies with lower credit ratings. Higher interest rates to compensate for higher risk.

**Convertible Bonds**: Debt that can convert to equity under certain conditions. Lower interest rates due to conversion option.

**Syndicated Loans**: Large loans provided by a group of lenders (bank syndicate). Can be investment grade or leveraged loans.

**Private Placements**: Selling debt directly to institutional investors rather than through public markets.

## The Underwriting Process
Investment banks play key roles in capital raising:

**Firm Commitment Underwriting**: Bank buys all shares from the company and resells to investors, assuming risk if shares don't sell.

**Best Efforts Underwriting**: Bank tries to sell shares but returns unsold shares to the company without guarantee.

**Bookbuilding**: Process of collecting investor indications of interest to determine demand and set price.

**Underwriting Syndicate**: Group of banks that share the underwriting risk and distribution responsibilities.

**Selling Group**: Additional firms that help distribute shares but don't underwrite risk.

## Pricing Considerations
Setting the right price is critical:

**Valuation Range**: Initial price range provided in the prospectus, usually based on comparable companies and DCF analysis.

**Investor Demand**: Feedback from the roadshow helps determine final price within or outside the range.

**Market Conditions**: Overall stock market sentiment affects pricing. IPOs do better in bullish markets.

**Company Fundamentals**: Growth prospects, profitability, competitive position, and management quality.

**Aftermarket Performance**: Underpricing (setting price below true value) creates a "pop" on first trading day, which pleases investors but leaves money on the table for the company.

## Post-IPO Responsibilities
Being public creates ongoing obligations:

**Quarterly and Annual Reporting**: Filing financial statements (10-Q, 10-K) and holding earnings calls.

**Disclosure Requirements**: Timely disclosure of material information that could affect stock price.

**Investor Relations**: Communicating with shareholders, analysts, and potential investors.

**Corporate Governance**: Establishing board committees (audit, compensation, nominating) and following governance standards.

**Regulatory Compliance**: Adhering to securities laws and exchange listing requirements.

Remember: Going public is a major milestone that transforms how a company operates and is perceived.
      `,
      quiz: [
        {
          id: 1,
          question: "What is an IPO?",
          options: [
            "When a private company first sells shares to the public",
            "When a public company buys back shares",
            "When a company issues bonds",
            "When a company merges with another"
          ],
          correctAnswer: 0,
          explanation: "IPO stands for Initial Public Offering - when a company transitions from private to public ownership."
        },
        {
          id: 2,
          question: "What is equity capital?",
          options: [
            "Selling ownership shares in the company",
            "Borrowing money that must be repaid",
            "Using internal cash flow",
            "Selling company assets"
          ],
          correctAnswer: 0,
          explanation: "Equity capital involves selling ownership interests that don't require repayment but dilute ownership."
        },
        {
          id: 3,
          question: "What is the roadshow in an IPO?",
          options: [
            "Management presents to institutional investors to generate interest",
            "Celebratory tour after the IPO",
            "Visiting different stock exchanges",
            "Marketing campaign to retail investors"
          ],
          correctAnswer: 0,
          explanation: "The roadshow is when company management meets with potential investors to market the offering."
        },
        {
          id: 4,
          question: "What is a direct listing?",
          options: [
            "Company lists shares directly without raising new capital",
            "Quick IPO process",
            "Listing on multiple exchanges simultaneously",
            "Private sale to selected investors"
          ],
          correctAnswer: 0,
          explanation: "Direct listings allow companies to go public without raising new money or using underwriters."
        },
        {
          id: 5,
          question: "What is a secondary offering?",
          options: [
            "Selling additional shares after the IPO to raise more capital",
            "Second day of IPO trading",
            "Offering to secondary market investors only",
            "Selling bonds instead of stock"
          ],
          correctAnswer: 0,
          explanation: "Secondary offerings involve selling more shares after a company is already public."
        },
        {
          id: 6,
          question: "What are high-yield bonds?",
          options: [
            "Debt from companies with lower credit ratings and higher interest rates",
            "Government bonds with high safety",
            "Bonds that convert to stock",
            "Short-term corporate debt"
          ],
          correctAnswer: 0,
          explanation: "High-yield bonds offer higher interest rates to compensate for greater default risk."
        },
        {
          id: 7,
          question: "What is firm commitment underwriting?",
          options: [
            "Bank buys all shares and assumes risk if they don't sell",
            "Bank tries to sell but returns unsold shares",
            "Company commits to buy back shares",
            "Investors commit to buy at any price"
          ],
          correctAnswer: 0,
          explanation: "Firm commitment underwriting transfers pricing risk from the company to the underwriter."
        },
        {
          id: 8,
          question: "What is the lock-up period?",
          options: [
            "Time when insiders cannot sell shares after an IPO",
            "Time when stock cannot be traded",
            "Period before IPO pricing",
            "Time when company cannot raise more capital"
          ],
          correctAnswer: 0,
          explanation: "Lock-up periods prevent insiders from flooding the market with shares immediately after IPO."
        },
        {
          id: 9,
          question: "What is a SPAC?",
          options: [
            "Blank-check company that raises money then merges with a private company",
            "Special type of bond",
            "Government lending program",
            "Stock purchase agreement contract"
          ],
          correctAnswer: 0,
          explanation: "SPACs are shell companies that go public first, then acquire private companies to take them public."
        },
        {
          id: 10,
          question: "What is bookbuilding?",
          options: [
            "Collecting investor indications of interest to determine demand",
            "Building accounting books for the company",
            "Creating marketing materials",
            "Recording all stock trades"
          ],
          correctAnswer: 0,
          explanation: "Bookbuilding gathers investor interest to help set the optimal IPO price."
        },
        {
          id: 11,
          question: "Why might a company raise capital?",
          options: [
            "To fund growth expansion plans",
            "To reduce shareholder value",
            "To avoid paying taxes",
            "To make the CEO famous"
          ],
          correctAnswer: 0,
          explanation: "Companies typically raise capital to finance growth, acquisitions, or strengthen their balance sheets."
        },
        {
          id: 12,
          question: "What are convertible bonds?",
          options: [
            "Debt that can convert to equity under certain conditions",
            "Bonds that change interest rates",
            "Bonds convertible to different currencies",
            "Bonds that can be returned for cash"
          ],
          correctAnswer: 0,
          explanation: "Convertible bonds give investors the option to convert debt into company stock."
        },
        {
          id: 13,
          question: "What is underpricing in an IPO?",
          options: [
            "Setting IPO price below true value to create first-day pop",
            "Charging too little for underwriting services",
            "Incorrect accounting valuation",
            "Pricing bonds too low"
          ],
          correctAnswer: 0,
          explanation: "Underpricing intentionally sets a low IPO price to ensure strong aftermarket performance."
        },
        {
          id: 14,
          question: "What is a rights issue?",
          options: [
            "Offering existing shareholders the right to buy additional shares",
            "Legal right to invest in any IPO",
            "Employee stock option program",
            "Right to vote on corporate matters"
          ],
          correctAnswer: 0,
          explanation: "Rights issues allow current shareholders to maintain their ownership percentage when new shares are issued."
        },
        {
          id: 15,
          question: "What is mezzanine financing?",
          options: [
            "Subordinated debt with equity features",
            "Middle-tier bank lending",
            "Medium-term loans",
            "Financing for medium-sized companies"
          ],
          correctAnswer: 0,
          explanation: "Mezzanine financing sits between senior debt and equity in the capital structure."
        },
        {
          id: 16,
          question: "What do investment banks do as underwriters?",
          options: [
            "Manage the IPO process and assume pricing risk",
            "Only provide legal advice",
            "Just distribute shares to clients",
            "Set stock exchange rules"
          ],
          correctAnswer: 0,
          explanation: "Underwriters organize the offering, price the securities, and bear distribution risk."
        },
        {
          id: 17,
          question: "What is a reverse merger?",
          options: [
            "Private company merges with a public shell to go public",
            "Acquirer becomes the acquired company",
            "Merger that is later undone",
            "Combining then separating companies"
          ],
          correctAnswer: 0,
          explanation: "Reverse mergers provide an alternative path to going public without a traditional IPO."
        },
        {
          id: 18,
          question: "What is an at-the-market (ATM) offering?",
          options: [
            "Selling shares directly into the market over time",
            "Offering only to market makers",
            "Selling at current market price immediately",
            "Offering through automated teller machines"
          ],
          correctAnswer: 0,
          explanation: "ATM offerings allow companies to sell shares gradually when market conditions are favorable."
        },
        {
          id: 19,
          question: "What is syndicated loan?",
          options: [
            "Large loan provided by a group of lenders",
            "Loan to multiple companies",
            "Loan with syndicated interest payments",
            "Loan traded like a bond"
          ],
          correctAnswer: 0,
          explanation: "Syndicated loans involve multiple banks sharing the lending risk for large borrowings."
        },
        {
          id: 20,
          question: "What ongoing obligation comes with being public?",
          options: [
            "Quarterly and annual financial reporting",
            "Daily stock price announcements",
            "Weekly investor meetings",
            "Monthly dividend payments"
          ],
          correctAnswer: 0,
          explanation: "Public companies must regularly disclose financial results and material information to investors."
        }
      ]
    }
  ],
  
  // Final Exam (40 questions covering all modules)
  finalExam: {
    title: "Investment Banking Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules. You need to score 70% or higher to pass.",
    passingScore: 28, // 70% of 40 questions
    questions: [
      // Module 1 Questions (7 questions)
      {
        id: 1,
        question: "What is the main difference between investment banking and commercial banking?",
        options: [
          "Investment banks help with large financial transactions, commercial banks take deposits and make loans",
          "Investment banks are smaller than commercial banks",
          "Commercial banks only work with individuals, investment banks only work with companies",
          "There is no difference between them"
        ],
        correctAnswer: 0,
        explanation: "Investment banks focus on capital markets and advisory services, while commercial banks focus on deposit-taking and lending.",
        module: 1
      },
      {
        id: 2,
        question: "What service involves helping companies raise money by issuing stocks or bonds?",
        options: [
          "Capital raising",
          "Mergers and acquisitions",
          "Sales and trading",
          "Research analysis"
        ],
        correctAnswer: 0,
        explanation: "Capital raising involves underwriting securities offerings to help companies obtain funding.",
        module: 1
      },
      {
        id: 3,
        question: "Who works directly with corporate clients on transactions like mergers?",
        options: [
          "Investment bankers",
          "Traders",
          "Research analysts",
          "Compliance officers"
        ],
        correctAnswer: 0,
        explanation: "Investment bankers advise corporate clients on strategic transactions and capital raising.",
        module: 1
      },
      {
        id: 4,
        question: "What is the typical entry-level position in investment banking?",
        options: [
          "Analyst",
          "Managing Director",
          "Vice President",
          "Chief Executive Officer"
        ],
        correctAnswer: 0,
        explanation: "Analyst is the standard entry point for recent graduates in investment banking.",
        module: 1
      },
      {
        id: 5,
        question: "What do research analysts primarily do?",
        options: [
          "Study companies and provide investment recommendations",
          "Execute trades in the market",
          "Manage client relationships",
          "Process payroll for bank employees"
        ],
        correctAnswer: 0,
        explanation: "Research analysts analyze companies and industries to provide investment advice to clients.",
        module: 1
      },
      {
        id: 6,
        question: "What is underwriting in investment banking?",
        options: [
          "Helping companies issue new stocks or bonds to raise capital",
          "Writing insurance policies",
          "Signing documents for loans",
          "Approving credit card applications"
        ],
        correctAnswer: 0,
        explanation: "Underwriting involves investment banks purchasing securities from issuers and selling them to investors.",
        module: 1
      },
      {
        id: 7,
        question: "What ethical consideration involves protecting sensitive client information?",
        options: [
          "Confidential information",
          "Fair dealing",
          "Regulatory compliance",
          "Office cleanliness"
        ],
        correctAnswer: 0,
        explanation: "Confidentiality is crucial in investment banking to protect client information.",
        module: 1
      },
      
      // Module 2 Questions (7 questions)
      {
        id: 8,
        question: "Where are long-term securities like stocks and bonds traded?",
        options: [
          "Capital markets",
          "Money markets",
          "Derivatives markets",
          "Commodity markets"
        ],
        correctAnswer: 0,
        explanation: "Capital markets facilitate trading of long-term investment securities.",
        module: 2
      },
      {
        id: 9,
        question: "What do common stockholders typically have that preferred stockholders usually don't?",
        options: [
          "Voting rights",
          "Fixed dividends",
          "Priority in bankruptcy",
          "Guaranteed returns"
        ],
        correctAnswer: 0,
        explanation: "Common stockholders generally have voting rights, while preferred stockholders receive fixed dividends.",
        module: 2
      },
      {
        id: 10,
        question: "What are bonds?",
        options: [
          "Long-term debt securities where issuers promise to pay interest and repay principal",
          "Short-term loans between banks",
          "Insurance policies for investments",
          "Guarantees of stock performance"
        ],
        correctAnswer: 0,
        explanation: "Bonds are debt instruments with fixed interest payments and maturity dates.",
        module: 2
      },
      {
        id: 11,
        question: "What are Treasury bills?",
        options: [
          "Short-term U.S. government securities with maturities of one year or less",
          "Long-term corporate bonds",
          "State government debt instruments",
          "International currency notes"
        ],
        correctAnswer: 0,
        explanation: "Treasury bills are short-term, highly liquid government debt securities.",
        module: 2
      },
      {
        id: 12,
        question: "What do derivatives derive their value from?",
        options: [
          "Underlying assets",
          "Government guarantees",
          "Bank deposits",
          "Company reputations"
        ],
        correctAnswer: 0,
        explanation: "Derivatives are financial contracts whose value depends on underlying assets.",
        module: 2
      },
      {
        id: 13,
        question: "What is the largest financial market by trading volume?",
        options: [
          "Foreign exchange markets",
          "Stock markets",
          "Bond markets",
          "Commodity markets"
        ],
        correctAnswer: 0,
        explanation: "The foreign exchange market has the highest daily trading volume globally.",
        module: 2
      },
      {
        id: 14,
        question: "What are municipal bonds?",
        options: [
          "Bonds issued by state and local governments",
          "Bonds issued by foreign governments",
          "Corporate bonds for infrastructure projects",
          "Bonds backed by mortgages"
        ],
        correctAnswer: 0,
        explanation: "Municipal bonds finance state and local government projects.",
        module: 2
      },
      
      // Module 3 Questions (6 questions)
      {
        id: 15,
        question: "Which financial statement shows profitability over a period of time?",
        options: [
          "Income statement",
          "Balance sheet",
          "Cash flow statement",
          "Statement of equity"
        ],
        correctAnswer: 0,
        explanation: "The income statement reports revenues, expenses, and profits over a period.",
        module: 3
      },
      {
        id: 16,
        question: "What is the accounting equation for the balance sheet?",
        options: [
          "Assets = Liabilities + Equity",
          "Revenue - Expenses = Profit",
          "Assets - Liabilities = Equity",
          "Cash In - Cash Out = Net Cash"
        ],
        correctAnswer: 0,
        explanation: "The balance sheet must always balance with this equation.",
        module: 3
      },
      {
        id: 17,
        question: "What does gross profit equal?",
        options: [
          "Revenue minus cost of goods sold",
          "Revenue minus all expenses",
          "Cash received minus cash paid",
          "Assets minus liabilities"
        ],
        correctAnswer: 0,
        explanation: "Gross profit measures profitability after direct production costs.",
        module: 3
      },
      {
        id: 18,
        question: "Which cash flow category includes cash from core business operations?",
        options: [
          "Operating activities",
          "Investing activities",
          "Financing activities",
          "Non-operating activities"
        ],
        correctAnswer: 0,
        explanation: "Operating activities reflect cash from primary business operations.",
        module: 3
      },
      {
        id: 19,
        question: "What does the current ratio measure?",
        options: [
          "Short-term solvency",
          "Profitability",
          "Long-term debt capacity",
          "Investment returns"
        ],
        correctAnswer: 0,
        explanation: "Current ratio measures ability to pay short-term obligations.",
        module: 3
      },
      {
        id: 20,
        question: "What is net income?",
        options: [
          "Final profit after all expenses",
          "Revenue from sales",
          "Cash in the bank",
          "Value of company assets"
        ],
        correctAnswer: 0,
        explanation: "Net income is the bottom-line profit after all deductions.",
        module: 3
      },
      
      // Module 4 Questions (6 questions)
      {
        id: 21,
        question: "What are the three main valuation approaches?",
        options: [
          "Income, market, and asset approaches",
          "Historical, current, and future approaches",
          "Simple, moderate, and complex approaches",
          "Accounting, economic, and market approaches"
        ],
        correctAnswer: 0,
        explanation: "These three approaches provide different perspectives on value.",
        module: 4
      },
      {
        id: 22,
        question: "What does DCF stand for in valuation?",
        options: [
          "Discounted Cash Flow",
          "Direct Comparable Financing",
          "Dollar Cost Foundation",
          "Dividend Capitalization Formula"
        ],
        correctAnswer: 0,
        explanation: "DCF values companies based on future cash flows discounted to present value.",
        module: 4
      },
      {
        id: 23,
        question: "What does comparable company analysis use?",
        options: [
          "Valuation multiples from similar public companies",
          "Only the target company's financials",
          "Government bond rates",
          "Economic growth forecasts"
        ],
        correctAnswer: 0,
        explanation: "Comparable analysis benchmarks against similar companies' market valuations.",
        module: 4
      },
      {
        id: 24,
        question: "What is enterprise value (EV)?",
        options: [
          "Total value of the company (equity + debt - cash)",
          "Market value of equity only",
          "Book value of assets",
          "Revenue multiplied by a multiple"
        ],
        correctAnswer: 0,
        explanation: "EV represents total business value to all capital providers.",
        module: 4
      },
      {
        id: 25,
        question: "What does the P/E ratio measure?",
        options: [
          "Price relative to earnings",
          "Profit efficiency",
          "Enterprise value to sales",
          "Debt to equity"
        ],
        correctAnswer: 0,
        explanation: "P/E ratio compares stock price to earnings per share.",
        module: 4
      },
      {
        id: 26,
        question: "What is a control premium?",
        options: [
          "Additional value for acquiring control versus buying minority shares",
          "Discount for lack of control",
          "Premium for controlling expenses",
          "Extra charge for management services"
        ],
        correctAnswer: 0,
        explanation: "Control premium reflects the value of being able to direct company decisions.",
        module: 4
      },
      
      // Module 5 Questions (7 questions)
      {
        id: 27,
        question: "What is the difference between a merger and an acquisition?",
        options: [
          "Merger combines companies into new entity, acquisition is one buying another",
          "Merger is friendly, acquisition is hostile",
          "Merger is for equal companies, acquisition is for unequal",
          "There is no difference between them"
        ],
        correctAnswer: 0,
        explanation: "Mergers combine companies, while acquisitions involve one company purchasing another.",
        module: 5
      },
      {
        id: 28,
        question: "What are synergies in M&A?",
        options: [
          "Cost savings or revenue enhancements from combining companies",
          "Happy feelings among employees",
          "Similar business strategies",
          "Matching office locations"
        ],
        correctAnswer: 0,
        explanation: "Synergies create additional value beyond the sum of the separate companies.",
        module: 5
      },
      {
        id: 29,
        question: "What is due diligence?",
        options: [
          "Thorough investigation of the target company",
          "Quick review of financial statements",
          "Checking office cleanliness",
          "Counting inventory quickly"
        ],
        correctAnswer: 0,
        explanation: "Due diligence examines all aspects of a target company before acquisition.",
        module: 5
      },
      {
        id: 30,
        question: "What is a hostile takeover?",
        options: [
          "Acquisition against the target company's wishes",
          "Any acquisition paid with cash",
          "Merger of two competitors",
          "International acquisition"
        ],
        correctAnswer: 0,
        explanation: "Hostile takeovers bypass target management to deal directly with shareholders.",
        module: 5
      },
      {
        id: 31,
        question: "What is vertical integration?",
        options: [
          "Acquiring suppliers or customers in the value chain",
          "Merging with companies in different industries",
          "Combining with direct competitors",
          "Buying companies in different countries"
        ],
        correctAnswer: 0,
        explanation: "Vertical integration expands control over the supply chain.",
        module: 5
      },
      {
        id: 32,
        question: "What do antitrust regulations review?",
        options: [
          "Whether the deal will reduce competition",
          "Tax implications of the deal",
          "Accounting treatment",
          "Employee benefits"
        ],
        correctAnswer: 0,
        explanation: "Antitrust review prevents mergers that would substantially reduce competition.",
        module: 5
      },
      {
        id: 33,
        question: "What often determines whether an M&A deal creates value?",
        options: [
          "Successful post-merger integration",
          "The initial purchase price",
          "Size of the investment banking fees",
          "Public announcement timing"
        ],
        correctAnswer: 0,
        explanation: "Integration success is crucial for realizing anticipated synergies.",
        module: 5
      },
      
      // Module 6 Questions (7 questions)
      {
        id: 34,
        question: "What is an IPO?",
        options: [
          "When a private company first sells shares to the public",
          "When a public company buys back shares",
          "When a company issues bonds",
          "When a company merges with another"
        ],
        correctAnswer: 0,
        explanation: "IPO stands for Initial Public Offering.",
        module: 6
      },
      {
        id: 35,
        question: "What is equity capital?",
        options: [
          "Selling ownership shares in the company",
          "Borrowing money that must be repaid",
          "Using internal cash flow",
          "Selling company assets"
        ],
        correctAnswer: 0,
        explanation: "Equity capital involves selling ownership interests.",
        module: 6
      },
      {
        id: 36,
        question: "What is the roadshow in an IPO?",
        options: [
          "Management presents to institutional investors to generate interest",
          "Celebratory tour after the IPO",
          "Visiting different stock exchanges",
          "Marketing campaign to retail investors"
        ],
        correctAnswer: 0,
        explanation: "The roadshow markets the offering to potential investors.",
        module: 6
      },
      {
        id: 37,
        question: "What is a direct listing?",
        options: [
          "Company lists shares directly without raising new capital",
          "Quick IPO process",
          "Listing on multiple exchanges simultaneously",
          "Private sale to selected investors"
        ],
        correctAnswer: 0,
        explanation: "Direct listings provide liquidity without raising new capital.",
        module: 6
      },
      {
        id: 38,
        question: "What is a secondary offering?",
        options: [
          "Selling additional shares after the IPO to raise more capital",
          "Second day of IPO trading",
          "Offering to secondary market investors only",
          "Selling bonds instead of stock"
        ],
        correctAnswer: 0,
        explanation: "Secondary offerings involve additional share sales after going public.",
        module: 6
      },
      {
        id: 39,
        question: "What are high-yield bonds?",
        options: [
          "Debt from companies with lower credit ratings and higher interest rates",
          "Government bonds with high safety",
          "Bonds that convert to stock",
          "Short-term corporate debt"
        ],
        correctAnswer: 0,
        explanation: "High-yield bonds compensate investors for higher default risk.",
        module: 6
      },
      {
        id: 40,
        question: "What is the lock-up period?",
        options: [
          "Time when insiders cannot sell shares after an IPO",
          "Time when stock cannot be traded",
          "Period before IPO pricing",
          "Time when company cannot raise more capital"
        ],
        correctAnswer: 0,
        explanation: "Lock-up periods prevent insider sales from depressing the stock price.",
        module: 6
      }
    ]
  }
};
