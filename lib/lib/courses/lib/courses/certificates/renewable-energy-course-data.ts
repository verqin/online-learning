// Renewable Energy (Certificate) - Complete Course Data
// This is a single, continuous file with all modules and exam

export const renewableEnergyCertificateCourse = {
  // ==================== COURSE METADATA ====================
  id: "renewable-energy-certificate",
  title: "Renewable Energy (Certificate)",
  description: "Learn the fundamentals of clean energy technologies in simple, practical terms. Understand how solar, wind, hydro, and other renewable sources work, and how they're changing our world.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🌱",
  badge: "Certificate",
  totalModules: 6,
  
  // ==================== MODULE 1: RENEWABLE ENERGY BASICS ====================
  modules: [
    {
      id: 1,
      title: "What is Renewable Energy?",
      completed: false,
      content: `
# Module 1: Understanding Renewable Energy Basics

Welcome to your renewable energy journey! This module introduces the core concepts that make clean energy so important today.

## **The Big Picture**

Renewable energy comes from natural sources that replenish themselves. Unlike fossil fuels that can run out, renewable sources are constantly available. Think of them as "energy that keeps giving" rather than "energy we're using up."

## **Why It Matters Today**

Three main reasons drive the renewable energy revolution:

**1. Environmental Protection**
- Renewable energy produces little to no greenhouse gases
- It reduces air and water pollution
- It helps protect natural habitats from mining and drilling

**2. Energy Security**
- Countries can produce their own energy instead of importing oil
- Renewable sources are available everywhere (sun, wind, water)
- It creates local jobs in installation and maintenance

**3. Long-term Savings**
- Once installed, renewable systems have very low operating costs
- Energy prices stay stable (no fuel price fluctuations)
- Maintenance costs are predictable and manageable

## **The Five Main Renewable Sources**

Let's meet the five main renewable energy technologies:

**Solar Energy** - Capturing energy from sunlight
- Photovoltaic panels convert sunlight directly to electricity
- Solar thermal systems use sunlight to heat water or air
- Works anywhere with daylight, even on cloudy days

**Wind Energy** - Using moving air to generate power
- Wind turbines convert wind motion into electricity
- Can be installed on land (onshore) or in water (offshore)
- Best in areas with consistent wind patterns

**Hydropower** - Energy from flowing water
- Uses dams or flowing rivers to spin turbines
- One of the oldest and most reliable renewable sources
- Provides stable, continuous power supply

**Geothermal Energy** - Heat from inside the Earth
- Uses underground heat to create steam for electricity
- Also used for direct heating of buildings
- Available 24/7 regardless of weather conditions

**Biomass Energy** - Energy from organic materials
- Burns plant materials, agricultural waste, or organic waste
- Can be converted to biofuels for transportation
- Helps reduce landfill waste while producing energy

## **Simple Science Behind Renewables**

The basic principle across all renewable technologies is **energy conversion**:

1. **Natural energy** (sun, wind, water) exists in the environment
2. **Technology captures** this energy using specific devices
3. **Conversion happens** to turn it into usable electricity or heat
4. **Distribution systems** deliver it to where it's needed

Think of it like a waterwheel in a stream:
- The flowing water (natural energy) turns the wheel (capture)
- The wheel's motion powers a mill (conversion)
- The mill grinds grain into flour (useful work)

Modern renewable systems work on the same principle, just with advanced technology.

## **Everyday Examples**

You're already using renewable energy more than you might realize:

**At Home**
- Solar water heaters on rooftops
- Small wind turbines for garden lighting
- Geothermal heat pumps for home heating

**In Your Community**
- Solar panels on schools and libraries
- Wind farms visible from highways
- Hydroelectric dams providing local electricity

**In Transportation**
- Electric cars charged with renewable energy
- Buses running on biofuels
- Bicycle sharing systems powered by solar stations

## **Key Terms to Remember**

**Green Energy** - Another name for renewable energy, emphasizing environmental benefits

**Clean Energy** - Energy that doesn't pollute the air or water during production

**Sustainable Energy** - Energy sources that won't run out and can support future generations

**Carbon Footprint** - The amount of carbon dioxide released by energy use (renewables have low footprints)

## **Getting Started with Renewables**

Anyone can participate in the renewable energy movement:

**Simple Steps for Beginners**
1. Learn about energy conservation (using less is the first step)
2. Support renewable energy programs in your community
3. Consider small renewable installations at home
4. Stay informed about new renewable technologies

Remember: Renewable energy isn't just for experts or large companies. Every person who learns about it and supports it helps build a cleaner energy future.

**Next Steps**: In Module 2, we'll explore Solar Energy - the most accessible renewable technology for most people.
`,
      quiz: [
        {
          id: 1,
          question: "What is the main characteristic of renewable energy sources?",
          options: [
            "They never run out and replenish naturally",
            "They are cheaper than all other energy sources",
            "They only work in special locations",
            "They require constant maintenance"
          ],
          correctAnswer: 0,
          explanation: "Renewable energy sources replenish themselves naturally, unlike fossil fuels that can be completely used up."
        },
        {
          id: 2,
          question: "Which renewable energy source uses flowing water to generate power?",
          options: [
            "Hydropower",
            "Solar energy",
            "Geothermal energy",
            "Biomass energy"
          ],
          correctAnswer: 0,
          explanation: "Hydropower uses the energy of flowing water, typically through dams or river turbines, to generate electricity."
        },
        {
          id: 3,
          question: "What are the three main reasons driving renewable energy adoption mentioned in the module?",
          options: [
            "Environmental protection, energy security, and long-term savings",
            "Government regulations, high profits, and public pressure",
            "Limited oil supply, population growth, and technology advancement",
            "Climate change, corporate interests, and international agreements"
          ],
          correctAnswer: 0,
          explanation: "The three main drivers are environmental benefits (clean air/water), energy independence, and cost savings over time."
        },
        {
          id: 4,
          question: "Which renewable energy source comes from heat inside the Earth?",
          options: [
            "Geothermal energy",
            "Solar energy",
            "Wind energy",
            "Biomass energy"
          ],
          correctAnswer: 0,
          explanation: "Geothermal energy taps into the natural heat beneath the Earth's surface to generate electricity or provide heating."
        },
        {
          id: 5,
          question: "What does 'carbon footprint' refer to in renewable energy context?",
          options: [
            "Amount of carbon dioxide released by energy use",
            "Size of renewable energy installations",
            "Cost of reducing carbon emissions",
            "Number of trees needed to offset energy use"
          ],
          correctAnswer: 0,
          explanation: "Carbon footprint measures how much carbon dioxide is released through energy production and consumption."
        },
        {
          id: 6,
          question: "Which renewable energy source converts sunlight directly into electricity?",
          options: [
            "Solar photovoltaic panels",
            "Wind turbines",
            "Hydroelectric dams",
            "Geothermal plants"
          ],
          correctAnswer: 0,
          explanation: "Solar photovoltaic (PV) panels convert sunlight directly into electricity through the photovoltaic effect."
        },
        {
          id: 7,
          question: "What is another common name for renewable energy that emphasizes environmental benefits?",
          options: [
            "Green energy",
            "Blue energy",
            "Pure energy",
            "Natural energy"
          ],
          correctAnswer: 0,
          explanation: "'Green energy' is commonly used to describe renewable energy sources because of their environmental benefits."
        },
        {
          id: 8,
          question: "Which renewable energy source uses organic materials like plant waste?",
          options: [
            "Biomass energy",
            "Solar energy",
            "Wind energy",
            "Geothermal energy"
          ],
          correctAnswer: 0,
          explanation: "Biomass energy comes from burning or processing organic materials such as agricultural waste, wood, or plant matter."
        },
        {
          id: 9,
          question: "What basic principle do all renewable energy technologies share?",
          options: [
            "Energy conversion from natural sources to usable forms",
            "Requiring government subsidies to be affordable",
            "Needing large land areas for installation",
            "Working only during daytime hours"
          ],
          correctAnswer: 0,
          explanation: "All renewable technologies convert natural energy (sun, wind, water) into usable electricity or heat through various methods."
        },
        {
          id: 10,
          question: "Which of these is NOT listed as a simple step for beginners interested in renewable energy?",
          options: [
            "Investing in oil companies",
            "Learning about energy conservation",
            "Supporting community renewable programs",
            "Staying informed about new technologies"
          ],
          correctAnswer: 0,
          explanation: "Investing in oil companies is not a step toward renewable energy adoption. The module suggests conservation, community support, and staying informed."
        },
        {
          id: 11,
          question: "What makes renewable energy sources different from fossil fuels?",
          options: [
            "They replenish naturally and don't run out",
            "They are always cheaper to install",
            "They work in every location equally well",
            "They require no maintenance at all"
          ],
          correctAnswer: 0,
          explanation: "The key difference is that renewable sources naturally replenish themselves, while fossil fuels are finite and can be depleted."
        },
        {
          id: 12,
          question: "Which renewable energy source can provide power 24/7 regardless of weather?",
          options: [
            "Geothermal energy",
            "Solar energy",
            "Wind energy",
            "All renewable sources"
          ],
          correctAnswer: 0,
          explanation: "Geothermal energy comes from the Earth's internal heat, which is constant and available continuously, unlike solar or wind which depend on weather conditions."
        },
        {
          id: 13,
          question: "What is the energy security benefit of renewable energy mentioned in the module?",
          options: [
            "Countries can produce their own energy instead of importing",
            "Renewable energy is completely free once installed",
            "It requires no technical knowledge to operate",
            "It works during power outages automatically"
          ],
          correctAnswer: 0,
          explanation: "Energy security means countries can generate their own power from local renewable sources rather than depending on imported fossil fuels."
        },
        {
          id: 14,
          question: "What everyday example of renewable energy was mentioned for homes?",
          options: [
            "Solar water heaters on rooftops",
            "Nuclear power plants in backyards",
            "Coal-fired heating systems",
            "Gasoline-powered generators"
          ],
          correctAnswer: 0,
          explanation: "Solar water heaters are a common and accessible renewable energy application for residential buildings."
        },
        {
          id: 15,
          question: "Which term describes energy sources that can support future generations without depletion?",
          options: [
            "Sustainable energy",
            "Temporary energy",
            "Limited energy",
            "Experimental energy"
          ],
          correctAnswer: 0,
          explanation: "Sustainable energy refers to sources that can meet current needs without compromising the ability of future generations to meet theirs."
        },
        {
          id: 16,
          question: "What is the first recommended step for someone starting with renewable energy?",
          options: [
            "Learn about energy conservation",
            "Install solar panels immediately",
            "Buy an electric vehicle",
            "Invest in wind farm stocks"
          ],
          correctAnswer: 0,
          explanation: "The module suggests starting with energy conservation - reducing consumption is the first and most cost-effective step toward sustainable energy use."
        },
        {
          id: 17,
          question: "Which renewable energy source was described as one of the oldest and most reliable?",
          options: [
            "Hydropower",
            "Solar energy",
            "Wind energy",
            "Biomass energy"
          ],
          correctAnswer: 0,
          explanation: "Hydropower has been used for centuries (water wheels) and modern hydroelectric plants provide very reliable, consistent power."
        },
        {
          id: 18,
          question: "What do wind turbines convert into electricity?",
          options: [
            "Wind motion",
            "Sunlight",
            "Water flow",
            "Underground heat"
          ],
          correctAnswer: 0,
          explanation: "Wind turbines capture the kinetic energy of moving air (wind) and convert it into electrical energy through generators."
        },
        {
          id: 19,
          question: "What type of renewable energy can use agricultural waste as fuel?",
          options: [
            "Biomass energy",
            "Solar energy",
            "Geothermal energy",
            "Hydropower"
          ],
          correctAnswer: 0,
          explanation: "Biomass energy systems can burn or process agricultural residues like crop waste, making productive use of materials that might otherwise be discarded."
        },
        {
          id: 20,
          question: "Why is renewable energy considered 'clean' energy?",
          options: [
            "It produces little to no pollution during operation",
            "The equipment is always shiny and new",
            "It comes from naturally clean sources only",
            "It requires water for cleaning regularly"
          ],
          correctAnswer: 0,
          explanation: "'Clean energy' refers to energy production that doesn't pollute air or water with harmful emissions, which is characteristic of most renewable sources during operation."
        }
      ]
    },

    // ==================== MODULE 2: SOLAR ENERGY FUNDAMENTALS ====================
    {
      id: 2,
      title: "Solar Energy Made Simple",
      completed: false,
      content: `
# Module 2: Harnessing the Power of the Sun

Solar energy is the most accessible renewable technology for most people. This module explains how sunlight becomes electricity in terms everyone can understand.

## **How Sunlight Becomes Electricity**

The process is simpler than you might think:

**Step 1: Sunlight Hits the Panel**
- Photons (light particles) from the sun strike solar panels
- These panels contain special materials called semiconductors
- Most solar panels use silicon, the same material in computer chips

**Step 2: Energy Transfer Happens**
- Sunlight energy knocks electrons loose from their atoms
- This creates electrical charges in the solar cells
- Multiple cells connected together form a solar panel

**Step 3: Electricity is Generated**
- The moving electrons create direct current (DC) electricity
- An inverter converts DC to alternating current (AC) for home use
- The electricity powers your appliances or goes back to the grid

Think of it like a water slide:
- Sunlight is like water flowing down the slide
- Electrons are like people sliding down
- The movement creates energy we can use

## **Two Main Types of Solar Systems**

**1. Solar Photovoltaic (PV) Systems**
- Convert sunlight directly to electricity
- Used for powering homes, businesses, and utilities
- Can be installed on rooftops or ground mounts
- Work even on cloudy days (though less efficiently)

**2. Solar Thermal Systems**
- Use sunlight to heat water or air
- Common for residential hot water heating
- Also used in large-scale power plants
- Simple technology with few moving parts

## **Where Solar Works Best**

Solar panels work almost everywhere, but some locations are better than others:

**Ideal Conditions**
- Areas with plenty of direct sunlight
- Rooftops facing south (in the Northern Hemisphere)
- Locations with minimal shading from trees or buildings
- Places with moderate temperatures (not too hot)

**But here's the good news:** Solar works in many less-than-ideal places too:
- Cloudy regions still get enough light for solar
- East or west-facing roofs can still be effective
- Cooler climates often have better panel efficiency
- Even vertical walls can host solar installations

## **Solar Panel Components Explained**

A typical solar system includes:

**Solar Panels** - Capture sunlight
- Made of many solar cells connected together
- Protected by glass and framed in aluminum
- Designed to withstand weather for 25+ years

**Inverter** - Converts the electricity
- Changes DC from panels to AC for your home
- Can be one large unit or multiple micro-inverters
- Some systems include battery storage capability

**Mounting System** - Holds everything in place
- Rooftop mounts attach to your roof structure
- Ground mounts stand independently on the ground
- Tracking systems follow the sun for better efficiency

**Monitoring System** - Tells you how it's working
- Shows daily energy production
- Alerts you to any problems
- Helps optimize energy use patterns

## **Solar Energy in Daily Life**

**Residential Solar**
- Rooftop systems power individual homes
- Can reduce or eliminate electricity bills
- Excess power can be sold back to utilities
- Battery storage allows night-time solar use

**Community Solar**
- Shared solar installations serving multiple homes
- People subscribe to portions of a larger system
- No need for suitable rooftop space
- Lower cost through shared infrastructure

**Utility-Scale Solar**
- Large solar farms powering entire communities
- Often located on unused land
- Provide clean energy to the electrical grid
- Can be combined with agriculture (agrivoltaics)

## **Understanding Solar Economics**

**Initial Costs vs. Long-term Savings**
- Installation costs have dropped dramatically
- Most systems pay for themselves in 5-10 years
- After that, electricity is essentially free
- Many areas offer incentives and tax credits

**Maintenance Requirements**
- Solar panels need very little maintenance
- Occasional cleaning if in dusty areas
- Monitoring system performance regularly
- Professional inspections every few years

**Lifespan and Warranties**
- Most panels last 25-30 years or more
- Performance warranties guarantee 80-90% output after 25 years
- Inverters typically last 10-15 years
- Systems often outlive their warranty periods

## **Common Questions Answered**

**"What happens at night?"**
- Systems connect to the grid for night-time power
- Battery storage systems are increasingly popular
- Net metering credits daytime production against night use

**"What about cloudy days?"**
- Solar panels work with diffuse light
- Modern panels are surprisingly efficient in low light
- Systems are designed for average conditions, not perfect ones

**"Can I go completely off-grid?"**
- Yes, with sufficient panels and battery storage
- Most homes stay grid-connected for reliability
- Off-grid systems require careful energy management

**"Is my roof suitable?"**
- Most roofs can support solar panels
- Age and condition matter more than material
- Professional assessments determine suitability

## **Getting Started with Solar**

**Steps to Consider Solar**
1. **Assess your energy use** - Look at past electricity bills
2. **Evaluate your site** - Consider roof space, orientation, shading
3. **Get multiple quotes** - Compare different system designs and prices
4. **Explore financing** - Loans, leases, and power purchase agreements
5. **Check incentives** - Local, state, and federal programs can help

**Simple Solar Applications Anyone Can Try**
- Solar-powered outdoor lights
- Solar phone chargers
- Solar attic fans
- Portable solar panels for camping

## **The Future of Solar Energy**

**Technology Improvements**
- Panels becoming more efficient each year
- Building-integrated photovoltaics (solar windows, shingles)
- Floating solar farms on reservoirs and lakes
- Solar paint and flexible solar materials

**Integration with Other Technologies**
- Solar plus battery storage systems
- Smart home energy management
- Electric vehicle charging with solar
- Microgrids for community resilience

Solar energy represents one of the most democratic energy technologies - available to homeowners, renters, businesses, and communities alike.

**Next Module**: We'll explore Wind Energy - another powerful renewable source that's transforming energy production worldwide.
`,
      quiz: [
        {
          id: 1,
          question: "What is the main material used in most solar panels?",
          options: [
            "Silicon",
            "Copper",
            "Aluminum",
            "Plastic"
          ],
          correctAnswer: 0,
          explanation: "Most solar panels use silicon semiconductors, similar to computer chips, to convert sunlight into electricity."
        },
        {
          id: 2,
          question: "What device converts DC electricity from solar panels to AC for home use?",
          options: [
            "Inverter",
            "Transformer",
            "Converter",
            "Rectifier"
          ],
          correctAnswer: 0,
          explanation: "An inverter changes the direct current (DC) produced by solar panels into alternating current (AC) used by most home appliances."
        },
        {
          id: 3,
          question: "Which direction should rooftop solar panels face in the Northern Hemisphere for best performance?",
          options: [
            "South",
            "North",
            "East",
            "West"
          ],
          correctAnswer: 0,
          explanation: "In the Northern Hemisphere, south-facing roofs receive the most direct sunlight throughout the day, making them ideal for solar panels."
        },
        {
          id: 4,
          question: "What are the two main types of solar systems mentioned in the module?",
          options: [
            "Photovoltaic and Thermal",
            "Residential and Commercial",
            "Large and Small",
            "Grid-tied and Off-grid"
          ],
          correctAnswer: 0,
          explanation: "Solar photovoltaic (PV) systems produce electricity, while solar thermal systems produce heat for water or air."
        },
        {
          id: 5,
          question: "How long do most solar panel warranties typically last?",
          options: [
            "25 years",
            "5 years",
            "10 years",
            "15 years"
          ],
          correctAnswer: 0,
          explanation: "Most solar panels come with 25-year warranties that guarantee they'll still produce 80-90% of their original output after that time."
        },
        {
          id: 6,
          question: "What is community solar?",
          options: [
            "Shared solar installations serving multiple subscribers",
            "Solar panels owned by local governments only",
            "Free solar panels for community buildings",
            "Solar energy education programs"
          ],
          correctAnswer: 0,
          explanation: "Community solar allows multiple people to benefit from a single solar installation, ideal for those without suitable rooftops."
        },
        {
          id: 7,
          question: "What happens to solar power systems at night?",
          options: [
            "They use grid power or battery storage",
            "They stop working completely",
            "They switch to wind power",
            "They generate power from moonlight"
          ],
          correctAnswer: 0,
          explanation: "At night, grid-connected homes use electricity from the utility grid, while systems with batteries can use stored solar energy."
        },
        {
          id: 8,
          question: "What is the typical payback period for residential solar systems mentioned?",
          options: [
            "5-10 years",
            "1-2 years",
            "15-20 years",
            "Over 30 years"
          ],
          correctAnswer: 0,
          explanation: "Most solar systems pay for themselves through electricity savings in 5-10 years, after which the electricity is essentially free."
        },
        {
          id: 9,
          question: "Which component of a solar system monitors energy production?",
          options: [
            "Monitoring system",
            "Inverter",
            "Solar panels",
            "Mounting system"
          ],
          correctAnswer: 0,
          explanation: "Monitoring systems track energy production, alert owners to issues, and help optimize energy usage patterns."
        },
        {
          id: 10,
          question: "What is a simple solar application anyone can try according to the module?",
          options: [
            "Solar-powered outdoor lights",
            "Whole-house solar system",
            "Solar farm investment",
            "Solar car conversion"
          ],
          correctAnswer: 0,
          explanation: "Solar-powered outdoor lights are an easy, affordable way to start using solar energy without major installation."
        },
        {
          id: 11,
          question: "What particles from sunlight knock electrons loose in solar panels?",
          options: [
            "Photons",
            "Protons",
            "Neutrons",
            "Electrons"
          ],
          correctAnswer: 0,
          explanation: "Photons (light particles) transfer their energy to electrons in the solar panel material, causing them to move and create electricity."
        },
        {
          id: 12,
          question: "What type of current do solar panels produce initially?",
          options: [
            "Direct current (DC)",
            "Alternating current (AC)",
            "Both DC and AC",
            "Neither - it's raw energy"
          ],
          correctAnswer: 0,
          explanation: "Solar panels produce direct current (DC) electricity, which must be converted to AC for most home and grid applications."
        },
        {
          id: 13,
          question: "What is building-integrated photovoltaics?",
          options: [
            "Solar technology built into construction materials",
            "Panels added after building completion",
            "Temporary solar installations",
            "Solar systems for new buildings only"
          ],
          correctAnswer: 0,
          explanation: "Building-integrated photovoltaics incorporate solar technology directly into building materials like windows, shingles, or facades."
        },
        {
          id: 14,
          question: "What is the first step recommended when considering solar for your home?",
          options: [
            "Assess your energy use from past bills",
            "Install solar panels immediately",
            "Contact a solar salesperson",
            "Check your roof's color"
          ],
          correctAnswer: 0,
          explanation: "Understanding your current energy consumption helps determine what size solar system you might need."
        },
        {
          id: 15,
          question: "What is agrivoltaics?",
          options: [
            "Combining agriculture with solar farming",
            "Growing solar panels organically",
            "Using solar power for farm equipment only",
            "Solar systems that water plants automatically"
          ],
          correctAnswer: 0,
          explanation: "Agrivoltaics combines solar energy production with agricultural activities on the same land, benefiting both uses."
        },
        {
          id: 16,
          question: "What happens to excess solar power in grid-connected systems?",
          options: [
            "It can be sold back to the utility",
            "It is stored in the panels",
            "It is wasted as heat",
            "It powers the neighbor's home directly"
          ],
          correctAnswer: 0,
          explanation: "Net metering programs allow homeowners to send excess solar power to the grid in exchange for credits on their utility bills."
        },
        {
          id: 17,
          question: "What is the main advantage of solar thermal systems mentioned?",
          options: [
            "Simple technology with few moving parts",
            "They work better than PV in all conditions",
            "They require no maintenance at all",
            "They are always cheaper than PV systems"
          ],
          correctAnswer: 0,
          explanation: "Solar thermal systems for water heating use simple technology that's reliable and has been proven over decades."
        },
        {
          id: 18,
          question: "What type of solar installation goes on reservoirs and lakes?",
          options: [
            "Floating solar farms",
            "Underwater solar panels",
            "Fishing solar systems",
            "Marine solar stations"
          ],
          correctAnswer: 0,
          explanation: "Floating solar farms install panels on bodies of water, saving land space and benefiting from cooling effects."
        },
        {
          id: 19,
          question: "What is the typical lifespan of solar panels mentioned?",
          options: [
            "25-30 years or more",
            "5-10 years",
            "10-15 years",
            "15-20 years"
          ],
          correctAnswer: 0,
          explanation: "Quality solar panels are designed to last 25-30 years or longer, often continuing to produce power beyond their warranty period."
        },
        {
          id: 20,
          question: "Why is solar energy called 'democratic' in the module?",
          options: [
            "It's accessible to homeowners, renters, and businesses alike",
            "It requires voting to install",
            "Only democratic countries use it",
            "It was invented in a democracy"
          ],
          correctAnswer: 0,
          explanation: "Solar is considered democratic because it can be deployed at various scales by different types of users, from individual homeowners to large utilities."
        }
      ]
    },

    // ==================== MODULE 3: WIND ENERGY FUNDAMENTALS ====================
    {
      id: 3,
      title: "Wind Power Essentials",
      completed: false,
      content: `
# Module 3: Capturing the Wind's Energy

Wind energy harnesses one of nature's most powerful forces. This module explains how wind turbines work and why they're becoming such an important part of our energy mix.

## **How Wind Turbines Work**

The basic principle is surprisingly simple:

**The Wind-to-Electricity Process**
1. **Wind blows** - Moving air contains kinetic energy
2. **Blades turn** - Wind pushes against turbine blades
3. **Shaft spins** - Blades connect to a central shaft
4. **Generator produces electricity** - Spinning shaft powers a generator
5. **Electricity is sent to the grid** - Transformers adjust voltage for transmission

Think of it like a giant fan working in reverse:
- A fan uses electricity to make wind
- A wind turbine uses wind to make electricity
- Same basic components, just working opposite directions

## **Main Parts of a Wind Turbine**

**Tower** - The support structure
- Made of steel or concrete
- Height determines wind access (higher = windier)
- Contains ladders or elevators for maintenance
- Anchored deeply into the ground

**Blades** - Capture the wind's energy
- Usually three blades per turbine
- Made of lightweight composite materials
- Designed like airplane wings for efficiency
- Can be 50-80 meters long on large turbines

**Nacelle** - The "brain" of the turbine
- Houses the generator and gearbox
- Contains control systems and computers
- Turns to face the wind (yaw system)
- Located behind the blades

**Generator** - Produces the electricity
- Converts mechanical energy to electrical
- Can be direct-drive or gear-driven
- Typically produces 600V to 35kV electricity
- Connected to the electrical grid

## **Onshore vs. Offshore Wind**

**Onshore Wind Farms**
- Built on land, often in rural areas
- Lower installation and maintenance costs
- Easier grid connection
- Can be located near energy demand centers
- May face more local opposition

**Offshore Wind Farms**
- Built in bodies of water (oceans, lakes)
- Access to stronger, more consistent winds
- Less visual impact from shore
- Higher installation and maintenance costs
- Growing rapidly worldwide

## **Wind Energy Economics**

**Cost Trends**
- Wind energy costs have dropped dramatically
- Now competitive with fossil fuels in many areas
- Offshore wind becoming more affordable
- Continued technology improvements expected

**Land Use Considerations**
- Turbines use only small footprint for foundations
- Land between turbines can still be used for farming
- Lease payments provide income for landowners
- Can co-exist with other land uses

**Maintenance Requirements**
- Regular inspections and servicing
- Oil changes for gearboxes
- Blade cleaning and repair
- Major components last 20-25 years

## **Environmental Benefits**

**Carbon Reduction**
- No greenhouse gas emissions during operation
- Displaces fossil fuel electricity generation
- Lifecycle emissions very low compared to alternatives

**Land and Wildlife**
- Minimal land disturbance compared to mining
- Proper siting avoids important bird migration routes
- New designs reduce bird and bat impacts
- Can be removed leaving minimal trace

**Water Conservation**
- No water needed for electricity generation
- Unlike thermal power plants that need cooling water
- Preserves water resources for other uses

## **Common Concerns Addressed**

**Noise Levels**
- Modern turbines are much quieter
- Sound levels similar to rural nighttime background
- Setback distances minimize community impact
- Technology continues to improve

**Visual Impact**
- Beauty is subjective - some find turbines elegant
- Offshore locations reduce visibility
- Community engagement improves acceptance
- Some areas embrace turbines as symbols of progress

**Intermittency**
- Wind patterns are predictable over time
- Geographic diversity smooths out supply
- Combined with other renewables for reliability
- Energy storage addresses variability

**Safety**
- Multiple safety systems prevent issues
- Lightning protection systems
- Ice detection and de-icing systems
- Extreme weather shutdown protocols

## **Small-Scale Wind Applications**

**Residential Wind Turbines**
- Smaller versions for individual properties
- Can supplement solar systems
- Best in rural areas with consistent wind
- May require zoning approval

**Community Wind Projects**
- Locally owned and developed
- Keeps economic benefits in community
- Often more readily accepted
- Can power schools, businesses, or neighborhoods

**Remote Power Applications**
- For cabins, telecom towers, monitoring stations
- Often combined with solar for hybrid systems
- Reduces need for diesel generators
- Provides reliable power in isolated locations

## **The Future of Wind Energy**

**Technology Advancements**
- Taller towers accessing stronger winds
- Longer blades capturing more energy
- Floating offshore wind platforms
- Direct-drive generators reducing maintenance

**Grid Integration**
- Better forecasting of wind patterns
- Smart grid technologies managing variability
- Hybrid systems with solar and storage
- Hydrogen production using excess wind power

**Global Growth Trends**
- Rapid expansion in Asia, Europe, and Americas
- Offshore wind becoming major energy source
- Developing countries leapfrogging to wind
- Continued cost reductions expected

## **Getting Involved with Wind Energy**

**Career Opportunities**
- Turbine technicians (fast-growing field)
- Project development and management
- Manufacturing and supply chain
- Research and engineering

**Community Participation**
- Attend public meetings about proposed projects
- Consider investing in community wind
- Support wind-friendly policies
- Educate others about wind benefits

**Personal Considerations**
- Assess local wind resources if considering small turbine
- Research zoning and permitting requirements
- Get multiple quotes from reputable installers
- Consider combining with solar for more consistent power

Wind energy represents a mature, reliable technology that's helping countries around the world transition to cleaner energy systems.

**Next Module**: We'll explore Hydropower - the original renewable energy source that still provides most of the world's renewable electricity.
`,
      quiz: [
        {
          id: 1,
          question: "What is the basic principle of how wind turbines generate electricity?",
          options: [
            "Wind turns blades which spin a generator",
            "Wind creates pressure that generates static electricity",
            "Wind cools special materials that produce power",
            "Wind causes vibrations that create electrical current"
          ],
          correctAnswer: 0,
          explanation: "Wind pushes against turbine blades, causing them to rotate. This rotation spins a shaft connected to a generator, producing electricity."
        },
        {
          id: 2,
          question: "What part of the wind turbine contains the generator and control systems?",
          options: [
            "Nacelle",
            "Tower",
            "Blades",
            "Foundation"
          ],
          correctAnswer: 0,
          explanation: "The nacelle is the housing at the top of the tower that contains the generator, gearbox, and control systems."
        },
        {
          id: 3,
          question: "What is the main advantage of offshore wind farms over onshore ones?",
          options: [
            "Access to stronger, more consistent winds",
            "They are always cheaper to build",
            "They require no maintenance",
            "They work during all weather conditions"
          ],
          correctAnswer: 0,
          explanation: "Offshore locations typically have stronger and more consistent winds than onshore sites, leading to higher energy production."
        },
        {
          id: 4,
          question: "How many blades do most modern wind turbines have?",
          options: [
            "Three",
            "One",
            "Two",
            "Four"
          ],
          correctAnswer: 0,
          explanation: "Most modern utility-scale wind turbines have three blades, which provides a good balance of efficiency, cost, and stability."
        },
        {
          id: 5,
          question: "What environmental benefit do wind turbines have regarding water use?",
          options: [
            "They require no water for electricity generation",
            "They clean water as they operate",
            "They produce drinking water as a byproduct",
            "They use less water than solar panels"
          ],
          correctAnswer: 0,
          explanation: "Unlike fossil fuel or nuclear power plants that need water for cooling, wind turbines generate electricity without using water."
        },
        {
          id: 6,
          question: "What is the typical lifespan of major wind turbine components?",
          options: [
            "20-25 years",
            "5-10 years",
            "10-15 years",
            "30-35 years"
          ],
          correctAnswer: 0,
          explanation: "Major components of wind turbines are designed to last 20-25 years, after which they may be refurbished or replaced."
        },
        {
          id: 7,
          question: "What is a community wind project?",
          options: [
            "Locally owned and developed wind energy",
            "Wind turbines that only power community buildings",
            "Government-owned wind farms",
            "Wind energy education programs"
          ],
          correctAnswer: 0,
          explanation: "Community wind projects are developed and owned locally, keeping economic benefits within the community."
        },
        {
          id: 8,
          question: "What is the main material used for wind turbine blades?",
          options: [
            "Lightweight composite materials",
            "Solid steel",
            "Wood",
            "Aluminum"
          ],
          correctAnswer: 0,
          explanation: "Modern turbine blades use lightweight composite materials (like fiberglass-reinforced plastic) for strength and flexibility."
        },
        {
          id: 9,
          question: "What system allows wind turbines to turn and face the wind?",
          options: [
            "Yaw system",
            "Pitch system",
            "Rotate system",
            "Steer system"
          ],
          correctAnswer: 0,
          explanation: "The yaw system rotates the nacelle and blades to face into the wind for optimal energy capture."
        },
        {
          id: 10,
          question: "What is a key advantage of onshore wind farms mentioned in the module?",
          options: [
            "Lower installation and maintenance costs",
            "They always produce more power",
            "They are invisible to communities",
            "They work during hurricanes"
          ],
          correctAnswer: 0,
          explanation: "Onshore wind farms generally have lower costs for installation, connection to the grid, and ongoing maintenance."
        },
        {
          id: 11,
          question: "What type of energy does wind contain that turbines capture?",
          options: [
            "Kinetic energy",
            "Thermal energy",
            "Chemical energy",
            "Nuclear energy"
          ],
          correctAnswer: 0,
          explanation: "Moving air (wind) contains kinetic energy, which wind turbines convert into mechanical then electrical energy."
        },
        {
          id: 12,
          question: "What is one way wind farms can co-exist with other land uses?",
          options: [
            "Farming between turbines",
            "Building houses under turbines",
            "Creating parks on turbine foundations",
            "Installing solar panels on turbines"
          ],
          correctAnswer: 0,
          explanation: "The land between wind turbines can continue to be used for agriculture, grazing, or other purposes."
        },
        {
          id: 13,
          question: "What is the fastest-growing career field in wind energy mentioned?",
          options: [
            "Turbine technicians",
            "Wind farm architects",
            "Blade designers",
            "Wind economists"
          ],
          correctAnswer: 0,
          explanation: "Wind turbine technician is one of the fastest-growing jobs as the industry expands and needs skilled maintenance personnel."
        },
        {
          id: 14,
          question: "What addresses the intermittency of wind power?",
          options: [
            "Geographic diversity and energy storage",
            "Building taller turbines only",
            "Using only offshore locations",
            "Operating only during daytime"
          ],
          correctAnswer: 0,
          explanation: "Spreading wind farms across different regions and combining with energy storage helps address wind's natural variability."
        },
        {
          id: 15,
          question: "What is floating offshore wind?",
          options: [
            "Wind turbines on floating platforms in deep water",
            "Turbines that float on the water surface",
            "Underwater wind turbines",
            "Balloon-mounted wind turbines"
          ],
          correctAnswer: 0,
          explanation: "Floating wind platforms allow turbines to be installed in deep waters where fixed foundations aren't feasible."
        },
        {
          id: 16,
          question: "What is a common use for small wind turbines mentioned?",
          options: [
            "Remote power for cabins and telecom towers",
            "Powering entire cities",
            "Home heating systems",
            "Water pumping only"
          ],
          correctAnswer: 0,
          explanation: "Small wind turbines are often used for remote power applications where grid connection is impractical or expensive."
        },
        {
          id: 17,
          question: "What environmental concern about wind turbines is mentioned?",
          options: [
            "Bird and bat impacts",
            "Water pollution",
            "Soil contamination",
            "Noise pollution only"
          ],
          correctAnswer: 0,
          explanation: "Proper siting and new turbine designs help minimize impacts on birds and bats, which has been a concern with some installations."
        },
        {
          id: 18,
          question: "What is one future trend in wind energy technology?",
          options: [
            "Taller towers accessing stronger winds",
            "Smaller blades for urban areas",
            "Wind turbines without blades",
            "Turbines that work without wind"
          ],
          correctAnswer: 0,
          explanation: "Taller towers allow access to stronger, more consistent winds at higher altitudes, increasing energy production."
        },
        {
          id: 19,
          question: "How do modern turbine designs address noise concerns?",
          options: [
            "Quieter blade designs and proper setbacks",
            "Operating only during daytime",
            "Using sound-absorbing materials on blades",
            "Slower rotation speeds only"
          ],
          correctAnswer: 0,
          explanation: "Improved blade designs reduce noise, and placing turbines appropriate distances from homes minimizes community impact."
        },
        {
          id: 20,
          question: "What is a benefit of wind energy for landowners mentioned?",
          options: [
            "Lease payments for turbine hosting",
            "Free electricity for life",
            "Tax exemptions on all property",
            "Government grants for nearby homes"
          ],
          correctAnswer: 0,
          explanation: "Landowners typically receive lease payments for hosting wind turbines, providing additional income, often for decades."
        }
      ]
    },

    // ==================== MODULE 4: HYDROPOWER AND OTHER RENEWABLES ====================
    {
      id: 4,
      title: "Water Power and More",
      completed: false,
      content: `
# Module 4: Hydropower and Additional Renewable Sources

This module explores hydropower - the world's largest renewable electricity source - along with geothermal and biomass energy.

## **Hydropower: Harnessing Water's Energy**

**Basic Principles**
- Flowing water contains kinetic energy
- Dams or river currents capture this energy
- Water turns turbines connected to generators
- Electricity is produced continuously

**Types of Hydropower Systems**

**1. Large-Scale Hydroelectric Dams**
- Impound water in reservoirs
- Provide baseload power (24/7 operation)
- Often include flood control and irrigation
- Can have significant environmental impacts

**2. Run-of-River Systems**
- Use natural river flow without large dams
- Minimal reservoir creation
- Less environmental disruption
- Output varies with river flow

**3. Pumped Storage**
- "Water batteries" for energy storage
- Pump water uphill during low demand
- Release water downhill during high demand
- Crucial for grid stability

**4. Small-Scale and Micro Hydro**
- For individual communities or properties
- Low environmental impact
- Simple technology, easy maintenance
- Can power remote areas

## **How Hydroelectric Plants Work**

**The Energy Conversion Process**
1. Water collects in reservoir behind dam
2. Gates open to release water
3. Water flows through penstocks (large pipes)
4. Water strikes turbine blades, causing rotation
5. Turbine spins generator producing electricity
6. Electricity goes to transformer then grid
7. Water continues downstream

**Key Components**
- Dam structure holding back water
- Intake gates controlling water flow
- Penstocks directing water to turbines
- Turbines converting water energy to rotation
- Generators producing electricity
- Transformers adjusting voltage

## **Global Hydropower Picture**

**Current Status**
- Provides about 16% of world's electricity
- Largest renewable electricity source
- Over 150 countries use hydropower
- China, Brazil, Canada, US are largest producers

**Benefits**
- Very low operating costs once built
- Long facility lifespan (50-100 years)
- Provides grid stability and storage
- Multi-purpose (power, irrigation, flood control)

**Challenges**
- High initial construction costs
- Environmental impacts on rivers
- Displacement of communities
- Methane emissions from reservoirs

## **Geothermal Energy: Earth's Natural Heat**

**What is Geothermal Energy?**
- Heat from Earth's interior
- Available 24/7 regardless of weather
- Used for electricity and direct heating
- Most accessible in volcanic regions

**Types of Geothermal Systems**

**1. Electricity Generation**
- Drill wells into hot underground reservoirs
- Steam or hot water drives turbines
- Produces consistent baseload power
- Small land footprint

**2. Direct Use Applications**
- Hot springs for bathing and tourism
- District heating for communities
- Greenhouse heating for agriculture
- Industrial process heat

**3. Geothermal Heat Pumps**
- Use constant underground temperatures
- Heat buildings in winter, cool in summer
- Work anywhere, not just volcanic areas
- Highly efficient for climate control

## **Biomass Energy: Organic Power**

**What is Biomass?**
- Organic material from plants and animals
- Can be burned directly or converted to fuels
- Considered renewable if sustainably managed
- Helps manage waste streams

**Biomass Conversion Methods**

**1. Direct Combustion**
- Burning wood, agricultural waste
- Produces heat for buildings or industry
- Can generate electricity through steam

**2. Biofuels**
- Ethanol from corn or sugarcane
- Biodiesel from vegetable oils or algae
- Used in transportation sector
- Can blend with conventional fuels

**3. Biogas**
- Anaerobic digestion of organic waste
- Produces methane for heating or electricity
- Manure, food waste, sewage as feedstocks
- Reduces landfill methane emissions

**Sustainability Considerations**
- Must balance energy production with food security
- Lifecycle emissions vary by feedstock
- Sustainable forestry and agriculture practices
- Waste-to-energy can be particularly beneficial

## **Comparing Renewable Sources**

**Reliability Factors**
- Hydropower: Very reliable, can store energy
- Geothermal: Extremely reliable, 24/7 operation
- Biomass: Reliable, can be stored and used on demand
- Solar: Intermittent, depends on daylight
- Wind: Variable, depends on weather patterns

**Land Use Considerations**
- Hydropower: Large land areas for reservoirs
- Geothermal: Small surface footprint
- Biomass: Requires land for feedstock production
- Solar: Moderate land requirements
- Wind: Small footprint, but spacing between turbines

**Environmental Impacts**
- All have lower emissions than fossil fuels
- Each has unique local impacts to manage
- Proper siting and design minimize impacts
- Lifecycle assessments guide improvements

## **Integration and Complementarity**

**Hybrid Systems**
- Solar-wind combinations balance intermittency
- Hydropower storage supports variable renewables
- Geothermal provides stable baseload power
- Biomass can provide dispatchable backup

**Grid Support Services**
- Hydropower provides quick response to demand
- Geothermal offers voltage support
- Biomass can ramp up/down as needed
- Together they create resilient grids

## **Future Developments**

**Hydropower Innovations**
- Fish-friendly turbine designs
- Improved environmental flow management
- Retrofit existing dams for power generation
- Low-head hydropower for small streams

**Geothermal Advances**
- Enhanced geothermal systems (deeper drilling)
- Closed-loop systems minimizing water use
- Geothermal for hydrogen production
- Combined heat and power applications

**Biomass Improvements**
- Advanced biofuels from non-food sources
- Algae-based biofuel production
- Carbon capture with biomass energy
- Integrated biorefineries for multiple products

## **Getting Involved**

**Career Paths**
- Hydropower plant operators and engineers
- Geothermal drilling and system design
- Biomass supply chain and processing
- Environmental monitoring and mitigation

**Community Opportunities**
- Support sustainable hydropower development
- Consider geothermal heating for buildings
- Participate in community biomass projects
- Advocate for balanced renewable portfolios

**Personal Applications**
- Consider micro-hydro if you have flowing water
- Geothermal heat pumps for home heating/cooling
- Wood pellet stoves for space heating
- Support waste-to-energy programs

These "other" renewables provide crucial diversity in our clean energy mix, each bringing unique strengths to the table.

**Next Module**: We'll explore Energy Storage - the key to making variable renewables like solar and wind work reliably around the clock.
`,
      quiz: [
        {
          id: 1,
          question: "What percentage of the world's electricity comes from hydropower?",
          options: [
            "About 16%",
            "About 5%",
            "About 30%",
            "About 50%"
          ],
          correctAnswer: 0,
          explanation: "Hydropower provides approximately 16% of global electricity, making it the largest renewable electricity source worldwide."
        },
        {
          id: 2,
          question: "What type of hydropower system uses natural river flow without large dams?",
          options: [
            "Run-of-river systems",
            "Pumped storage",
            "Large-scale dams",
            "Micro hydro"
          ],
          correctAnswer: 0,
          explanation: "Run-of-river hydropower systems generate electricity using the natural flow of rivers without creating large reservoirs."
        },
        {
          id: 3,
          question: "What is pumped storage hydropower often called?",
          options: [
            "Water batteries",
            "River generators",
            "Flow batteries",
            "Hydro storage"
          ],
          correctAnswer: 0,
          explanation: "Pumped storage acts like a battery by pumping water uphill when energy is abundant and releasing it to generate power when needed."
        },
        {
          id: 4,
          question: "What is the main advantage of geothermal energy mentioned?",
          options: [
            "Available 24/7 regardless of weather",
            "It's the cheapest energy source",
            "It works everywhere equally well",
            "It requires no technology"
          ],
          correctAnswer: 0,
          explanation: "Geothermal energy provides constant, reliable power day and night, in all weather conditions, unlike solar or wind."
        },
        {
          id: 5,
          question: "What are geothermal heat pumps used for?",
          options: [
            "Heating and cooling buildings",
            "Generating electricity only",
            "Heating water for industrial use",
            "Cooling power plant equipment"
          ],
          correctAnswer: 0,
          explanation: "Geothermal heat pumps use the Earth's constant temperature to efficiently heat buildings in winter and cool them in summer."
        },
        {
          id: 6,
          question: "What is biomass energy derived from?",
          options: [
            "Organic material from plants and animals",
            "Rocks and minerals",
            "Fossilized plants only",
            "Radioactive materials"
          ],
          correctAnswer: 0,
          explanation: "Biomass energy comes from recently living organic matter like plants, agricultural waste, wood, or animal waste."
        },
        {
          id: 7,
          question: "What is biogas typically produced from?",
          options: [
            "Anaerobic digestion of organic waste",
            "Burning wood directly",
            "Processing petroleum",
            "Heating coal without oxygen"
          ],
          correctAnswer: 0,
          explanation: "Biogas is produced when microorganisms break down organic matter in the absence of oxygen, creating methane-rich gas."
        },
        {
          id: 8,
          question: "What is a key environmental challenge with large hydropower dams?",
          options: [
            "Impact on river ecosystems",
            "Air pollution during operation",
            "Radioactive waste production",
            "Noise pollution"
          ],
          correctAnswer: 0,
          explanation: "Large dams can significantly alter river ecosystems, affect fish migration, and change downstream water flows."
        },
        {
          id: 9,
          question: "Where is geothermal energy most accessible?",
          options: [
            "Volcanic regions with hot underground reservoirs",
            "Coastal areas only",
            "Mountain tops",
            "Desert regions"
          ],
          correctAnswer: 0,
          explanation: "Geothermal resources are most easily accessed in volcanic regions or areas with thin Earth's crust where heat is closer to the surface."
        },
        {
          id: 10,
          question: "What is a sustainability consideration for biomass energy?",
          options: [
            "Balancing energy production with food security",
            "Making sure it's always carbon neutral",
            "Using only wood from old-growth forests",
            "Burning biomass indoors for heating"
          ],
          correctAnswer: 0,
          explanation: "Biomass from food crops must be balanced against food needs, and all biomass should come from sustainable sources."
        },
        {
          id: 11,
          question: "What are the large pipes that direct water to turbines in hydropower called?",
          options: [
            "Penstocks",
            "Aqueducts",
            "Conduits",
            "Channels"
          ],
          correctAnswer: 0,
          explanation: "Penstocks are large pipes or tunnels that carry water from the reservoir to the turbines in a hydroelectric plant."
        },
        {
          id: 12,
          question: "What is enhanced geothermal systems?",
          options: [
            "Drilling deeper to access hotter rocks",
            "Using only natural hot springs",
            "Combining geothermal with solar",
            "Geothermal systems for large cities only"
          ],
          correctAnswer: 0,
          explanation: "Enhanced geothermal involves drilling deeper wells and creating underground reservoirs to access heat in areas without natural reservoirs."
        },
        {
          id: 13,
          question: "What is a biofuel example mentioned in the module?",
          options: [
            "Ethanol from corn or sugarcane",
            "Gasoline from algae",
            "Diesel from natural gas",
            "Kerosene from wood"
          ],
          correctAnswer: 0,
          explanation: "Ethanol, typically made from corn or sugarcane, is a common biofuel used blended with gasoline for transportation."
        },
        {
          id: 14,
          question: "What multi-purpose benefit do large hydropower dams provide?",
          options: [
            "Flood control and irrigation",
            "Drinking water purification",
            "Recreational fishing only",
            "Groundwater recharge"
          ],
          correctAnswer: 0,
          explanation: "Many large dams serve multiple purposes including electricity generation, flood control, irrigation, and sometimes recreation."
        },
        {
          id: 15,
          question: "What is a direct use application of geothermal energy?",
          options: [
            "District heating for communities",
            "Powering electric vehicles",
            "Charging mobile phones",
            "Lighting streets"
          ],
          correctAnswer: 0,
          explanation: "Geothermal heat can be used directly for heating buildings, greenhouses, or industrial processes without converting to electricity first."
        },
        {
          id: 16,
          question: "What is a key advantage of micro-hydro systems?",
          options: [
            "Low environmental impact",
            "They work without flowing water",
            "No maintenance required",
            "Free installation"
          ],
          correctAnswer: 0,
          explanation: "Micro-hydro systems have minimal environmental impact and can provide reliable power for remote communities or individual properties."
        },
        {
          id: 17,
          question: "What is a concern about biomass combustion mentioned?",
          options: [
            "Air pollution if not properly controlled",
            "Water contamination from ash",
            "Noise from processing plants",
            "Light pollution from facilities"
          ],
          correctAnswer: 0,
          explanation: "Burning biomass can release air pollutants, though modern systems include emission controls to minimize this impact."
        },
        {
          id: 18,
          question: "How long can hydropower facilities typically operate?",
          options: [
            "50-100 years",
            "10-20 years",
            "20-30 years",
            "30-40 years"
          ],
          correctAnswer: 0,
          explanation: "Well-maintained hydropower facilities can operate for 50-100 years, making them long-term infrastructure investments."
        },
        {
          id: 19,
          question: "What is a growing application for geothermal energy mentioned?",
          options: [
            "Hydrogen production",
            "Space heating only",
            "Water desalination",
            "Internet data centers"
          ],
          correctAnswer: 0,
          explanation: "Geothermal energy can provide the heat and electricity needed for hydrogen production, supporting clean fuel development."
        },
        {
          id: 20,
          question: "What is an innovation in hydropower to protect wildlife?",
          options: [
            "Fish-friendly turbine designs",
            "Underwater noise barriers",
            "Fish ladders only",
            "Turbine shutdown during migration"
          ],
          correctAnswer: 0,
          explanation: "New turbine designs minimize injury to fish passing through, reducing environmental impacts of hydropower generation."
        }
      ]
    },

    // ==================== MODULE 5: ENERGY STORAGE AND GRID INTEGRATION ====================
    {
      id: 5,
      title: "Storing Renewable Energy",
      completed: false,
      content: `
# Module 5: Making Renewable Energy Available Anytime

Energy storage is the key to making solar and wind power work 24/7. This module explains how we store renewable energy and integrate it into our electrical systems.

## **Why Storage Matters**

**The Intermittency Challenge**
- Solar doesn't work at night
- Wind varies with weather patterns
- Demand for electricity changes constantly
- Storage bridges the gap between production and use

**Benefits of Energy Storage**
1. **Reliability** - Power when you need it
2. **Grid Stability** - Smoothing out fluctuations
3. **Economic Efficiency** - Using cheap energy when available
4. **Resilience** - Backup during outages

## **Battery Storage Systems**

**How Batteries Work**
- Store energy chemically
- Charge when energy is abundant/cheap
- Discharge when energy is needed/expensive
- Can be scaled from home to grid-scale

**Common Battery Types**

**1. Lithium-Ion Batteries**
- Similar to those in phones and electric cars
- High efficiency and energy density
- Rapidly decreasing costs
- Used for homes, businesses, and utilities

**2. Lead-Acid Batteries**
- Oldest rechargeable battery technology
- Lower cost but shorter lifespan
- Used for backup power and off-grid systems
- Widely recycled

**3. Flow Batteries**
- Liquid electrolytes in separate tanks
- Easily scalable for large applications
- Very long cycle life
- Used for grid-scale storage

**4. Sodium-Based Batteries**
- Use abundant, inexpensive materials
- Good for stationary storage applications
- Safer than some alternatives
- Emerging technology with promise

## **Other Storage Technologies**

**Pumped Hydro Storage**
- Stores energy as water at elevation
- Pump water uphill during surplus
- Generate power flowing downhill during need
- Largest current energy storage capacity worldwide

**Thermal Energy Storage**
- Store heat or cold for later use
- Molten salts for concentrated solar plants
- Ice storage for building cooling
- Simple, cost-effective for certain applications

**Compressed Air Energy Storage**
- Use surplus electricity to compress air
- Store air in underground caverns
- Expand air through turbines to generate power
- Large-scale, long-duration storage

**Hydrogen Storage**
- Convert electricity to hydrogen via electrolysis
- Store hydrogen for long periods
- Convert back to electricity or use as fuel
- Emerging technology with great potential

## **Home Energy Storage**

**Residential Battery Systems**
- Store excess solar power for nighttime use
- Provide backup during power outages
- Can participate in grid services programs
- Increasingly affordable with incentives

**Sizing Home Systems**
- Based on daily energy consumption
- Solar production patterns
- Backup power needs
- Future electric vehicle or appliance plans

**Smart Energy Management**
- Automatically decides when to charge/discharge
- Can respond to time-of-use electricity rates
- Integrates with smart home systems
- Maximizes self-consumption of solar power

## **Grid-Scale Storage**

**Utility Applications**
- Smoothing renewable energy output
- Providing fast response to grid needs
- Deferring grid infrastructure upgrades
- Improving power quality

**Storage Duration Categories**
- Short-duration (seconds to minutes): Frequency regulation
- Medium-duration (hours): Daily solar shifting
- Long-duration (days to weeks): Seasonal storage

**Locational Benefits**
- Near renewable generation facilities
- At substations serving communities
- Close to demand centers
- Throughout transmission networks

## **The Smart Grid**

**What Makes a Grid "Smart"**
- Two-way communication between utilities and users
- Sensors throughout the system
- Automated control systems
- Integration of diverse energy resources

**Benefits of Smart Grids**
- Better integration of renewables
- Reduced outage times through self-healing
- Consumer choice and control
- Improved efficiency throughout system

**Demand Response**
- Consumers adjust usage based on grid conditions
- Can reduce or shift electricity use
- Often rewarded with lower rates or payments
- Helps balance supply and demand

## **Microgrids and Community Resilience**

**What are Microgrids?**
- Localized grids that can operate independently
- Combine generation, storage, and load management
- Can disconnect from main grid during outages
- Increasingly popular for campuses, communities

**Benefits for Communities**
- Increased reliability and resilience
- Local control over energy resources
- Integration of local renewables
- Economic development opportunities

**Island Mode Operation**
- Ability to function during wider grid outages
- Critical for hospitals, emergency services
- Becoming more common for communities
- Enhanced by renewable generation and storage

## **Electric Vehicles as Storage**

**Vehicle-to-Grid (V2G) Technology**
- Electric cars as mobile batteries
- Can supply power back to grid or home
- Help balance renewable integration
- Potential revenue source for vehicle owners

**Smart Charging**
- Charge when electricity is abundant/cheap
- Avoid charging during peak demand periods
- Can be automated based on grid signals
- Reduces strain on electrical infrastructure

## **Future Storage Trends**

**Cost Reductions**
- Battery costs continue to decline
- New materials improving performance
- Manufacturing scale driving efficiencies
- Expected to make storage ubiquitous

**Technology Innovations**
- Solid-state batteries with higher safety
- Gravity-based storage systems
- Advanced thermal storage materials
- Hydrogen storage breakthroughs

**Policy and Market Developments**
- Storage-friendly regulations emerging
- New business models for storage services
- Integration into building codes
- International standards development

## **Getting Started with Storage**

**For Homeowners**
- Start with energy efficiency measures
- Consider solar plus storage packages
- Research available incentives and programs
- Get multiple quotes from qualified installers

**For Communities**
- Explore community storage options
- Participate in utility storage programs
- Advocate for storage-friendly policies
- Consider microgrid development

**Career Opportunities**
- Battery technology research and development
- Storage system design and installation
- Grid integration and management
- Policy and regulatory analysis

Energy storage transforms renewable energy from an intermittent resource to a reliable one, unlocking its full potential.

**Next Module**: We'll explore Policies, Economics, and Your Role in the renewable energy transition.
`,
      quiz: [
        {
          id: 1,
          question: "What is the main purpose of energy storage for renewable energy?",
          options: [
            "To make power available when renewable sources aren't producing",
            "To make renewable energy cheaper to produce",
            "To increase the efficiency of solar panels",
            "To reduce the size of wind turbines"
          ],
          correctAnswer: 0,
          explanation: "Storage allows us to use renewable energy at times when the sun isn't shining or wind isn't blowing, solving the intermittency challenge."
        },
        {
          id: 2,
          question: "What type of battery is most common in homes, electric vehicles, and grid storage today?",
          options: [
            "Lithium-ion batteries",
            "Lead-acid batteries",
            "Nickel-cadmium batteries",
            "Alkaline batteries"
          ],
          correctAnswer: 0,
          explanation: "Lithium-ion batteries dominate current markets due to their high energy density, efficiency, and rapidly decreasing costs."
        },
        {
          id: 3,
          question: "What is currently the largest form of energy storage worldwide?",
          options: [
            "Pumped hydro storage",
            "Battery storage",
            "Compressed air storage",
            "Thermal storage"
          ],
          correctAnswer: 0,
          explanation: "Pumped hydro storage accounts for about 95% of all utility-scale energy storage globally due to its large capacity and long history."
        },
        {
          id: 4,
          question: "What is vehicle-to-grid (V2G) technology?",
          options: [
            "Electric cars supplying power back to the grid",
            "Cars that run on grid electricity only",
            "Vehicles that generate power while driving",
            "Grid-powered vehicle charging stations"
          ],
          correctAnswer: 0,
          explanation: "V2G allows electric vehicles to discharge their batteries back to the electrical grid when needed, acting as distributed energy resources."
        },
        {
          id: 5,
          question: "What are flow batteries characterized by?",
          options: [
            "Liquid electrolytes in separate tanks",
            "Solid electrolyte materials",
            "No moving parts at all",
            "Using only water as electrolyte"
          ],
          correctAnswer: 0,
          explanation: "Flow batteries store energy in liquid electrolytes contained in external tanks, making them easily scalable for large applications."
        },
        {
          id: 6,
          question: "What is a microgrid?",
          options: [
            "Localized grid that can operate independently",
            "Very small national grid",
            "Grid for microscopic devices",
            "Internet-based energy network"
          ],
          correctAnswer: 0,
          explanation: "Microgrids are localized energy systems that can disconnect from the main grid to operate independently, enhancing community resilience."
        },
        {
          id: 7,
          question: "What is smart charging for electric vehicles?",
          options: [
            "Charging when electricity is abundant and cheap",
            "Charging as fast as possible always",
            "Using smart phones to control charging",
            "Charging only from solar power"
          ],
          correctAnswer: 0,
          explanation: "Smart charging adjusts EV charging based on grid conditions, electricity prices, and renewable energy availability."
        },
        {
          id: 8,
          question: "What is demand response?",
          options: [
            "Consumers adjusting usage based on grid conditions",
            "Utilities demanding more power from generators",
            "Government response to energy demands",
            "Automatic shutdown during high demand"
          ],
          correctAnswer: 0,
          explanation: "Demand response involves consumers reducing or shifting their electricity use during peak periods in response to grid needs or price signals."
        },
        {
          id: 9,
          question: "What storage duration category is used for daily solar shifting?",
          options: [
            "Medium-duration (hours)",
            "Short-duration (seconds to minutes)",
            "Long-duration (days to weeks)",
            "Instantaneous (milliseconds)"
          ],
          correctAnswer: 0,
          explanation: "Daily solar shifting requires storage that can discharge for several hours, making medium-duration storage ideal for this application."
        },
        {
          id: 10,
          question: "What is thermal energy storage often used for?",
          options: [
            "Storing heat or cold for later use",
            "Generating electricity directly",
            "Powering electric vehicles",
            "Lighting buildings"
          ],
          correctAnswer: 0,
          explanation: "Thermal storage captures heat or cold for use in heating, cooling, or industrial processes, often with high efficiency."
        },
        {
          id: 11,
          question: "What makes a grid 'smart' according to the module?",
          options: [
            "Two-way communication between utilities and users",
            "Using only smart meters",
            "Automatic billing systems",
            "Digital displays in homes"
          ],
          correctAnswer: 0,
          explanation: "Smart grids feature advanced communication and control systems that allow real-time monitoring and management of energy flows."
        },
        {
          id: 12,
          question: "What is compressed air energy storage typically use for storage?",
          options: [
            "Underground caverns",
            "Above-ground tanks",
            "Underwater bags",
            "Mountain reservoirs"
          ],
          correctAnswer: 0,
          explanation: "Compressed air is often stored in underground salt caverns, depleted gas fields, or specially created rock caverns."
        },
        {
          id: 13,
          question: "What benefit do microgrids provide during major outages?",
          options: [
            "Island mode operation to maintain local power",
            "Faster repair of main grid lines",
            "Automatic connection to backup generators",
            "Priority power from utilities"
          ],
          correctAnswer: 0,
          explanation: "Microgrids can disconnect from the main grid and continue operating independently, providing critical power during wider outages."
        },
        {
          id: 14,
          question: "What is a key advantage of sodium-based batteries mentioned?",
          options: [
            "Use abundant, inexpensive materials",
            "Highest energy density available",
            "No maintenance required",
            "Unlimited cycle life"
          ],
          correctAnswer: 0,
          explanation: "Sodium is much more abundant and less expensive than lithium, making sodium-based batteries potentially more sustainable and affordable."
        },
        {
          id: 15,
          question: "What is the first step recommended for homeowners considering storage?",
          options: [
            "Start with energy efficiency measures",
            "Buy the largest battery available",
            "Disconnect from the grid immediately",
            "Install solar panels without storage"
          ],
          correctAnswer: 0,
          explanation: "Reducing energy consumption through efficiency is the most cost-effective first step before investing in generation or storage systems."
        },
        {
          id: 16,
          question: "What does 'island mode' refer to in microgrids?",
          options: [
            "Operating independently from the main grid",
            "Microgrids on actual islands only",
            "Using only island-based energy resources",
            "Grids that are isolated by water"
          ],
          correctAnswer: 0,
          explanation: "Island mode describes when a microgrid disconnects from the main utility grid and operates independently using its own resources."
        },
        {
          id: 17,
          question: "What storage technology uses molten salts?",
          options: [
            "Thermal energy storage for solar plants",
            "Battery storage for homes",
            "Hydrogen production systems",
            "Compressed air storage"
          ],
          correctAnswer: 0,
          explanation: "Concentrated solar power plants often use molten salts to store heat for electricity generation after sunset."
        },
        {
          id: 18,
          question: "What grid service do short-duration storage systems typically provide?",
          options: [
            "Frequency regulation",
            "Seasonal storage",
            "Backup for days",
            "Voltage transformation"
          ],
          correctAnswer: 0,
          explanation: "Storage systems that can respond in seconds to minutes are ideal for frequency regulation, helping maintain grid stability."
        },
        {
          id: 19,
          question: "What emerging battery technology offers higher safety?",
          options: [
            "Solid-state batteries",
            "Liquid air batteries",
            "Organic flow batteries",
            "Biodegradable batteries"
          ],
          correctAnswer: 0,
          explanation: "Solid-state batteries replace liquid electrolytes with solid materials, potentially offering higher energy density and improved safety."
        },
        {
          id: 20,
          question: "What is a benefit of residential battery systems besides backup power?",
          options: [
            "Participating in grid services programs",
            "Eliminating all electricity bills",
            "Powering the entire neighborhood",
            "Charging without any electricity"
          ],
          correctAnswer: 0,
          explanation: "Home batteries can provide services to the grid, such as frequency response or peak shaving, potentially generating revenue for owners."
        }
      ]
    },

    // ==================== MODULE 6: POLICIES, ECONOMICS, AND YOUR ROLE ====================
    {
      id: 6,
      title: "Renewable Energy in Society",
      completed: false,
      content: `
# Module 6: Renewable Energy in Our World

This final module explores how policies, economics, and individual actions shape the renewable energy transition, and how you can participate.

## **Global Energy Transition**

**Current Status**
- Renewable energy growing faster than any other energy source
- Solar and wind now cheapest new electricity in most markets
- Over 80% of new power capacity added is renewable
- Continued rapid growth expected worldwide

**Drivers of Change**
1. **Climate Concerns** - Addressing global warming
2. **Economic Advantages** - Lower costs than alternatives
3. **Energy Security** - Reducing import dependence
4. **Public Demand** - Growing support for clean energy
5. **Technological Progress** - Continuous improvements

**Regional Variations**
- Different countries emphasize different renewables
- Policies vary based on local resources and needs
- Developing countries often leapfrog to renewables
- Global cooperation accelerating transition

## **Government Policies and Support**

**Common Policy Tools**

**Financial Incentives**
- Tax credits for renewable installations
- Feed-in tariffs guaranteeing prices for renewable power
- Grants for research and development
- Low-interest loans for renewable projects

**Regulatory Measures**
- Renewable portfolio standards (required percentages)
- Carbon pricing or emissions trading systems
- Streamlined permitting processes
- Grid access guarantees for renewable generators

**Research and Development**
- Government funding for new technologies
- Public-private partnerships
- Demonstration projects
- International collaboration

## **Economic Considerations**

**Cost Trends**
- Solar and wind costs have fallen dramatically
- Continued cost reductions expected
- Storage costs declining rapidly
- Fossil fuels facing increasing cost uncertainty

**Job Creation**
- Renewable energy creates more jobs per unit of energy
- Jobs distributed across many regions
- Opportunities in manufacturing, installation, maintenance
- Training and retraining programs growing

**Investment Patterns**
- Trillions flowing into renewable energy globally
- Increasing private sector investment
- Growing interest from mainstream financial institutions
- Green bonds and sustainable investing expanding

## **Community and Individual Action**

**What Communities Can Do**
- Develop community renewable projects
- Implement local clean energy policies
- Support renewable energy in planning decisions
- Create clean energy job training programs

**What Individuals Can Do**

**Energy Conservation** - First and most important step
- Improve home insulation and efficiency
- Choose energy-efficient appliances
- Adopt smart energy use habits
- Consider lifestyle changes that reduce energy needs

**Renewable Energy Adoption**
- Install solar panels or participate in community solar
- Choose renewable energy from your utility if available
- Consider renewable heating/cooling options
- Support businesses using renewable energy

**Transportation Choices**
- Walk, bike, or use public transit when possible
- Consider electric vehicles or hybrids
- Support EV charging infrastructure
- Advocate for clean transportation policies

**Financial Actions**
- Invest in renewable energy companies or funds
- Choose banks that finance renewable projects
- Support green bonds and sustainable investments
- Divest from fossil fuel companies if aligned with values

**Advocacy and Education**
- Vote for clean energy policies and candidates
- Participate in public comment processes
- Educate friends and family about renewable benefits
- Support organizations promoting renewable energy

## **Overcoming Common Barriers**

**Myth: "Renewables are too expensive"**
- Reality: Solar and wind now cheapest new electricity
- Reality: Total costs including health/environment lower
- Reality: Prices continue to fall with technology improvements

**Myth: "They can't provide reliable power"**
- Reality: Properly designed systems are very reliable
- Reality: Diversity of sources improves reliability
- Reality: Storage and smart grids address variability

**Myth: "The transition will hurt the economy"**
- Reality: Creates more jobs than fossil fuels
- Reality: Reduces energy price volatility
- Reality: New industries and economic opportunities

**Myth: "It's too late to make a difference"**
- Reality: Every bit of renewable energy helps
- Reality: Rapid deployment is possible with current technology
- Reality: Multiple pathways to clean energy future

## **Career Opportunities in Renewable Energy**

**Technical Fields**
- Solar panel installation and maintenance
- Wind turbine technician
- Energy storage system design
- Smart grid engineering

**Project Development**
- Site assessment and planning
- Permitting and regulatory compliance
- Project financing and management
- Community engagement

**Policy and Analysis**
- Renewable energy policy development
- Economic analysis and modeling
- Environmental impact assessment
- Market research and forecasting

**Support Services**
- Manufacturing and supply chain
- Sales and marketing
- Education and training
- Legal and financial services

## **The Future Outlook**

**Technology Development**
- Continued efficiency improvements
- New materials and designs
- Better integration and control systems
- Emerging technologies (wave, tidal, advanced geothermal)

**Market Evolution**
- Increasing competition driving innovation
- New business models emerging
- Greater consumer choice and control
- Global markets becoming more integrated

**Policy Development**
- Stronger climate commitments
- More comprehensive energy policies
- International cooperation increasing
- Just transition considerations gaining attention

**Social Change**
- Growing public support for clean energy
- Changing consumer preferences
- Corporate sustainability commitments
- Intergenerational equity considerations

## **Your Renewable Energy Journey**

**Continuing Education**
- Stay informed about new developments
- Consider advanced courses or certifications
- Join professional organizations
- Attend workshops and conferences

**Networking**
- Connect with others in the field
- Join local clean energy groups
- Participate in online communities
- Mentor or be mentored

**Practical Application**
- Apply what you've learned in your context
- Start small and build knowledge
- Share your experiences with others
- Celebrate progress and successes

**Lifelong Learning**
- Renewable energy field constantly evolving
- New opportunities emerging regularly
- Your role may change and grow over time
- Continuous learning keeps you relevant and effective

## **Final Thoughts**

The renewable energy transition represents one of humanity's greatest opportunities:
- To address climate change
- To create sustainable economies
- To improve public health
- To build more resilient communities
- To provide energy access for all

Your understanding of renewable energy fundamentals now positions you to:
- Make informed personal decisions
- Participate in community discussions
- Consider career opportunities
- Contribute to the clean energy future

Remember: Every person who learns about renewable energy, supports its development, or works in the field contributes to building a cleaner, more sustainable world.

**Congratulations on completing the Renewable Energy Certificate course!**
`,
      quiz: [
        {
          id: 1,
          question: "What percentage of new power capacity added globally is renewable?",
          options: [
            "Over 80%",
            "About 50%",
            "Less than 20%",
            "Exactly 100%"
          ],
          correctAnswer: 0,
          explanation: "Renewable energy sources now account for more than 80% of all new electricity generation capacity added worldwide each year."
        },
        {
          id: 2,
          question: "What is the first and most important individual action mentioned for supporting renewable energy?",
          options: [
            "Energy conservation and efficiency",
            "Installing solar panels immediately",
            "Buying an electric vehicle",
            "Investing in renewable stocks"
          ],
          correctAnswer: 0,
          explanation: "Reducing energy consumption through conservation and efficiency is the most cost-effective first step before generating renewable energy."
        },
        {
          id: 3,
          question: "What policy tool guarantees a fixed price for renewable electricity fed into the grid?",
          options: [
            "Feed-in tariffs",
            "Carbon taxes",
            "Renewable portfolio standards",
            "Tax credits"
          ],
          correctAnswer: 0,
          explanation: "Feed-in tariffs provide long-term contracts to renewable energy producers, guaranteeing them a set price for the electricity they generate."
        },
        {
          id: 4,
          question: "What economic trend has made solar and wind energy more competitive?",
          options: [
            "Dramatic cost reductions over past decade",
            "Government taking over all costs",
            "Fossil fuels becoming illegal",
            "Free installation for everyone"
          ],
          correctAnswer: 0,
          explanation: "The costs of solar panels and wind turbines have fallen dramatically, making them the cheapest sources of new electricity in most markets."
        },
        {
          id: 5,
          question: "What is a renewable portfolio standard?",
          options: [
            "Requirement for utilities to source certain percentage from renewables",
            "Standard design for all renewable installations",
            "International standard for renewable technology",
            "Quality standard for renewable equipment"
          ],
          correctAnswer: 0,
          explanation: "Renewable portfolio standards require electricity suppliers to source a minimum percentage of their power from renewable energy sources."
        },
        {
          id: 6,
          question: "What is one benefit of renewable energy mentioned for job creation?",
          options: [
            "Creates more jobs per unit of energy than fossil fuels",
            "All jobs pay more than fossil fuel jobs",
            "Only requires highly educated workers",
            "Jobs are only in manufacturing"
          ],
          correctAnswer: 0,
          explanation: "Renewable energy typically creates more jobs per megawatt-hour of electricity generated compared to fossil fuel energy sources."
        },
        {
          id: 7,
          question: "What is community solar?",
          options: [
            "Shared solar installations serving multiple subscribers",
            "Solar panels only on community buildings",
            "Free solar for low-income communities",
            "Solar energy education programs"
          ],
          correctAnswer: 0,
          explanation: "Community solar allows multiple participants to benefit from a single solar installation, ideal for those without suitable rooftops."
        },
        {
          id: 8,
          question: "What is a growing financial instrument supporting renewable energy?",
          options: [
            "Green bonds",
            "Oil futures",
            "Coal stocks",
            "Gas certificates"
          ],
          correctAnswer: 0,
          explanation: "Green bonds are fixed-income instruments specifically earmarked to raise money for climate and environmental projects, including renewables."
        },
        {
          id: 9,
          question: "What is one way individuals can advocate for renewable energy?",
          options: [
            "Vote for clean energy policies and candidates",
            "Protest against all energy projects",
            "Refuse to pay electricity bills",
            "Only use candles for lighting"
          ],
          correctAnswer: 0,
          explanation: "Participating in democratic processes by voting for candidates and policies that support renewable energy is an effective advocacy method."
        },
        {
          id: 10,
          question: "What is the fastest-growing job field in renewable energy mentioned?",
          options: [
            "Solar panel installation and wind turbine technician",
            "Renewable energy lawyers",
            "Clean energy journalists",
            "Sustainable fashion designers"
          ],
          correctAnswer: 0,
          explanation: "Jobs installing and maintaining solar panels and wind turbines are among the fastest-growing occupations in many countries."
        },
        {
          id: 11,
          question: "What is carbon pricing?",
          options: [
            "Putting a price on carbon emissions to encourage reduction",
            "Setting prices for carbon-based products",
            "Taxing all carbon atoms",
            "Pricing based on carbon content of foods"
          ],
          correctAnswer: 0,
          explanation: "Carbon pricing puts a financial cost on emitting carbon dioxide, encouraging businesses and individuals to reduce emissions."
        },
        {
          id: 12,
          question: "What is a 'just transition' in renewable energy context?",
          options: [
            "Ensuring workers and communities aren't left behind in energy transition",
            "Transition that happens at the right time",
            "Legal transition through court systems",
            "Immediate transition without planning"
          ],
          correctAnswer: 0,
          explanation: "A just transition addresses the needs of workers and communities affected by the shift from fossil fuels to renewable energy."
        },
        {
          id: 13,
          question: "What lifestyle change can significantly reduce energy consumption?",
          options: [
            "Improving home insulation",
            "Living without electricity",
            "Moving to a different country",
            "Using only hand tools"
          ],
          correctAnswer: 0,
          explanation: "Improving home insulation is one of the most effective ways to reduce energy consumption for heating and cooling."
        },
        {
          id: 14,
          question: "What is divestment in the context of renewable energy?",
          options: [
            "Removing investments from fossil fuel companies",
            "Dividing investments equally",
            "Investing only in dividend stocks",
            "Withdrawing all money from banks"
          ],
          correctAnswer: 0,
          explanation: "Divestment involves removing investments from companies involved in fossil fuel extraction and production."
        },
        {
          id: 15,
          question: "What is one emerging renewable technology mentioned?",
          options: [
            "Wave and tidal energy",
            "Coal gasification",
            "Oil shale extraction",
            "Natural gas fracking"
          ],
          correctAnswer: 0,
          explanation: "Wave and tidal energy technologies harness the power of ocean waves and tides, representing emerging renewable options."
        },
        {
          id: 16,
          question: "What is the role of public-private partnerships in renewable energy?",
          options: [
            "Combine government and private sector resources for projects",
            "Private companies taking over all government functions",
            "Governments running private companies",
            "Eliminating all private sector involvement"
          ],
          correctAnswer: 0,
          explanation: "Public-private partnerships leverage both government support and private sector efficiency to advance renewable energy projects."
        },
        {
          id: 17,
          question: "What is one benefit of electric vehicles beyond reduced emissions?",
          options: [
            "Can support the grid through vehicle-to-grid technology",
            "Always cheaper to buy than gasoline cars",
            "Require no electricity to operate",
            "Generate electricity while parked"
          ],
          correctAnswer: 0,
          explanation: "Electric vehicles with vehicle-to-grid capability can supply power back to the electrical grid when needed."
        },
        {
          id: 18,
          question: "What is an example of corporate sustainability commitment?",
          options: [
            "Companies pledging to use 100% renewable energy",
            "Corporations supporting all energy sources equally",
            "Businesses ignoring energy sources entirely",
            "Companies using only their own generated power"
          ],
          correctAnswer: 0,
          explanation: "Many corporations have made commitments to power their operations with 100% renewable energy, driving market demand."
        },
        {
          id: 19,
          question: "What is the recommended approach to continuing education in renewable energy?",
          options: [
            "Stay informed about new developments and consider advanced courses",
            "Wait for new information to come to you",
            "Learn only from social media",
            "Focus only on one technology forever"
          ],
          correctAnswer: 0,
          explanation: "The renewable energy field evolves rapidly, so continuous learning through courses, reading, and networking is essential."
        },
        {
          id: 20,
          question: "What does the module say about the renewable energy transition?",
          options: [
            "It represents one of humanity's greatest opportunities",
            "It is impossible to achieve",
            "It will happen automatically without effort",
            "It only benefits wealthy countries"
          ],
          correctAnswer: 0,
          explanation: "The transition to renewable energy presents significant opportunities for addressing climate change, creating jobs, and building sustainable economies."
        }
      ]
    }
  ],

  // ==================== FINAL EXAM ====================
  finalExam: {
    title: "Renewable Energy Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules. Answer 40 questions to demonstrate your understanding of renewable energy fundamentals.",
    passingScore: 70,
    questions: [
      // Questions from Module 1
      {
        id: 1,
        module: 1,
        question: "What is the defining characteristic of renewable energy sources?",
        options: [
          "They replenish themselves naturally",
          "They are always cheaper than fossil fuels",
          "They require no maintenance",
          "They work only in specific locations"
        ],
        correctAnswer: 0,
        explanation: "Renewable energy sources naturally replenish over time, unlike finite fossil fuels."
      },
      {
        id: 2,
        module: 1,
        question: "Which renewable energy source uses heat from inside the Earth?",
        options: [
          "Geothermal",
          "Solar",
          "Wind",
          "Biomass"
        ],
        correctAnswer: 0,
        explanation: "Geothermal energy harnesses the Earth's internal heat for power generation and heating."
      },
      {
        id: 3,
        module: 1,
        question: "What does 'carbon footprint' measure?",
        options: [
          "Amount of carbon dioxide released by energy use",
          "Size of renewable energy installations",
          "Number of trees needed to offset energy",
          "Cost of reducing carbon emissions"
        ],
        correctAnswer: 0,
        explanation: "Carbon footprint quantifies the total greenhouse gas emissions caused by activities or products."
      },
      {
        id: 4,
        module: 1,
        question: "Which is NOT one of the five main renewable sources discussed?",
        options: [
          "Nuclear",
          "Solar",
          "Wind",
          "Hydropower"
        ],
        correctAnswer: 0,
        explanation: "Nuclear energy is not considered renewable as it uses finite uranium fuel, though it is low-carbon."
      },

      // Questions from Module 2
      {
        id: 5,
        module: 2,
        question: "What material is commonly used in solar panels?",
        options: [
          "Silicon",
          "Copper",
          "Aluminum",
          "Steel"
        ],
        correctAnswer: 0,
        explanation: "Most solar panels use silicon semiconductors to convert sunlight into electricity."
      },
      {
        id: 6,
        module: 2,
        question: "What converts DC electricity from solar panels to AC for home use?",
        options: [
          "Inverter",
          "Transformer",
          "Converter",
          "Rectifier"
        ],
        correctAnswer: 0,
        explanation: "Inverters change direct current from solar panels to alternating current used by most appliances."
      },
      {
        id: 7,
        module: 2,
        question: "What is the typical warranty period for solar panels?",
        options: [
          "25 years",
          "5 years",
          "10 years",
          "15 years"
        ],
        correctAnswer: 0,
        explanation: "Most solar panels come with 25-year performance warranties."
      },
      {
        id: 8,
        module: 2,
        question: "What allows multiple people to share a solar installation?",
        options: [
          "Community solar",
          "Private solar",
          "Utility solar",
          "Government solar"
        ],
        correctAnswer: 0,
        explanation: "Community solar programs allow multiple subscribers to benefit from a shared solar array."
      },

      // Questions from Module 3
      {
        id: 9,
        module: 3,
        question: "What part of a wind turbine contains the generator?",
        options: [
          "Nacelle",
          "Tower",
          "Blades",
          "Foundation"
        ],
        correctAnswer: 0,
        explanation: "The nacelle houses the generator, gearbox, and control systems."
      },
      {
        id: 10,
        module: 3,
        question: "What is the main advantage of offshore wind farms?",
        options: [
          "Stronger, more consistent winds",
          "Lower installation costs",
          "No maintenance needed",
          "Works during all storms"
        ],
        correctAnswer: 0,
        explanation: "Offshore locations typically have stronger and steadier winds than onshore sites."
      },
      {
        id: 11,
        module: 3,
        question: "How many blades do most modern wind turbines have?",
        options: [
          "Three",
          "One",
          "Two",
          "Four"
        ],
        correctAnswer: 0,
        explanation: "Three blades provide optimal balance of efficiency, cost, and stability."
      },
      {
        id: 12,
        module: 3,
        question: "What environmental benefit do wind turbines have regarding water?",
        options: [
          "No water needed for generation",
          "They clean water as they operate",
          "Produce drinking water",
          "Use less water than solar"
        ],
        correctAnswer: 0,
        explanation: "Wind turbines generate electricity without requiring water for cooling or operation."
      },

      // Questions from Module 4
      {
        id: 13,
        module: 4,
        question: "What percentage of global electricity comes from hydropower?",
        options: [
          "About 16%",
          "About 5%",
          "About 30%",
          "About 50%"
        ],
        correctAnswer: 0,
        explanation: "Hydropower provides approximately 16% of the world's electricity."
      },
      {
        id: 14,
        module: 4,
        question: "What type of hydropower has minimal reservoir creation?",
        options: [
          "Run-of-river",
          "Pumped storage",
          "Large dams",
          "Micro hydro"
        ],
        correctAnswer: 0,
        explanation: "Run-of-river systems use natural flow with little to no water storage."
      },
      {
        id: 15,
        module: 4,
        question: "What geothermal application works anywhere?",
        options: [
          "Geothermal heat pumps",
          "Electricity generation",
          "Direct heating from hot springs",
          "Steam power plants"
        ],
        correctAnswer: 0,
        explanation: "Geothermal heat pumps use constant underground temperatures and work in most locations."
      },
      {
        id: 16,
        module: 4,
        question: "What is biomass energy derived from?",
        options: [
          "Organic plant and animal material",
          "Rocks and minerals",
          "Fossilized plants",
          "Radioactive materials"
        ],
        correctAnswer: 0,
        explanation: "Biomass comes from recently living organic matter like plants, wood, or agricultural waste."
      },

      // Questions from Module 5
      {
        id: 17,
        module: 5,
        question: "What is the largest current form of energy storage?",
        options: [
          "Pumped hydro",
          "Lithium-ion batteries",
          "Compressed air",
          "Thermal storage"
        ],
        correctAnswer: 0,
        explanation: "Pumped hydro accounts for about 95% of global energy storage capacity."
      },
      {
        id: 18,
        module: 5,
        question: "What battery type is common in homes and EVs?",
        options: [
          "Lithium-ion",
          "Lead-acid",
          "Flow batteries",
          "Nickel-cadmium"
        ],
        correctAnswer: 0,
        explanation: "Lithium-ion batteries dominate home storage and electric vehicle markets."
      },
      {
        id: 19,
        module: 5,
        question: "What can electric vehicles do with V2G technology?",
        options: [
          "Supply power back to the grid",
          "Generate power while driving",
          "Charge without electricity",
          "Power other vehicles directly"
        ],
        correctAnswer: 0,
        explanation: "Vehicle-to-grid allows EVs to discharge stored energy back to the electrical grid."
      },
      {
        id: 20,
        module: 5,
        question: "What is a microgrid?",
        options: [
          "Local grid that can operate independently",
          "Very small national grid",
          "Grid for small devices",
          "Internet-based energy network"
        ],
        correctAnswer: 0,
        explanation: "Microgrids are localized energy systems that can disconnect from the main grid."
      },

      // Questions from Module 6
      {
        id: 21,
        module: 6,
        question: "What percentage of new power capacity is renewable?",
        options: [
          "Over 80%",
          "About 50%",
          "Less than 20%",
          "Exactly 100%"
        ],
        correctAnswer: 0,
        explanation: "Renewables now make up more than 80% of new electricity capacity added globally."
      },
      {
        id: 22,
        module: 6,
        question: "What is the first recommended individual action?",
        options: [
          "Energy conservation",
          "Installing solar panels",
          "Buying an EV",
          "Investing in renewables"
        ],
        correctAnswer: 0,
        explanation: "Reducing energy use through efficiency is the most cost-effective first step."
      },
      {
        id: 23,
        module: 6,
        question: "What policy guarantees renewable energy prices?",
        options: [
          "Feed-in tariffs",
          "Carbon taxes",
          "Renewable standards",
          "Tax credits"
        ],
        correctAnswer: 0,
        explanation: "Feed-in tariffs provide guaranteed prices for renewable electricity fed into the grid."
      },
      {
        id: 24,
        module: 6,
        question: "What creates more jobs per energy unit?",
        options: [
          "Renewable energy",
          "Fossil fuels",
          "Nuclear power",
          "All are equal"
        ],
        correctAnswer: 0,
        explanation: "Renewable energy typically creates more employment per unit of energy generated."
      },

      // Additional comprehensive questions
      {
        id: 25,
        module: 1,
        question: "Which renewable source provides the most reliable 24/7 power?",
        options: [
          "Geothermal",
          "Solar",
          "Wind",
          "All equally reliable"
        ],
        correctAnswer: 0,
        explanation: "Geothermal provides constant baseload power regardless of weather or time of day."
      },
      {
        id: 26,
        module: 2,
        question: "What direction should solar panels face in Northern Hemisphere?",
        options: [
          "South",
          "North",
          "East",
          "West"
        ],
        correctAnswer: 0,
        explanation: "South-facing panels receive the most direct sunlight in the Northern Hemisphere."
      },
      {
        id: 27,
        module: 3,
        question: "What is the typical lifespan of wind turbines?",
        options: [
          "20-25 years",
          "5-10 years",
          "10-15 years",
          "30-35 years"
        ],
        correctAnswer: 0,
        explanation: "Wind turbines are designed to operate for 20-25 years with proper maintenance."
      },
      {
        id: 28,
        module: 4,
        question: "What is pumped storage hydropower often called?",
        options: [
          "Water batteries",
          "River generators",
          "Flow batteries",
          "Hydro storage"
        ],
        correctAnswer: 0,
        explanation: "Pumped storage acts like a battery by storing energy as elevated water."
      },
      {
        id: 29,
        module: 5,
        question: "What storage duration is for daily solar shifting?",
        options: [
          "Medium-duration (hours)",
          "Short-duration (minutes)",
          "Long-duration (days)",
          "Instantaneous"
        ],
        correctAnswer: 0,
        explanation: "Daily solar shifting requires storage that can discharge for several hours."
      },
      {
        id: 30,
        module: 6,
        question: "What is community solar?",
        options: [
          "Shared installation for multiple subscribers",
          "Solar only on public buildings",
          "Free solar for communities",
          "Solar education programs"
        ],
        correctAnswer: 0,
        explanation: "Community solar allows multiple participants to share benefits of a solar array."
      },
      {
        id: 31,
        module: 1,
        question: "What is another name for renewable energy emphasizing benefits?",
        options: [
          "Green energy",
          "Blue energy",
          "Pure energy",
          "Natural energy"
        ],
        correctAnswer: 0,
        explanation: "'Green energy' emphasizes environmental benefits of renewable sources."
      },
      {
        id: 32,
        module: 2,
        question: "What happens to solar systems at night?",
        options: [
          "Use grid or battery power",
          "Stop working completely",
          "Switch to wind power",
          "Use moonlight"
        ],
        correctAnswer: 0,
        explanation: "Grid-connected systems use utility power at night; systems with batteries use stored energy."
      },
      {
        id: 33,
        module: 3,
        question: "What system turns turbines to face wind?",
        options: [
          "Yaw system",
          "Pitch system",
          "Rotate system",
          "Steer system"
        ],
        correctAnswer: 0,
        explanation: "The yaw system rotates the nacelle to keep blades facing into the wind."
      },
      {
        id: 34,
        module: 4,
        question: "Where is geothermal most accessible?",
        options: [
          "Volcanic regions",
          "Coastal areas",
          "Mountain tops",
          "Deserts"
        ],
        correctAnswer: 0,
        explanation: "Geothermal resources are most accessible where Earth's heat is close to surface."
      },
      {
        id: 35,
        module: 5,
        question: "What makes a grid 'smart'?",
        options: [
          "Two-way communication",
          "Only smart meters",
          "Automatic billing",
          "Digital displays"
        ],
        correctAnswer: 0,
        explanation: "Smart grids feature advanced communication between utilities and users."
      },
      {
        id: 36,
        module: 6,
        question: "What is a renewable portfolio standard?",
        options: [
          "Required percentage from renewables",
          "Standard equipment design",
          "International technology standard",
          "Quality certification"
        ],
        correctAnswer: 0,
        explanation: "RPS requires utilities to source minimum percentage of power from renewables."
      },
      {
        id: 37,
        module: 1,
        question: "What renewable source uses organic waste?",
        options: [
          "Biomass",
          "Solar",
          "Wind",
          "Geothermal"
        ],
        correctAnswer: 0,
        explanation: "Biomass energy can use organic waste materials as fuel."
      },
      {
        id: 38,
        module: 2,
        question: "What is the payback period for residential solar?",
        options: [
          "5-10 years",
          "1-2 years",
          "15-20 years",
          "Over 30 years"
        ],
        correctAnswer: 0,
        explanation: "Most solar systems pay for themselves through savings in 5-10 years."
      },
      {
        id: 39,
        module: 3,
        question: "What benefit do landowners get from hosting turbines?",
        options: [
          "Lease payments",
          "Free electricity",
          "Tax exemptions",
          "Government grants"
        ],
        correctAnswer: 0,
        explanation: "Landowners typically receive lease payments for hosting wind turbines."
      },
      {
        id: 40,
        module: 6,
        question: "What is the module's final view on renewable transition?",
        options: [
          "One of humanity's greatest opportunities",
          "Impossible to achieve",
          "Automatic without effort",
          "Only benefits wealthy countries"
        ],
        correctAnswer: 0,
        explanation: "The renewable energy transition presents significant opportunities for addressing global challenges."
      }
    ]
  }
};

export default renewableEnergyCertificateCourse;
