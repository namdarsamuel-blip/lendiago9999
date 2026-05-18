/* Lendiago shared data — products, industries, resources, navigation */
window.LENDIAGO_DATA = (function(){

const ICON_PATHS = {
  award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
  trending:'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  creditcard:'<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
  landmark:'<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
  home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  banknote:'<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  store:'<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/>',
  truck:'<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  bell:'<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  factory:'<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>',
  calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  briefcase:'<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
};

function svg(name, cls){ return '<svg class="'+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+(ICON_PATHS[name]||'')+'</svg>'; }

const products = [
  {
    icon:'award', title:'Business Term Loan', slug:'business-term-loan',
    description:'Get a lump sum of cash and repay it over a fixed period with predictable payments.',
    features:['Up to $5M in funding','Terms from 1-5 years','Fixed monthly payments','Competitive interest rates','Funds for any business need'],
    image:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    longDescription:'A Term Loan provides a straightforward, powerful way to finance significant investments. You receive a large sum of cash upfront and repay it with predictable, fixed monthly payments over a set period. This structure makes it easy to budget and plan for the long term.',
    longFeatures:[
      ['Plan with Confidence','With fixed interest rates and a consistent payment schedule, you can easily manage your cash flow without worrying about fluctuating payments.'],
      ['Fuel Major Growth','Ideal for large, one-time investments such as buying new property, launching a major marketing campaign, or acquiring another business.'],
      ['Build Your Business Credit','Making on-time payments demonstrates financial responsibility and helps build a strong credit profile for your business, unlocking even better financing opportunities in the future.']
    ],
    summary:[
      ['Funding Amount','$25,000 - $5,000,000'],['Time to Funding','3-10 business days'],['Repayment','Fixed monthly payments'],
      ['Credit Requirement','680+ FICO'],['Interest Rate','11% - 19%'],['Best For','Large planned investments & expansions']
    ]
  },
  {
    icon:'trending', title:'Merchant Cash Advance', slug:'merchant-cash-advance', badge:'Fastest funding in 2-3 hours',
    description:'Get an advance on future revenue. Perfect for quick cash flow needs with flexible repayment.',
    features:['Get funded in 24-48 hours','No collateral required','Revenue-based approvals','Flexible payment schedules','Perfect for quick cash flow needs'],
    image:'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    longDescription:'Working Capital solutions (like Merchant Cash Advances) give you immediate access to a lump sum of cash in exchange for a percentage of your future sales. It\u2019s not a loan, it\u2019s an advance, which means repayment is flexible.',
    longFeatures:[
      ['Same Day Funding','Get the capital you need in as little as 24 hours (often same day) to address immediate business needs or opportunities.'],
      ['No Minimum FICO','Qualification is based on your business performance and daily sales volume, not just your personal credit score.'],
      ['Repayment That Works for You','Because payments are tied to your sales volume, you\u2019re never stuck with a large payment during a slow period, reducing financial stress.'],
      ['High Approval Rates','Our flexible criteria mean more businesses get approved, even those who have been turned down by traditional banks.']
    ],
    summary:[
      ['Funding Amount','$5,000 - $1,000,000'],['Time to Funding','As fast as same day'],['Repayment','Percentage of daily sales'],
      ['Credit Requirement','No minimum FICO'],['Factor Rate','1.3-1.5x factor'],['Best For','Quick cash & high card-sales businesses']
    ]
  },
  {
    icon:'creditcard', title:'Business Line Of Credit', slug:'business-line-of-credit',
    description:'Get flexible access to capital, empowering growth and opening the door to new opportunities.',
    features:['Flexible access to capital','Revolving credit line','Pay interest only on what you use','Continuous financial support','Minimal barriers to qualification'],
    image:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    longDescription:'A Business Line of Credit is a dynamic financing solution that provides businesses with flexible access to working capital when they need it most. Designed as a revolving credit line, it allows companies to draw funds as needed, repay, and reuse, offering continuous financial support without delays.',
    longFeatures:[
      ['Build Relationships','Build trust with major banks, leading to higher limits and future funding opportunities.'],
      ['Only pay for what you use','Access funds as needed, whenever you need them, and pay interest only on the amount you withdraw.'],
      ['Higher Funding Limits','Secure the best financing options tailored to provide you with the maximum funding available.'],
      ['Flexible Revolving Credit','Access funds repeatedly as you repay, with your credit limit resetting for continuous use.']
    ],
    summary:[
      ['Funding Amount','$10,000 - $500,000'],['Time to Funding','1-2 weeks'],['Repayment','Flexible revolving credit'],
      ['Credit Requirement','680+ FICO'],['Interest Rate','8% - 18%'],['Best For','Cash flow & operational expenses']
    ]
  },
  {
    icon:'layers', title:'Credit Stacking', slug:'credit-stacking',
    description:'Strategically combine multiple business credit lines to maximize your available capital.',
    features:['Access to multiple credit lines','0% intro APR periods','Build business credit','Flexible for various expenses','Unsecured business funding'],
    image:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    longDescription:'For entrepreneurs with good personal credit, Business Credit Stacking is one of the most powerful ways to secure flexible startup or growth capital. We help you strategically apply for multiple high-limit business credit cards, often with 0% introductory APRs, giving you a substantial, interest-free line of credit for 12-18 months.',
    longFeatures:[
      ['Maximize Your Funding','Instead of a single line of credit, you get a "stack" of several, providing you with a much larger total funding amount.'],
      ['Interest-Free Capital','By leveraging 0% intro APR offers, you get access to a large pool of capital that you can use interest-free for over a year.'],
      ['Build Strong Business Credit','Using and paying your new business credit cards responsibly establishes a powerful credit profile for your company, separate from your personal credit, unlocking even better funding in the future.']
    ],
    summary:[
      ['Funding Amount','Up to $150,000'],['Time to Funding','2-4 weeks'],['Repayment','Flexible, revolving credit'],
      ['Credit Requirement','720+ FICO ideal'],['Interest Rate','0% for 12-18 months'],['Best For','Startups & strong personal credit']
    ]
  },
  {
    icon:'landmark', title:'SBA Loan', slug:'sba-loan',
    description:'Government-backed loans with long terms and low interest rates for major investments.',
    features:['Lowest available interest rates','Long repayment terms (up to 25 years)','Government-backed guarantee','Large loan amounts available','Ideal for major purchases'],
    image:'https://images.pexels.com/photos/6779344/pexels-photo-6779344.jpeg?auto=compress&cs=tinysrgb&w=1080',
    longDescription:'SBA Loans are the gold standard of business financing, offering some of the lowest interest rates and longest repayment terms available. Backed by the U.S. Small Business Administration, these loans are designed to help small businesses make major investments, such as purchasing real estate, acquiring another company, or securing long-term working capital.',
    longFeatures:[
      ['Unbeatable Rates and Terms','With repayment terms up to 25 years and some of the lowest interest rates on the market, SBA loans make even the largest investments affordable.'],
      ['Versatile Use of Funds','Use the capital for nearly any business purpose, including buying commercial real estate, refinancing existing debt, or securing permanent working capital.'],
      ['Government-Backed Security','The SBA guarantees a portion of the loan, which reduces risk for lenders and helps more businesses get approved for the high-value financing they need to thrive.']
    ],
    summary:[
      ['Funding Amount','$30,000 - $5,500,000'],['Time to Funding','30-90 days'],['Repayment','Long-term monthly payments'],
      ['Credit Requirement','650+ FICO'],['Interest Rate','Prime + 2% (~10.5%)'],['Best For','Real estate, acquisitions & refinance']
    ]
  },
  {
    icon:'home', title:'Real Estate Loan', slug:'real-estate-loan',
    description:'Secure financing for commercial property acquisition, development, or refinancing.',
    features:['Mortgage','HELOC','Hard Money Loan','Business Real Estate Loan','Collateral Loans'],
    image:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    longDescription:'Our Real Estate Finance solutions are designed for business owners and investors looking to acquire, refinance, or leverage commercial property. We offer a comprehensive suite of products including traditional Mortgages, Business HELOCs, Hard Money Loans for quick acquisitions, Business Real Estate Loans, and flexible Collateral Loans.',
    longFeatures:[
      ['Versatile Property Funding','From office buildings and retail spaces to multi-family units and industrial warehouses, we fund a wide range of commercial properties.'],
      ['Unlock Your Equity','Use a Business HELOC or Collateral Loan to leverage your existing real estate assets for working capital, expansion, or new investments.'],
      ['Speed and Flexibility','Our Hard Money and Bridge Loans provide the speed you need to secure properties in competitive markets, with approvals based primarily on asset value.']
    ],
    summary:[
      ['Funding Amount','$100,000 - $50,000,000'],['Time to Funding','2-6 weeks'],['Repayment','Varies by strategy'],
      ['Credit Requirement','550+ FICO'],['Interest Rate','7% - 13%'],['Best For','Real estate investors & developers']
    ]
  },
  {
    icon:'banknote', title:'Personal Term Loans', slug:'personal-term-loans',
    description:'Get a personal loan for any purpose with fixed rates and predictable monthly payments.',
    features:['Quick application process','Fixed interest rates','Predictable monthly payments','No collateral required','Funds for any personal need'],
    image:'https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    longDescription:'A Personal Term Loan provides you with a lump sum of cash that you can use for various personal needs, from debt consolidation to home improvements. With fixed interest rates and set monthly payments, it offers a stable and predictable way to manage your personal finances.',
    longFeatures:[
      ['Simple and Fast','Our streamlined application process means you can get the funds you need quickly, often within a few business days.'],
      ['Fixed and Predictable','Know exactly what your monthly payments will be, making it easy to budget and plan for the future.'],
      ['No Collateral Needed','These are unsecured loans, meaning you don\u2019t have to put up your home or other assets as collateral.']
    ],
    summary:[
      ['Funding Amount','$1,000 - $100,000'],['Time to Funding','1-7 business days'],['Repayment','Fixed monthly payments'],
      ['Credit Requirement','640+ FICO'],['Interest Rate','6% - 36%'],['Best For','Debt consolidation & personal expenses']
    ]
  },
  {
    icon:'wrench', title:'Credit Repair', slug:'credit-repair',
    description:'Improve your credit score to unlock better funding opportunities in the future.',
    features:['Dispute inaccuracies on your report','Personalized credit improvement plan','Unlock better financing rates','Ongoing credit score monitoring','Expert guidance included'],
    image:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    longDescription:'A strong credit score is the key to unlocking the best financing options at the lowest rates. If past financial challenges are holding you back, our Credit Repair services can help. We work with you to identify and dispute inaccuracies on your credit report, provide a personalized plan for improvement, and guide you toward a healthier financial future.',
    longFeatures:[
      ['Challenge Inaccuracies','Our experts will help you identify and formally dispute errors, outdated information, and unverifiable items on your credit reports with all three major bureaus.'],
      ['Unlock Better Funding','Improving your credit score can dramatically increase your chances of approval for better loans, with lower interest rates and more favorable terms.'],
      ['Strategic Guidance for the Future','We don\u2019t just fix the past, we give you the knowledge and tools to maintain a strong credit score for years to come, ensuring your business always has access to the capital it needs.']
    ],
    summary:[
      ['Service Goal','Increase credit score'],['Timeline','Results in 30-90 days'],['Process','Dispute & strategic guidance'],
      ['Outcome','Better loan approvals'],['Best For','Owners with challenged credit history']
    ]
  }
];

const industries = [
  {
    icon:'wrench', title:'Construction', slug:'construction',
    description:'Power your operations with flexible funding for both materials and payroll needs.',
    image:'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1080',
    image2:'https://images.pexels.com/photos/6790105/pexels-photo-6790105.jpeg?auto=compress&cs=tinysrgb&w=1080',
    headline:'Building Your Future with Solid Financial Foundations',
    introduction:'The construction industry is the backbone of our infrastructure, but it comes with unique financial hurdles. From waiting on invoices to investing in heavy machinery, managing cash flow is critical. We provide robust funding solutions designed to keep your projects on schedule and your business growing.',
    points:[
      ['Equipment & Machinery','Finance up to 100% of the cost of new or used machinery, from excavators to specialized tools, with our dedicated Business Term Loan options. This helps you preserve capital while getting the tools you need to get the job done.'],
      ['Working Capital','Access a Business Line of Credit in as little as 7 business days to manage payroll, purchase materials, and bridge cash flow gaps between project payments. Only pay interest on the capital you actually use.'],
      ['Strategic Growth','Take on larger, more profitable contracts or fund a major expansion with the favorable long terms and low rates of an SBA Loan, perfect for long-term strategic growth.']
    ],
    stories:[
      ['Residential Developer Expansion','A local developer needed $250k to secure materials for a new 10-unit project while waiting for draws on an existing project.','We secured a $250,000 Business Line of Credit in 7 business days.','Project started on time, avoiding $15k in delay penalties.'],
      ['Equipment Fleet Upgrade','A paving company needed to replace two aging rollers to keep up with a new municipal contract.','Provided $180,000 in Business Term Loan with a 60-month term.','Increased efficiency by 30% and reduced maintenance costs.']
    ],
    expectations:[['Typical Funding Amount','$50,000 - $2,000,000'],['Time to Funding','As fast as same day'],['Common Use','Equipment, Materials, Payroll']],
    products:['business-term-loan','business-line-of-credit','sba-loan']
  },
  {
    icon:'utensils', title:'Food & Beverage', slug:'food-beverage',
    description:'Keep your kitchen running with capital that\u2019s crafted for restaurants, bars, and cafes.',
    image:'https://images.pexels.com/photos/22890039/pexels-photo-22890039.jpeg?auto=compress&cs=tinysrgb&w=1080',
    image2:'https://images.pexels.com/photos/4279100/pexels-photo-4279100.jpeg?auto=compress&cs=tinysrgb&w=1080',
    headline:'Capital to Keep Your Kitchen Sizzling',
    introduction:'The food and beverage industry operates on thin margins and high turnover. Whether you\u2019re renovating your dining room, launching a new menu, or just need to cover payroll during a slow season, having access to quick capital is essential. We offer funding solutions that are as fast-paced as your business.',
    points:[
      ['Flexible Advances','Get a quick infusion of cash with a Merchant Cash Advance, which is repaid through a percentage of your future sales. It\u2019s flexible funding that adjusts with your daily revenue, perfect for the ups and downs of the restaurant business.'],
      ['Operational Support','Use a Business Line of Credit for larger investments like marketing campaigns, hiring staff, or covering other operational needs to keep your establishment thriving.'],
      ['Kitchen Upgrades','Upgrade your kitchen with new ovens, refrigerators, or point-of-sale systems using our specialized Business Term Loan program, featuring predictable monthly payments.']
    ],
    stories:[['Restaurant Renovation','A popular bistro needed $75k for a patio expansion before the summer season.','Secured a $75,000 Merchant Cash Advance based on credit card sales.','Seating capacity increased by 40%, leading to record summer revenue.']],
    expectations:[['Typical Funding Amount','$10,000 - $500,000'],['Time to Funding','As fast as same day'],['Common Use','Inventory, Renovation, Marketing']],
    products:['merchant-cash-advance','business-line-of-credit','business-term-loan','credit-stacking']
  },
  {
    icon:'store', title:'Retail', slug:'retail',
    description:'Stock up on inventory and scale with funding built for retail and e-commerce stores.',
    image:'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    image2:'https://images.pexels.com/photos/5239820/pexels-photo-5239820.jpeg?auto=compress&cs=tinysrgb&w=1080',
    headline:'Funding to Keep Your Shelves Stocked',
    introduction:'For retail and e-commerce businesses, inventory is king. Having the right products at the right time is essential for success. We provide fast and flexible funding to help you manage inventory, run marketing campaigns, and grow your retail business.',
    points:[
      ['Inventory Management','Use a Business Line of Credit to stock up for busy seasons, purchase new product lines, or take advantage of bulk discounts without tying up your cash.'],
      ['Sales Cycle Funding','Merchant Cash Advance is a perfect solution for retailers. Get cash now and repay it with a small percentage of your future credit card sales. It\u2019s flexible funding that matches your sales cycle.'],
      ['Digital Growth','Invest in digital marketing, website upgrades, and other online growth strategies with a fast working capital loan to boost your e-commerce sales.']
    ],
    stories:[['Holiday Inventory Prep','A boutique clothing store needed $120k in October to stock up for the Q4 rush.','Provided a $120,000 Business Line of Credit with flexible repayment.','Sold out of key lines by mid-December, maximizing profit margins.']],
    expectations:[['Typical Funding Amount','$25,000 - $1,000,000'],['Time to Funding','As fast as same day'],['Common Use','Inventory, Marketing, Staffing']],
    products:['merchant-cash-advance','business-line-of-credit','credit-stacking','business-term-loan']
  },
  {
    icon:'truck', title:'Transportation', slug:'transportation',
    description:'Keep your fleet moving with financing for vehicle acquisition and routine maintenance.',
    image:'https://images.pexels.com/photos/10963705/pexels-photo-10963705.jpeg?auto=compress&cs=tinysrgb&w=1080',
    image2:'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1080',
    headline:'Financing to Keep Your Business on the Move',
    introduction:'In the transportation and logistics industry, your vehicles are your business. Keeping your fleet updated, maintained, and on the road is essential for profitability. We offer straightforward financing to help you manage and grow your transportation company.',
    points:[
      ['Fleet Expansion','Use our Business Term Loan options to fund new or used vehicles, allowing you to expand your fleet and take on more jobs without a large capital outlay.'],
      ['Maintenance & Repairs','Cover unexpected repairs and maintenance with a fast Business Line of Credit to minimize downtime and keep your trucks on the road generating revenue.'],
      ['Operational Cash Flow','Get quick funding through a Merchant Cash Advance to cover fluctuating operational expenses like fuel, insurance, and driver pay.']
    ],
    stories:[['Fleet Expansion','A logistics company needed to add 3 new box trucks to fulfill a new contract.','Secured $210,000 in Business Term Loan.','Contract fulfilled successfully, leading to a 25% increase in annual revenue.']],
    expectations:[['Typical Funding Amount','$50,000 - $5,000,000'],['Time to Funding','As fast as same day'],['Common Use','Vehicle Purchase, Fuel, Repairs']],
    products:['business-term-loan','merchant-cash-advance','business-line-of-credit']
  },
  {
    icon:'heart', title:'Healthcare', slug:'healthcare',
    description:'Support patient care with financing that is designed for modern medical practices.',
    image:'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1080',
    image2:'https://images.pexels.com/photos/5234471/pexels-photo-5234471.jpeg?auto=compress&cs=tinysrgb&w=1080',
    headline:'Financing for Health and Wellness',
    introduction:'Private practices in the healthcare sector face a unique set of financial challenges, from managing insurance reimbursement cycles to investing in advanced medical technology. We provide specialized financing to help you focus on what matters most: patient care.',
    points:[
      ['Medical Technology','Acquire the latest diagnostic tools, imaging machines, and treatment technology with our dedicated Business Term Loan solutions to provide state-of-the-art care.'],
      ['Reimbursement Bridge','Use a Business Line of Credit or Merchant Cash Advance to smooth out cash flow while waiting for insurance reimbursement. Cover salaries, rent, and supplies without interruption.'],
      ['Practice Expansion','Finance a renovation, office expansion, or new location with a predictable Business Line of Credit for smaller projects or a larger SBA Loan for major investments.']
    ],
    stories:[['Medical Practice Modernization','A dental clinic needed $150k for new digital X-ray equipment.','Provided $150,000 in Business Term Loan.','Improved patient throughput by 20% and enhanced diagnostic accuracy.']],
    expectations:[['Typical Funding Amount','$100,000 - $3,000,000'],['Time to Funding','As fast as same day'],['Common Use','Equipment, Expansion, Working Capital']],
    products:['business-term-loan','sba-loan','business-line-of-credit']
  },
  {
    icon:'bell', title:'Hospitality & Services', slug:'hospitality-services',
    description:'Fuel your service business with tailored financing for hotels, salons, and more.',
    image:'https://images.pexels.com/photos/7820321/pexels-photo-7820321.jpeg?auto=compress&cs=tinysrgb&w=1080',
    imagePos:'center bottom',
    image2:'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1080',
    headline:'Funding to Elevate Your Guest Experience',
    introduction:'In the hospitality and services industry, customer experience is everything. From hotels and motels to salons and spas, maintaining a high standard requires continuous investment. We offer flexible funding to help you renovate, expand, and deliver exceptional service.',
    points:[
      ['Property Updates','Fund property updates and remodels with a Business Line of Credit to attract more customers, enhance your brand, and command higher rates.'],
      ['Seasonal Flexibility','Manage seasonal dips in revenue, invest in marketing campaigns, or train your staff to perfection with a flexible Merchant Cash Advance that aligns with your sales volume.'],
      ['Service Excellence','Finance new booking systems, POS software, or service equipment through our Business Term Loan options to streamline operations and improve guest satisfaction.']
    ],
    stories:[['Boutique Hotel Refresh','A 20-room hotel needed $200k for lobby and room soft-goods refresh.','Secured a $200,000 Business Line of Credit.','Average daily rate (ADR) increased by 15% post-renovation.']],
    expectations:[['Typical Funding Amount','$50,000 - $2,500,000'],['Time to Funding','As fast as same day'],['Common Use','Renovation, Marketing, Equipment']],
    products:['merchant-cash-advance','business-line-of-credit','business-term-loan']
  },
  {
    icon:'factory', title:'Manufacturing', slug:'manufacturing',
    description:'Invest in equipment and inventory to scale your overall production capabilities.',
    image:'https://images.pexels.com/photos/31321008/pexels-photo-31321008.jpeg?auto=compress&cs=tinysrgb&w=1080',
    image2:'https://images.pexels.com/photos/35072831/pexels-photo-35072831.jpeg?auto=compress&cs=tinysrgb&w=1080',
    headline:'Powering Production with Smart Capital',
    introduction:'For manufacturing businesses, growth is tied to production capacity, efficiency, and supply chain management. Investing in new equipment and maintaining inventory levels is crucial. We provide financing solutions that help you scale production and meet demand.',
    points:[
      ['Production Capacity','Secure the machinery you need to increase output, from CNC machines to assembly line components, with our Business Term Loan program.'],
      ['Supply Chain Support','Use a Business Line of Credit to purchase raw materials in bulk, take advantage of supplier discounts, and ensure your production line never stops.'],
      ['Facility Expansion','Take on large orders, expand your facility, or invest in new technology with the help of a long-term, low-rate SBA Loan.']
    ],
    stories:[['Production Line Automation','A parts manufacturer needed $450k for a new automated assembly line.','Provided $450,000 in Business Term Loan.','Output tripled while labor costs remained stable.']],
    expectations:[['Typical Funding Amount','$250,000 - $10,000,000'],['Time to Funding','As fast as same day'],['Common Use','Machinery, Raw Materials, Expansion']],
    products:['business-term-loan','sba-loan','business-line-of-credit','merchant-cash-advance']
  },
  {
    icon:'home', title:'Real Estate', slug:'real-estate',
    description:'Secure funding for property investment, renovations, and new development.',
    image:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    image2:'https://images.pexels.com/photos/31370888/pexels-photo-31370888.jpeg?auto=compress&cs=tinysrgb&w=1080',
    headline:'Capital for Your Next Property Venture',
    introduction:'The real estate market moves fast, and opportunities don\u2019t wait. Whether you\u2019re a developer, investor, or agent, having access to reliable funding is key to closing deals and maximizing returns. We offer a variety of financing options for your real estate business needs.',
    points:[
      ['Acquisition Speed','Secure a Business Line of Credit to act quickly on new property acquisitions or to fund initial development costs while you arrange long-term financing.'],
      ['Renovation Capital','Get the funds you need for both the purchase and renovation of a property with a flexible Business Line of Credit, designed to help maximize your profit.'],
      ['Brokerage Growth','Invest in marketing, technology, and hiring top agents to grow your real estate brokerage with our accessible working capital solutions.']
    ],
    stories:[['Fix-and-Flip Funding','An investor needed $300k to purchase and renovate a distressed property.','Provided a $300,000 Real Estate Loan.','Property sold in 4 months with a $85k net profit.']],
    expectations:[['Typical Funding Amount','$100,000 - $5,000,000'],['Time to Funding','As fast as same day'],['Common Use','Acquisition, Renovation, Bridge']],
    products:['real-estate-loan','business-line-of-credit','business-term-loan','sba-loan']
  },
  {
    icon:'calendar', title:'Seasonal Business', slug:'seasonal-business',
    description:'Stay ahead of seasonal shifts with reliable financial support during your busy periods.',
    image:'https://images.pexels.com/photos/30968549/pexels-photo-30968549.jpeg?auto=compress&cs=tinysrgb&w=1080',
    image2:'https://images.pexels.com/photos/5231232/pexels-photo-5231232.jpeg?auto=compress&cs=tinysrgb&w=1080',
    headline:'Capital for Every Season of Your Business',
    introduction:'A seasonal business faces the unique challenge of generating most of its revenue in a short period. We provide funding solutions that help you prepare for the busy season and manage cash flow during the off-season, ensuring year-round stability.',
    points:[
      ['Peak Season Prep','Get the funds you need before your peak season with a Business Line of Credit to ramp up inventory, hire temporary staff, and launch marketing campaigns.'],
      ['Off-Season Stability','A Merchant Cash Advance offers flexible repayment that adjusts to your revenue, making it ideal for managing cash flow and covering fixed costs during slower months.'],
      ['Financial Safety Net','Utilize Credit Stacking to gain access to multiple lines of credit, providing a financial safety net for unexpected expenses or opportunities year-round.']
    ],
    stories:[['Ski Resort Prep','A mountain resort needed $150k for equipment maintenance and staffing before opening.','Provided a $150,000 Merchant Cash Advance.','Fully staffed and operational for opening day, leading to a record season.']],
    expectations:[['Typical Funding Amount','$25,000 - $500,000'],['Time to Funding','As fast as same day'],['Common Use','Inventory, Staffing, Maintenance']],
    products:['merchant-cash-advance','business-line-of-credit','credit-stacking']
  },
  {
    icon:'briefcase', title:'Other Industries', slug:'other',
    description:'We serve all types of businesses. Find out how we can help yours.',
    image:'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    image2:'https://images.pexels.com/photos/14613939/pexels-photo-14613939.jpeg?auto=compress&cs=tinysrgb&w=1080',
    headline:'Custom Funding Solutions for Your Unique Business',
    introduction:'Don\u2019t see your industry listed? Don\u2019t worry. We provide flexible financing for a wide variety of businesses across virtually every sector. Our experts can tailor a funding solution to meet your specific needs and challenges.',
    points:[
      ['Day-to-Day Operations','A Business Line of Credit provides the capital you need for day-to-day operations, expansion, marketing, or any other business expense with maximum flexibility.'],
      ['Revenue-Based Funding','Our Merchant Cash Advance offers a repayment structure that works with your sales volume, making it perfect for businesses with fluctuating revenue.'],
      ['Equipment Acquisition','Use our Business Term Loan to purchase any type of equipment your unique business requires to grow and succeed.'],
      ['Credit Building','Take advantage of Credit Stacking to build your business credit and secure multiple lines of funding for maximum flexibility.']
    ],
    stories:[['Professional Services Growth','A marketing agency needed $50k to hire two new account managers.','Provided a $50,000 Business Line of Credit.','Onboarded 5 new clients within 3 months of hiring.']],
    expectations:[['Typical Funding Amount','$10,000 - $1,000,000+'],['Time to Funding','As fast as same day'],['Common Use','Working Capital, Hiring, Marketing']],
    products:['business-line-of-credit','merchant-cash-advance','business-term-loan','credit-stacking']
  }
];

const resources = [
  { slug:'sba-loans-life-insurance', title:'SBA Loans & Life Insurance: What Business Owners Need to Know', description:'Understanding the life insurance requirements for SBA loan approval and how to prepare for success.', image:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', date:'July 26, 2024' },
  { slug:'mca-vs-term-loan', title:'MCA vs. Term Loan: Which is Right for Your Business?', description:'A deep dive into the pros and cons of Merchant Cash Advances and traditional Term Loans.', image:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', date:'July 22, 2024' },
  { slug:'equipment-financing-guide', title:'The Ultimate Guide to Equipment Financing', description:'Learn how to leverage equipment financing to scale your operations and boost productivity without draining your cash reserves.', image:'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', date:'July 18, 2024' },
  { slug:'credit-stacking-strategy', title:'Unlocking Capital with Business Credit Stacking', description:'Discover how to strategically combine multiple business credit lines to maximize your funding potential.', image:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', date:'July 15, 2024' },
];

return { products, industries, resources, ICON_PATHS, svg };
})();
