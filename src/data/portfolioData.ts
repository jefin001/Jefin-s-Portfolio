import { Client, CaseStudy, ExperienceItem, CertificationItem, ConceptualProject } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Jefin K.',
  title: 'Digital Marketer & Performance Strategist',
  specialization: 'Social Media Marketing & Performance Marketing',
  headline: 'Turning Marketing Intent Into Measurable Demand.',
  subheadline: 'End-to-end campaign strategist bridging audience psychology, conversion-focused creative, and multi-channel ad budget scaling.',
  bio: 'Based in Malappuram, Kerala, I specialize in full-funnel digital marketing: architecting paid campaigns across Meta and Google, developing social content systems, and optimizing conversion funnels with clean analytical tracking.',
  location: 'Malappuram, Kerala, India',
  email: 'jefink904@gmail.com',
  phone: '+91 90482 17355',
  availability: 'Available for full-time roles & selected freelance contracts',
  experienceDuration: '1 Year Hands-on Growth Execution',
  linkedin: 'https://linkedin.com/in/jefin-k',
  githubOrBehance: 'https://behance.net',
  degree: 'Bachelor of Commerce (B.Com) — MES College, Ponnani',
  year: '2026',
};

export const MARQUEE_ITEMS = [
  'Performance Marketing',
  'Meta Ads Manager',
  'Google Ads & Search PPC',
  'Social Media Strategy',
  'Lead Generation Funnels',
  'Audience Segmentation',
  'GA4 & Funnel Tracking',
  'Creative A/B Testing',
  'Conversion Rate Optimization',
  'AI-Assisted Workflow Velocity',
];

export const CLIENTS: Client[] = [
  {
    id: 'cellupro',
    name: 'Cellupro Green',
    industry: 'Eco-Friendly & Sustainable Products',
    scope: 'Performance Ad Creatives & E-Commerce Acquisition',
    year: '2025',
    description: 'Promoting sustainable biodegradable packaging alternatives across regional consumer and B2B distributor segments.',
    highlight: 'Eco-Packaging Performance Funnel',
    tagline: 'Sustainable consumer brand acquisition',
  },
  {
    id: 'vidya-portal',
    name: 'Vidya Portal',
    industry: 'EdTech & Digital Education',
    scope: 'Lead Generation Campaigns & Social Community',
    year: '2024 - 2025',
    description: 'Multi-touch lead generation campaigns for higher education aspirants and skill certification applicants.',
    highlight: 'Student Lead Acquisition Engine',
    tagline: 'Cost-efficient applicant funnels',
  },
  {
    id: 'gazania',
    name: 'Gazania Restaurant',
    industry: 'Hospitality & Food Culture',
    scope: 'Local Footfall & Culinary Social Storytelling',
    year: '2024',
    description: 'Geo-targeted brand awareness, Instagram visual storytelling, and weekend promotional traffic surges.',
    highlight: 'Local Hospitality Discovery',
    tagline: 'Visual gastronomy and local footfall',
  },
  {
    id: 'heilerco',
    name: 'HeilerCo.',
    industry: 'Healthcare & Wellness',
    scope: 'Brand Presence & Inbound Lead Generation',
    year: '2025',
    description: 'Building trust-first organic content channels alongside targeted paid media for health consultation inquiries.',
    highlight: 'Trust-Driven Healthcare Marketing',
    tagline: 'Qualified patient consultation pipeline',
  },
  {
    id: 'coalspark',
    name: 'Coalspark India',
    industry: 'Industrial Energy & Commodities',
    scope: 'B2B Digital Positioning & Stakeholder Outreach',
    year: '2024',
    description: 'Modernizing corporate digital footprint, LinkedIn executive engagement, and industrial vendor credibility.',
    highlight: 'B2B Industrial Outreach',
    tagline: 'Executive reputation and trade inquiry',
  },
  {
    id: 'placementor',
    name: 'Placementor Academy',
    industry: 'Career Training & Upskilling',
    scope: 'Branch Marketing, Admissions & Direct Funnels',
    year: '2024 - 2025',
    description: 'Driving regional student admissions via hyper-targeted Meta Lead forms and localized WhatsApp nurture flows.',
    highlight: 'Academy Admissions Engine',
    tagline: 'Consistent monthly enrollment growth',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-vidya',
    client: 'Vidya Portal',
    title: 'Architecting a Predictable Student Lead Acquisition Engine',
    industry: 'EdTech / Professional Education',
    timeframe: '4-Month Intensive Campaign Cycle',
    role: 'Lead Performance Marketer (End-to-End Ownership)',
    objective: 'Generate high-intent qualified student inquiries for professional certification programs while reducing Cost Per Lead (CPL) below industry averages.',
    challenge: 'Previous broad-interest ad campaigns produced high inquiry volume but suffered from poor lead quality, low counselor connect rates, and high drop-off before counseling calls.',
    strategy: [
      'Segmented audiences into career upgraders vs fresh graduates with tailored messaging for each motivation.',
      'Replaced generic instant forms with qualifying question gates (qualification level, graduation year, program timeline).',
      'Implemented custom conversion tracking via Meta Pixel with standard Lead and CompleteRegistration events.',
      'Constructed a 3-tier creative matrix testing pain-point hooks, syllabus clarity, and placement track records.',
    ],
    execution: [
      {
        title: 'Audience Architecture & Retargeting Loops',
        description: 'Built custom lookalikes from top 10% past enrollments and layered geo-fencing across targeted university regions in South India.',
      },
      {
        title: 'High-Converting Creative Formats',
        description: 'Designed mobile-first vertical video scripts and carousel carousels addressing tuition return-on-investment and career placement partners.',
      },
      {
        title: 'Counselor CRM Handoff Optimization',
        description: 'Integrated instant webhook triggers pushing leads directly into counselor call sheets within 90 seconds of form submission.',
      },
    ],
    results: [
      {
        metric: '100+',
        label: 'Qualified Student Inquiries / Mo',
        verified: true,
        context: 'Documented during active ad spend campaign cycles with qualifying filters enabled.',
      },
      {
        metric: '-32%',
        label: 'Lead Acquisition Cost Reduction',
        verified: true,
        context: 'Achieved after migrating from generic lead forms to pre-filtered qualifying forms.',
      },
      {
        metric: '68%',
        label: 'Lead-to-Counselor Contact Rate',
        verified: true,
        context: 'Boosted from 41% baseline through rapid response notifications.',
      },
    ],
    keyLearnings: [
      'Adding 2 qualifying questions reduced raw click-throughs by 11% but increased actual enrolled conversions by nearly double.',
      'Direct WhatsApp click-to-chat ads outperformed standard web lead forms for evening weekend inquiries.',
      'Visual proofs of alumni graduation badges consistently produced 2.4x higher click-to-lead rates than abstract stock photos.',
    ],
    adChannels: ['Meta Ads Manager (Instagram & Facebook)', 'Google Search (High Intent Keywords)', 'WhatsApp Business CRM'],
    campaignType: 'Direct Response Lead Generation',
    creativeFocus: 'Qualification Gate + Career ROI Hooks',
  },
  {
    id: 'cs-gazania',
    client: 'Gazania Restaurant',
    title: 'Driving Hyper-Local Weekend Footfall via Sensory Social Storytelling',
    industry: 'Hospitality / Premium Dining',
    timeframe: '3-Month Growth Engagement',
    role: 'Social Media Strategist & Paid Media Campaigner',
    objective: 'Transform local brand awareness into predictable Friday-Sunday dining reservations and walk-in footfall in a competitive regional dining hub.',
    challenge: 'The restaurant had exceptional food presentation and culinary craft, but irregular foot traffic during weekday evenings and low awareness among 22-38 demographic groups beyond immediate neighbors.',
    strategy: [
      'Engineered a sensory-first visual content calendar spotlighting kitchen prep, sizzling sizzlers, and ambient evening dining.',
      'Deployed radius geo-targeted Meta ads (7km perimeter) programmed to serve exclusively on Thursday to Saturday afternoons.',
      'Designed frictionless Instagram DM reservation automation with immediate menu previews and location pin drop.',
    ],
    execution: [
      {
        title: 'High-Paced Reels & Signature Dish Spotlights',
        description: 'Filmed and cut fast-paced 8-12 second Reels focusing on acoustic sizzles, chef plating, and guest atmosphere.',
      },
      {
        title: 'Time-Parted Local Reach Campaigns',
        description: 'Scheduled Meta campaigns to bid aggressively between 4:00 PM and 8:30 PM within driving distance of the restaurant.',
      },
      {
        title: 'Weekend Tasting Specials Campaign',
        description: 'Ran limited-seat weekend chef specials promoted exclusively through organic story polls and targeted stories.',
      },
    ],
    results: [
      {
        metric: '+40%',
        label: 'Organic Social Engagement Growth',
        verified: true,
        context: 'Tracked over 90 days following reel cadence and community comment interaction strategy.',
      },
      {
        metric: '3.8x',
        label: 'Table Reservation Inquiries in DMs',
        verified: true,
        context: 'Attributed directly to time-parted Friday/Saturday story ad placements.',
      },
      {
        metric: '35k+',
        label: 'Targeted Local Residents Reached',
        verified: true,
        context: 'Within 7km radius at an efficient CPM of under ₹45.',
      },
    ],
    keyLearnings: [
      'Authentic raw smartphone video of food sizzling performed 3x better than polished slow-motion DSLR footage.',
      'Placing the Google Maps direct directions link in the ad headline increased physical navigation taps significantly.',
      'Engaging with every single comment within 15 minutes doubled Instagram algorithmic story distribution.',
    ],
    adChannels: ['Meta Ads (Instagram Stories & Feed)', 'Google Business Profile Optimization', 'Influencer Local Seeding'],
    campaignType: 'Local Reach & Footfall Driving',
    creativeFocus: 'Sensory Micro-Reels & Time-Parted Delivery',
  },
  {
    id: 'cs-cellupro',
    client: 'Cellupro Green',
    title: 'Positioning Sustainable Packaging for High-Intent Commercial Buyers',
    industry: 'CleanTech & Sustainable Goods',
    timeframe: 'Ongoing Strategic Execution',
    role: 'Digital Marketing Strategist (Performance & Brand)',
    objective: 'Establish market presence for biodegradable consumer packaging products and capture B2B wholesale sample requests.',
    challenge: 'Greenwashing skepticism in the market; buyers needed transparent certification proof, material durability validation, and fast quote calculations.',
    strategy: [
      'Built educational product breakdown creatives comparing decomposition timelines of conventional plastic vs Cellupro sugarcane bagasse.',
      'Structured Google Search Ads capturing high-intent commercial terms (biodegradable boxes wholesale, compostable food containers).',
      'Created a digital product sample request form with automated spec sheets delivered via email.',
    ],
    execution: [
      {
        title: 'Comparison & Durability Video Ads',
        description: 'Tested side-by-side moisture and heat resistance tests to dismantle buyer objections on durability.',
      },
      {
        title: 'B2B Procurement Search Funnel',
        description: 'Targeted niche B2B keywords with negative keyword pruning to eliminate non-commercial residential searches.',
      },
      {
        title: 'Catalog Retargeting & Sample Requests',
        description: 'Custom Meta retargeting for website visitors who browsed specs without requesting distributor pricing.',
      },
    ],
    results: [
      {
        metric: '35%+',
        label: 'Targeted Organic Search Inflow',
        verified: true,
        context: 'Observed across targeted green packaging keyword clusters in regional search indexes.',
      },
      {
        metric: '45+',
        label: 'Commercial Sample Requests / Qtr',
        verified: true,
        context: 'Verified inbound inquiries from food outlets, cloud kitchens, and institutional caterers.',
      },
      {
        metric: '₹140',
        label: 'Average Qualified B2B Sample CPA',
        verified: true,
        context: 'High commercial value per inquiry relative to industry benchmarks.',
      },
    ],
    keyLearnings: [
      'Commercial buyers prioritize delivery timelines and minimum order quantities over generic eco-friendliness.',
      'Publishing laboratory degradation test certificates directly on the landing page lifted form completions by 26%.',
    ],
    adChannels: ['Google Search Ads (B2B Intent)', 'LinkedIn Sponsored Content', 'Meta Retargeting'],
    campaignType: 'Commercial Lead Generation & SEO',
    creativeFocus: 'Validation Tests & Sample Request Funnels',
  },
  {
    id: 'cs-placementor',
    client: 'Placementor Academy',
    title: 'Scaling Branch Admissions with Multi-Stage Paid Acquisition',
    industry: 'Vocational Training & Admissions',
    timeframe: 'Multi-Quarter Branch Scaling',
    role: 'Branch Manager & Digital Marketer',
    objective: 'Drive consistent monthly student batch enrollments across accounting, IT, and digital skill career programs.',
    challenge: 'Branch walk-in traffic was unpredictable; admissions relied on sporadic offline pamphlets and word-of-mouth with zero digital attribution.',
    strategy: [
      'Unified online paid ads directly with in-branch admissions counseling and demo class bookings.',
      'Created testimonial-backed video ads featuring recent students placed at regional corporate firms.',
      'Implemented daily ad budget pacing with strict Cost Per Acquisition (CPA) ceilings.',
    ],
    execution: [
      {
        title: 'Free Workshop & Demo Class Funnel',
        description: 'Offered low-friction weekend masterclasses to capture student contact information before pitching full certifications.',
      },
      {
        title: 'Hyper-Local Campus Retargeting',
        description: 'Targeted graduating degree students within 25km radius during final semester examination periods.',
      },
      {
        title: 'Continuous Creative Refreshing',
        description: 'Rotated ad creatives every 14 days to prevent audience fatigue in regional target pools.',
      },
    ],
    results: [
      {
        metric: '100%+',
        label: 'Batch Fill Rate Consistency',
        verified: true,
        context: 'Consistently achieved target classroom capacity across consecutive academic batches.',
      },
      {
        metric: '30%',
        label: 'Campaign ROI Improvement',
        verified: true,
        context: 'Calculated as net revenue from paid enrollments minus total ad spend and collateral costs.',
      },
      {
        metric: '500+',
        label: 'Demo Class Attendees Generated',
        verified: true,
        context: 'Aggregated across accounting and digital skills workshops.',
      },
    ],
    keyLearnings: [
      'Free 90-minute Saturday workshops converted 3.5x higher into paid enrollments than direct course pitch ads.',
      'Parental trust was the primary conversion bottleneck; adding placement firm logos in collateral unlocked immediate sign-ups.',
    ],
    adChannels: ['Meta Ads (Lead Forms)', 'Local WhatsApp Groups & Broadcasts', 'Campus Outreach Partnerships'],
    campaignType: 'Full-Funnel Student Acquisition',
    creativeFocus: 'Alumni Placement Proof & Demo Bookings',
  },
];

export const CONCEPTUAL_PROJECTS: ConceptualProject[] = [
  {
    title: 'The 7-Day Meta Advantage+ D2C Cold-Brew Launch Matrix',
    clientConcept: 'Kaapi Botanica (Conceptual D2C Artisanal Coffee)',
    industry: 'Direct-to-Consumer Food & Beverage',
    oneWeekSyllabus: 'Days 1-2: Customer research & 5 hook scripts | Days 3-4: UGC creative production & landing page audit | Days 5-7: Meta campaign build & dynamic creative testing',
    strategicObjective: 'Demonstrate how a new D2C beverage brand can validate market fit, achieve break-even ROAS on cold traffic, and build an automated email post-purchase nurture flow.',
    deliverables: [
      '3-Tier Creative Script Deck (Unboxing, Taste Test, Founder Story)',
      'Shopify Landing Page Wireframe with 4-Step Visual Guarantee',
      'Meta Campaign Architecture (Advantage+ Shopping vs Broad DCT Testing)',
    ],
  },
  {
    title: 'Hyper-Local WhatsApp Lead Engine for Wellness & Ayurvedic Clinics',
    clientConcept: 'AyurVeda Sanjeevani (Conceptual Holistic Health Clinic)',
    industry: 'Healthcare / Regional Wellness',
    oneWeekSyllabus: 'Days 1-2: Patient pain point mapping (Joint pain, stress, detox) | Days 3-4: Direct-to-WhatsApp ad angles | Days 5-7: Instant qualifying chatbot sequence design',
    strategicObjective: 'Eliminate friction for 35-65 age demographic patients seeking authentic consultations by bypassing complex web forms in favor of conversational WhatsApp bookings.',
    deliverables: [
      'Geo-targeted ad creatives (5km radius around clinic facility)',
      'WhatsApp Business automated greeting and consultation booking script',
      'Weekly performance dashboard template in Google Looker Studio',
    ],
  },
  {
    title: 'B2B SaaS Google Ads Intent Harvesting & Competitor Conquesting',
    clientConcept: 'SyncTask CRM (Conceptual Workflow Software for Field Teams)',
    industry: 'B2B Software as a Service',
    oneWeekSyllabus: 'Days 1-2: Keyword intent categorization (Informational vs Transactional) | Days 3-4: Negative keyword master list & ad copy variations | Days 5-7: High-converting landing page comparison table',
    strategicObjective: 'Capture high-cost-per-click commercial software buyers at 40% lower CAC through smart search ad match types and dedicated landing page comparison tables.',
    deliverables: [
      'Search campaign taxonomy with exact vs phrase match ad groups',
      'Competitor alternative landing page copy & feature comparison matrix',
      'Negative keyword exclusion list containing 180+ non-commercial terms',
    ],
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Diagnose & Understand',
    headline: 'Auditing the unit economics before touching the ad budget.',
    description: 'I begin by understanding your business margins, target Customer Acquisition Cost (CAC), and customer lifetime value. Running paid ads on an unvalidated offer or broken landing page is burning money. We align on clear conversion goals first.',
  },
  {
    step: '02',
    title: 'Research & Psychology',
    headline: 'Mining competitor ad libraries and real customer language.',
    description: 'I analyze competitor ad strategies, scrape customer reviews for authentic pain points, and segment your audience into distinct buyer personas. This guarantees our creative hooks address real objections rather than generic slogans.',
  },
  {
    step: '03',
    title: 'Architect & Create',
    headline: 'Building multi-hook creative decks and conversion-focused funnels.',
    description: 'Great ads depend on thumb-stopping creative angles. I script and design ad assets across video hooks, single-image comparison cards, and carousels, paired with friction-free landing pages and qualifying forms.',
  },
  {
    step: '04',
    title: 'Execute & Launch',
    headline: 'Deploying structured campaigns with airtight pixel tracking.',
    description: 'Setting up Meta Pixel, GA4 events, and custom conversion triggers. We launch campaigns with disciplined budget allocation, testing dynamic creative sets against defined broad and lookalike audiences without overlapping ad sets.',
  },
  {
    step: '05',
    title: 'Optimize & Scale',
    headline: 'Cutting losers ruthlessly, doubling down on winning variations.',
    description: 'Daily monitoring of Frequency, CTR, Cost Per Lead, and ROAS. I identify creative fatigue before costs spike, rotate fresh creative hooks, scale profitable ad sets horizontally, and deliver transparent reporting.',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Speakerbox Advertising Agency',
    role: 'Social Media Manager & Performance Marketing',
    period: '2024 - 2025',
    location: 'Kerala, India',
    type: 'Agency Environment',
    description: 'Spearheaded paid social media acquisition and performance marketing campaigns for diverse agency client accounts across e-commerce, hospitality, and education.',
    responsibilities: [
      'Planned, launched, and managed paid advertising budgets across Meta Ads Manager and Google Ads.',
      'Developed creative briefs, copywriting hooks, and visual formats tailored to specific platform algorithms.',
      'Conducted continuous A/B testing on ad creatives, headlines, landing pages, and audience targeting segments.',
      'Tracked and reported weekly ROAS, CPA, and conversion analytics directly to agency leadership and client stakeholders.',
    ],
    achievements: [
      'Managed multiple concurrent ad accounts with consistent delivery below target CPL ceilings.',
      'Pioneered short-form video creative frameworks that lifted overall client social engagement by over 40%.',
    ],
  },
  {
    company: 'Placementor Academy',
    role: 'Branch Manager & Digital Marketer',
    period: '2024',
    location: 'Kerala, India',
    type: 'In-House Educational Leadership',
    description: 'Dual-responsibility leadership role heading branch operations while owning digital marketing, student lead generation, and admissions funnels.',
    responsibilities: [
      'Engineered localized digital lead generation funnels combining Meta lead ads, WhatsApp nurture, and on-ground counseling.',
      'Managed full branch administrative operations, staff coordination, and target enrollment quotas.',
      'Designed and executed content marketing campaigns highlighting student placement success stories and demo workshops.',
      'Analyzed enrollment conversion rates and shortened student inquiry-to-admission cycle times.',
    ],
    achievements: [
      'Maintained 100%+ batch fill rates across accounting and technical career programs.',
      'Delivered a 30% net ROI improvement on marketing expenditures through targeted digital channels.',
    ],
  },
  {
    company: 'Independent / Freelance',
    role: 'Digital Marketing Executive & Performance Consultant',
    period: '2025 - Present',
    location: 'Remote / Kerala, India',
    type: 'Direct Client Consulting',
    description: 'Providing end-to-end performance marketing and social media advisory services to independent businesses, e-commerce brands, and professional services.',
    responsibilities: [
      'Advising founders on digital marketing strategy, paid ad budget allocation, and funnel optimization.',
      'Configuring GA4, Meta Pixel, Google Search Console, and conversion tracking architectures.',
      'Executing organic content strategies, brand storytelling, and high-converting ad copy.',
    ],
    achievements: [
      'Successfully delivered performance and branding engagements for clients including Cellupro Green and local hospitality brands.',
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    name: 'Paid Media & Acquisition',
    skills: [
      'Meta Ads Manager',
      'Google Ads & Search PPC',
      'Lead Generation Architecture',
      'Retargeting & Lookalikes',
      'Dynamic Creative Testing',
      'Ad Budget Optimization',
      'Cost-Per-Acquisition Control',
      'Geo-Targeted Local Ads',
    ],
  },
  {
    name: 'Social Media & Content',
    skills: [
      'Social Media Strategy',
      'Content Pillar Development',
      'Conversion Copywriting',
      'Short-Form Video Scripting',
      'Canva & Visual Prototyping',
      'Brand Tone Guidelines',
      'Community Engagement',
      'Influencer Seeding',
    ],
  },
  {
    name: 'Analytics & Tracking',
    skills: [
      'Google Analytics 4 (GA4)',
      'Meta Pixel & CAPI Setup',
      'Google Search Console',
      'HubSpot CRM Pipelines',
      'KPI Performance Dashboards',
      'UTM Parameter Tracking',
      'Funnel Drop-Off Analysis',
      'Google Sheets & Excel Models',
    ],
  },
  {
    name: 'Web & Supporting Digital',
    skills: [
      'WordPress & Landing Pages',
      'Shopify E-Commerce Basics',
      'Technical On-Page SEO',
      'AI Workflow Automation',
      'Email Marketing Sequences',
      'WhatsApp Business Automation',
      'Competitive Intelligence',
      'Google Workspace',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Google Digital Marketing & E-commerce Professional',
    issuer: 'Google',
    year: '2024',
    skills: ['Paid Search', 'E-commerce Optimization', 'Customer Acquisition', 'Measurement'],
  },
  {
    title: 'Google Analytics (GA4) Certification',
    issuer: 'Google Analytics Academy',
    year: '2024',
    skills: ['Event-Based Tracking', 'Custom Dimensions', 'User Journey Exploration', 'Conversion Modeling'],
  },
  {
    title: 'Meta Certified Digital Marketing Associate',
    issuer: 'Meta Blueprint',
    year: '2024',
    skills: ['Meta Ads Manager', 'Targeting & Demographics', 'Campaign Budget Optimization', 'Ad Formats'],
  },
  {
    title: 'Content Marketing Certification',
    issuer: 'HubSpot Academy',
    year: '2024',
    skills: ['Inbound Strategy', 'Content Frameworks', 'Search Intent', 'Lead Nurturing'],
  },
];

export const EDUCATION = {
  degree: 'Bachelor of Commerce (B.Com)',
  institution: 'MES College, Ponnani',
  location: 'Kerala, India',
  period: 'Completed',
  focus: 'Financial accounting, commercial business economics, and marketing principles',
};

export const SERVICES = [
  {
    number: '01',
    title: 'Performance Marketing',
    tagline: 'Predictable Customer Acquisition at Controlled Cost',
    description: 'Designing, launching, and managing revenue-focused paid ad campaigns across Meta (Instagram/Facebook) and Google Ads. From audience testing and conversion pixel tracking to budget scaling and ROAS maximization.',
    features: [
      'Meta Ads Manager & Advantage+ Campaign Structures',
      'High-Intent Google Search & Remarketing',
      'Qualifying Lead Generation Architecture',
      'Dynamic Creative Testing (DCT) & Rapid Hook Rotation',
    ],
    primary: true,
  },
  {
    number: '02',
    title: 'Social Media Marketing',
    tagline: 'Authentic Attention That Converts to Brand Equity',
    description: 'Transforming stagnant social feeds into vibrant, growth-generating channels. Developing data-backed content pillars, scripting engaging short-form video reels, and cultivating community engagement.',
    features: [
      'Comprehensive Multi-Platform Content Calendars',
      'Audience Engagement & Community Management',
      'Short-Form Video Scripting & Visual Art Direction',
      'Monthly Engagement & Reach Performance Audits',
    ],
    primary: true,
  },
  {
    number: '03',
    title: 'Content & Funnel Strategy',
    tagline: 'Aligning Messaging with Real Customer Psychology',
    description: 'Writing high-converting ad copy, crafting low-friction landing page frameworks, and structuring nurture sequences that turn casual scrollers into qualified prospects.',
    features: [
      'Customer Pain Point Mining & Angle Development',
      'Direct-Response Ad Copywriting & Hook Decks',
      'Landing Page Wireframing & Value Proposition Design',
      'WhatsApp & Email Nurture Automation Sequences',
    ],
    primary: false,
  },
  {
    number: '04',
    title: 'Analytics & Funnel Optimization',
    tagline: 'Evidence-Based Decisions, Zero Guesswork',
    description: 'Implementing clean event tracking so you know exactly which rupee generated a return. Monitoring funnel health, user drop-offs, and optimizing conversion rates systematically.',
    features: [
      'GA4 Event Tracking & Custom Conversion Setup',
      'Meta Pixel & Conversion API (CAPI) Integration',
      'Executive KPI Dashboards & Transparency Reports',
      'A/B Testing Analysis & Drop-Off Troubleshooting',
    ],
    primary: false,
  },
  {
    number: '05',
    title: 'Supporting Digital Capabilities',
    tagline: 'Integrated Web & Search Foundation',
    description: 'Enhancing the broader digital ecosystem with technical on-page SEO, landing page optimizations on WordPress or Shopify, and AI-assisted workflow acceleration.',
    features: [
      'Search Engine Optimization (SEO) & Keyword Audits',
      'Conversion-Ready WordPress & Shopify Landing Pages',
      'AI-Assisted Workflow & Creative Iteration Velocity',
      'Google Business Profile Local Map Pack Optimization',
    ],
    primary: false,
  },
];
