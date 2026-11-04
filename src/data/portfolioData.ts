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
  phone: '+919207437904',
  availability: 'Available for full-time roles & selected freelance contracts',
  experienceDuration: '1 Year Hands-on Growth Execution',
  linkedin: 'https://linkedin.com/in/jefin-k',
  githubOrBehance: 'https://github.com/jefin001',
  degree: 'Bachelor of Commerce (B.Com) — MES College, Ponnani',
  year: '2026',
};

export const MARQUEE_ITEMS = [
  'Performance Marketing',
  'Meta Ads Manager',
  'Google Ads & Search PPC',
  'Social Media Strategy',
  'AI Studio',
  'Antigravity',
  'GitHub',
  'Vercel',
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
    name: 'Cellupro',
    industry: 'Skincare & Sustainable',
    scope: 'Performance Ad Creatives & E-Commerce Acquisition',
    year: '2025',
    description: 'Promoting clean, eco-conscious skincare formulations and sustainable consumer goods through performance-led ad creatives and influencer whitelisting.',
    highlight: 'Clean Skincare Acquisition Funnel',
    tagline: 'Sustainable skincare consumer growth',
  },
  {
    id: 'vidya-portal',
    name: 'Vidya Portal',
    industry: 'Study Abroad',
    scope: 'Lead Generation Campaigns & Global Admissions',
    year: '2024 - 2025',
    description: 'Multi-touch lead generation campaigns for international university aspirants, visa processing inquiries, and overseas higher education consultations.',
    highlight: 'Study Abroad Applicant Engine',
    tagline: 'High-intent international student leads',
  },
  {
    id: 'gazania',
    name: 'Gazania Restaurant',
    industry: 'Indo Arab Restaurant',
    scope: 'Local Footfall & Culinary Social Storytelling',
    year: '2024',
    description: 'Geo-targeted brand awareness, authentic Indo-Arab culinary Reels, and weekend promotional traffic surges for signature mandi, grills, and fusion dishes.',
    highlight: 'Indo-Arab Dining Discovery',
    tagline: 'Sensory gastronomy and weekend footfall',
  },
  {
    id: 'heilerco',
    name: 'HeilerCo',
    industry: 'Study Abroad',
    scope: 'International Education Funnel & Inbound Leads',
    year: '2025',
    description: 'Building trust-first organic content channels alongside targeted paid media for European and UK study abroad admissions and scholarship advisory.',
    highlight: 'Study Abroad Consultation Pipeline',
    tagline: 'Qualified study abroad candidates',
  },
  {
    id: 'coalspark',
    name: 'Coalspark',
    industry: 'Multicuisine Restaurant',
    scope: 'Restaurant Branding & Dining Footfall Campaigns',
    year: '2024',
    description: 'Transforming local dining presence with sizzling sizzler reels, multicuisine chef specials, and geo-fenced weekend dining reservation promotions.',
    highlight: 'Multicuisine Dining Experience',
    tagline: 'Family dining and weekend walk-ins',
  },
  {
    id: 'placementor',
    name: 'Placementor Academy',
    industry: 'Career Training Academy',
    scope: 'Branch Marketing, Admissions & Direct Funnels',
    year: '2024 - 2025',
    description: 'Driving regional student admissions for accounting, IT, and job-guaranteed professional skill programs via hyper-targeted Meta Lead forms and WhatsApp nurture.',
    highlight: 'Career Training Admissions Engine',
    tagline: 'Consistent monthly enrollment growth',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-vidya',
    client: 'Vidya Portal',
    title: 'Architecting a Predictable Study Abroad Student Acquisition Engine',
    industry: 'Study Abroad / International Higher Education',
    timeframe: '4-Month Intensive Campaign Cycle',
    role: 'Lead Performance Marketer (End-to-End Ownership)',
    objective: 'Generate high-intent qualified student inquiries for international university admissions (UK, Canada, Europe) while reducing Cost Per Lead (CPL) below regional benchmarks.',
    challenge: 'Previous broad-interest ad campaigns produced high inquiry volume but suffered from poor lead quality, low counselor connect rates, and high drop-off before counseling calls.',
    strategy: [
      'Segmented audiences into career upgraders vs final-year graduates with tailored country-specific study abroad messaging.',
      'Replaced generic instant forms with qualifying question gates (preferred country, graduation year, budget range).',
      'Implemented custom conversion tracking via Meta Pixel with standard Lead and CompleteRegistration events.',
      'Constructed a 3-tier creative matrix testing visa guidance, university scholarship options, and post-study work visa hooks.',
    ],
    execution: [
      {
        title: 'Audience Architecture & Retargeting Loops',
        description: 'Built custom lookalikes from past visa-approved candidates and layered geo-fencing across targeted university hubs in South India.',
      },
      {
        title: 'High-Converting Creative Formats',
        description: 'Designed mobile-first vertical video scripts and carousels addressing university application deadlines, IELTS waivers, and scholarship requirements.',
      },
      {
        title: 'Counselor CRM Handoff Optimization',
        description: 'Integrated instant webhook triggers pushing leads directly into counselor call sheets within 90 seconds of form submission.',
      },
    ],
    results: [
      {
        metric: '100+',
        label: 'Qualified Study Abroad Inquiries / Mo',
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
      'Visual proofs of visa approval letters and student airport departures consistently produced 2.4x higher click-to-lead rates.',
    ],
    adChannels: ['Meta Ads Manager (Instagram & Facebook)', 'Google Search (High Intent Keywords)', 'WhatsApp Business CRM'],
    campaignType: 'Direct Response Lead Generation',
    creativeFocus: 'Qualification Gate + Visa & Scholarship Hooks',
  },
  {
    id: 'cs-gazania',
    client: 'Gazania Restaurant',
    title: 'Driving Weekend Footfall for an Authentic Indo-Arab Dining Destination',
    industry: 'Indo Arab Restaurant / Premium Dining',
    timeframe: '3-Month Growth Engagement',
    role: 'Social Media Strategist & Paid Media Campaigner',
    objective: 'Transform local brand awareness into predictable Friday-Sunday dining reservations and walk-in footfall in a competitive regional dining hub.',
    challenge: 'The restaurant had exceptional food presentation and culinary craft, but irregular foot traffic during weekday evenings and low awareness among 22-38 demographic groups beyond immediate neighbors.',
    strategy: [
      'Engineered a sensory-first visual content calendar spotlighting mandi prep, charcoal grills, and authentic Indo-Arab spices.',
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
    client: 'Cellupro',
    title: 'Scaling Direct-to-Consumer Customer Acquisition for Clean Skincare',
    industry: 'Skincare & Sustainable Goods',
    timeframe: 'Ongoing Strategic Execution',
    role: 'Digital Marketing Strategist (Performance & Brand)',
    objective: 'Establish market presence for clean, sustainable skincare formulations and capture predictable high-ROAS e-commerce purchases.',
    challenge: 'Skincare market saturation; customers needed ingredient transparency, clinical proof of skin barrier repair, and clear before/after routine demonstrations.',
    strategy: [
      'Built educational product breakdown creatives comparing chemical additives vs clean sustainable botanical ingredients.',
      'Structured Google Search Ads capturing high-intent terms (clean sunscreen, gentle barrier repair cleanser, sustainable skincare).',
      'Created a dynamic Meta Advantage+ testing matrix rotating founder-led explanation reels and dermatologist routines.',
    ],
    execution: [
      {
        title: 'Ingredient Breakdown & Routine Ads',
        description: 'Tested side-by-side skin barrier hydration tests and texture close-ups to dismantle ingredient skepticism.',
      },
      {
        title: 'Search Intent Harvesting',
        description: 'Targeted niche skincare concern keywords with negative keyword pruning to eliminate non-commercial research queries.',
      },
      {
        title: 'Catalog Retargeting & Bundle Upsells',
        description: 'Custom Meta retargeting for website visitors who browsed serums without completing cart checkout with a limited trial kit offer.',
      },
    ],
    results: [
      {
        metric: '35%+',
        label: 'Targeted Organic Search Inflow',
        verified: true,
        context: 'Observed across targeted clean skincare keyword clusters in regional search indexes.',
      },
      {
        metric: '3.4x',
        label: 'Blended E-Commerce ROAS',
        verified: true,
        context: 'Achieved across Advantage+ dynamic creative campaigns on Meta Ads Manager.',
      },
      {
        metric: '₹220',
        label: 'Average Customer Acquisition Cost (CAC)',
        verified: true,
        context: 'Consistently maintained below average basket value of ₹890.',
      },
    ],
    keyLearnings: [
      'Skin routine carousels demonstrating step-by-step application converted 40% higher than single product beauty shots.',
      'Customer video testimonials addressing sensitive skin concerns slashed hesitation on the checkout page.',
    ],
    adChannels: ['Meta Advantage+ Shopping', 'Google Search Ads', 'Instagram Creator Whitelisting'],
    campaignType: 'E-Commerce Performance & CAC Scaling',
    creativeFocus: 'Clean Ingredient Proof & Routine Demos',
  },
  {
    id: 'cs-placementor',
    client: 'Placementor Academy',
    title: 'Scaling Career Training Admissions with Multi-Stage Paid Acquisition',
    industry: 'Career Training Academy / Admissions',
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
    title: 'Hyper-Local WhatsApp Lead Engine for Study Abroad & IELTS Prep',
    clientConcept: 'GlobalBridge Edu (Conceptual Study Abroad Advisory)',
    industry: 'International Education & Visa Consulting',
    oneWeekSyllabus: 'Days 1-2: Student pain point mapping (Visa backlogs, funding, IELTS) | Days 3-4: Direct-to-WhatsApp ad angles | Days 5-7: Instant qualifying chatbot sequence design',
    strategicObjective: 'Eliminate friction for 18-28 student aspirants seeking overseas consultations by bypassing complex web forms in favor of conversational WhatsApp eligibility checks.',
    deliverables: [
      'Geo-targeted ad creatives (15km radius around college hubs)',
      'WhatsApp Business automated eligibility bot and counselor calendar link',
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
    description: 'Spearheaded paid social media acquisition and performance marketing campaigns for diverse agency client accounts across e-commerce, study abroad, hospitality, and skincare.',
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
    type: 'In-House Career Training Leadership',
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
    description: 'Providing end-to-end performance marketing and social media advisory services to independent businesses, study abroad firms, restaurants, and clean skincare brands.',
    responsibilities: [
      'Advising founders on digital marketing strategy, paid ad budget allocation, and funnel optimization.',
      'Configuring GA4, Meta Pixel, Google Search Console, and conversion tracking architectures.',
      'Executing organic content strategies, brand storytelling, and high-converting ad copy.',
    ],
    achievements: [
      'Successfully delivered performance and branding engagements for clients including Cellupro, HeilerCo, and local restaurant destinations.',
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
    name: 'Modern Tech & Tools',
    skills: [
      'AI Studio',
      'Antigravity',
      'GitHub',
      'Vercel',
      'GA4 & Tag Manager',
      'Meta Conversion API (CAPI)',
      'Google Search Console',
      'HubSpot CRM Pipelines',
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
      'Influencer Whitelisting',
    ],
  },
  {
    name: 'Web & Growth Infrastructure',
    skills: [
      'Landing Page Optimization',
      'WordPress & Web Architecture',
      'Shopify E-Commerce Basics',
      'Technical On-Page SEO',
      'Email Marketing Sequences',
      'WhatsApp Business Automation',
      'UTM Parameter Modeling',
      'Excel & Data Synthesizing',
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
    title: 'Modern Tech & Growth Stack',
    tagline: 'AI Studio, Antigravity, GitHub & Vercel',
    description: 'Harnessing modern developer and AI tooling to build fast landing pages, version control campaign assets, run AI experiments, and deploy high-speed marketing touchpoints.',
    features: [
      'AI Studio Workflows & Marketing Prompt Engineering',
      'Antigravity Agentic Marketing Experiments',
      'GitHub Version Control & Asset Management',
      'Vercel High-Speed Global Landing Deployments',
    ],
    primary: false,
  },
];
