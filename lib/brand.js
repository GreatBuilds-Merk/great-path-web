// ============================================================================
// brand.js — THE SINGLE SOURCE OF TRUTH
//
// Rule: if a name, number, or piece of copy appears on more than one page,
// it lives HERE, not in a page file. Change it once, it changes everywhere.
//
// Safe to edit by hand. No page should ever hardcode a price or a Path name.
// ============================================================================

export const BRAND = {
  name: "Great Path Advisors",
  shortName: "Great Path",
  tagline: "AI where it helps, human where it matters.",
  // One sentence, used on the home hero and in meta descriptions.
  promise:
    "Turn the numbers your business already produces into a clear picture of where you are, whether you're on pace, and what to do next.",
  email: "hello@greatpathadvisors.com",
  bookingUrl: "https://calendly.com/dan-greatpathadvisors/intro-meeting",
};

// --- Navigation -------------------------------------------------------------
// Five items maximum. Anything else belongs in the footer.

// NOTE: /pricing is deliberately NOT linked here. The page is built and deployed,
// but it's shared privately with live prospects — same as /pricing-1 on Squarespace.
// To make pricing public later, add { label: "Pricing", href: "/pricing" } back to
// this array and to the Company footer column. Nothing else needs to change.
export const NAV = [
  { label: "Paths", href: "/paths" },
  { label: "Franchises", href: "/franchises" },
  { label: "Examples", href: "/examples" },
  { label: "Free Tools", href: "/tools" },
  { label: "About", href: "/about" },
];

export const FOOTER_NAV = [
  {
    title: "Paths",
    links: [
      { label: "Custom Automation", href: "/paths/automation" },
      { label: "Operator", href: "/paths/operator" },
      { label: "Sales", href: "/paths/sales" },
      { label: "AI Readiness", href: "/paths/ai-readiness" },
      { label: "Exit", href: "/paths/exit" },
      { label: "Cleanup", href: "/paths/cleanup" },
    ],
  },
  {
    title: "Free",
    links: [
      { label: "Where Are You on the Path?", href: "/tools/where-are-you" },
      { label: "Monthly Data Template", href: "/tools/data-template" },
      { label: "Example Briefings", href: "/examples" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Franchises", href: "/franchises" },
      { label: "Contact", href: "/contact" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

// --- The Paths --------------------------------------------------------------
// One entry drives: the /paths card, the full /paths/[slug] page, and the
// home page grid. `engine` and `profile` map to Great_Path_Engine_Foundation_Spec_v1.
//
// `tier` + `pricingNote` drive the pricing block on each Path page.
// Operator is the only Path on the three-tier revenue ladder (see TIERS below).

export const PATHS = [
  {
    slug: "automation",
    badge: "Name your budget",
    name: "Custom Automation",
    tagline: "Automate What Slows You Down",
    icon: "bolt",
    featured: true,
    short: "Tell us the budget. We'll tell you what to automate first.",
    promise:
      "Most automation advice starts with a tool. This starts with your budget and your bottlenecks — we work out which automations actually pay for themselves, then build them.",
    forYouIf: [
      "You know what needs doing but don't have the hands to execute",
      "The same work gets redone by a person every week",
      "Your CRM is a mess, or you don't have one",
      "You're ready to scale and need systems, not more hours",
    ],
    kpis: [
      "Prompt design and AI workflows built for your business",
      "Workflow automation across the tools you already use",
      "CRM build-out and clean-up",
      "SOPs so the business runs without living in your head",
      "Lead generation and outreach systems, through our partners",
    ],
    deliverable:
      "A working set of automations, scoped to your budget, with a clean handoff so it's yours to keep.",
    exampleSlug: null,
    tier: "budget",
    pricingNote:
      "Name your budget and we'll determine which automations set you up for success. Scope decides delivery — AI and workflow builds run through Great Path, lead gen and CRM work through our partners at Eleven186.",
    engine: null,
    profile: null,
  },
  {
    slug: "operator",
    name: "Operator",
    tagline: "Run It Better",
    icon: "gauge",
    featured: true,
    flagship: true,
    badge: "Flagship · Start here",
    short: "Tighten the operation. Find the margin you're already leaving behind.",
    promise:
      "Revenue is only half the story. The Operator Path watches the full operating picture — labor, cost of goods, overhead, efficiency — and tells you where the money is leaking.",
    forYouIf: [
      "Revenue is fine but the profit isn't showing up",
      "Labor and material costs move and you find out after the fact",
      "You suspect a job type, shift, or location is losing money but can't prove it",
      "You want depth, not just a revenue headline",
    ],
    kpis: [
      "Labor cost as a percentage of revenue",
      "Cost of goods sold and gross margin trend",
      "Overhead ratio",
      "Net profit and profit per unit of work",
      "Efficiency measures specific to your operation",
    ],
    deliverable:
      "A deeper monthly briefing across the full operating set, with the specific cost line that moved and what to do about it.",
    exampleSlug: "clark-custom-homes",
    tier: "operator",
    pricingNote:
      "Three tiers, all priced on your revenue: Your Engine self-serve, + Insights with an advisor in the loop, and + Advisor with a partner working your numbers. Every quote is confirmed on a call.",
    engine: "performance",
    profile: "operator",
  },
  {
    slug: "sales",
    badge: "Recurring",
    name: "Sales",
    tagline: "Grow Your Sales",
    icon: "target",
    featured: true,
    short: "Make the pipeline tell you the truth about next quarter.",
    promise:
      "Your CRM is full of activity. The Sales Path turns that activity into a forecast you can act on — coverage, close rate, aging, and whether the team is actually on pace.",
    forYouIf: [
      "Your forecast is a feeling, not a number",
      "You can't tell which reps are ahead until the quarter closes",
      "Deals sit in the pipeline and nobody notices until they're dead",
      "You have a CRM but nobody reads it",
    ],
    kpis: [
      "Pipeline coverage against quota",
      "Close rate by stage and by rep",
      "Opportunity aging",
      "Ramp time for new sellers",
      "Quota attainment pace",
    ],
    deliverable:
      "A monthly pipeline briefing: coverage against goal, where deals are stalling, and the specific conversations to have this month.",
    exampleSlug: null,
    tier: "sales-brief",
    pricingNote:
      "Priced per rep. Complexity and how consistently your reps log their notes both drive the number. Setup is often reduced or waived when bundled with an Operator Path.",
    engine: "sales",
    profile: "sales",
  },
  {
    slug: "ai-readiness",
    badge: "Free audit",
    name: "AI Readiness",
    tagline: "Future-Proof",
    icon: "spark",
    featured: false,
    short: "Find out where AI actually helps your business — and where it doesn't.",
    promise:
      "Most AI advice is written for companies that look nothing like yours. The AI Readiness audit looks at how your business actually runs and tells you the two or three places AI is worth your time.",
    forYouIf: [
      "You keep hearing you should be using AI and don't know where to start",
      "You've tried a tool or two and nothing stuck",
      "You want an honest read on what's worth doing and what's hype",
      "You'd rather fix three real bottlenecks than buy five subscriptions",
    ],
    kpis: [
      "Where your time actually goes",
      "Which processes are repeatable enough to automate",
      "Data readiness — what you have and what shape it's in",
      "Tool fit and realistic cost",
      "A ranked, sequenced list of what to do first",
    ],
    deliverable:
      "A written audit with a ranked action list, scoped to what your business can realistically absorb.",
    exampleSlug: null,
    tier: "free",
    pricingNote:
      "The audit itself is free. Paid AI coaching and consulting runs $750 for three sessions.",
    engine: null,
    profile: null,
  },
  {
    slug: "exit",
    badge: "Planning ahead",
    name: "Exit",
    tagline: "Prepare to Sell",
    icon: "flag",
    featured: false,
    short: "Twelve months of preparation so the business sells for what it's worth.",
    promise:
      "Buyers pay for clean books, provable margin, and a business that runs without you. The Exit Path is a twelve-month program to get all three in place before you go to market.",
    forYouIf: [
      "You're thinking about selling in the next one to three years",
      "The business depends on you being there every day",
      "Your books would not survive a buyer's diligence",
      "You want to know your number before someone else names it",
    ],
    kpis: [
      "Owner dependency and key-person risk",
      "Normalized earnings and add-back quality",
      "Customer concentration",
      "Documented process coverage",
      "Financial record readiness for diligence",
    ],
    deliverable:
      "A twelve-month roadmap with quarterly milestones, run alongside you rather than handed over.",
    exampleSlug: null,
    tier: "advisory",
    pricingNote:
      "Custom, built around where you are in the process and what you are aiming at. Scoped together on your call.",
    engine: null,
    profile: null,
    note: "This one we run with you, not for you.",
  },
  {
    slug: "cleanup",
    badge: "One-time",
    name: "Cleanup",
    tagline: "Get Back on Track",
    icon: "wrench",
    featured: false,
    short: "When something is clearly wrong and you need to find it fast.",
    promise:
      "Cash is tight, a number moved the wrong way, or the business stopped behaving the way it used to. The Cleanup Path is a focused diagnosis and a short, specific plan to stabilize.",
    forYouIf: [
      "Cash flow tightened and you're not sure why",
      "A good year turned into a bad one without an obvious cause",
      "You're firefighting and can't get above it",
      "You need a plan for the next ninety days, not the next three years",
    ],
    kpis: [
      "Cash position and burn",
      "Margin erosion by line",
      "Fixed cost load against current volume",
      "Receivables and collection pace",
      "The two or three numbers that actually explain the change",
    ],
    deliverable:
      "A diagnosis and a ninety-day stabilization plan, worked through with you directly.",
    exampleSlug: null,
    tier: "project",
    pricingNote:
      "$500 to $5,000, scoped to the work involved. Credits forward — what you spend applies toward your first year of any ongoing Path.",
    engine: null,
    profile: null,
    note: "This one we run with you, not for you.",
  },
];

export const getPath = (slug) => PATHS.find((p) => p.slug === slug) || null;

// --- Pricing ----------------------------------------------------------------
// Every price on the site reads from here. Change it once.
//
// Pricing is REVENUE-BASED and QUOTED PRIVATELY. The public site never shows a
// number — it says "pricing scales with your revenue, book a call." The bands
// below drive the unlinked /pricing page you send to live prospects.
//
// Rules:
//   · Increases are set from the client's 2-YEAR revenue average.
//   · Decreases are set from LAST YEAR'S change.
//   · Reviewed annually, at the client's one-year mark. Never mid-year.
//   · Annual prepay saves ~20%.
//   · Setup lands at roughly TWO MONTHS of + Insights revenue in every band.

export const REVENUE_BANDS = [
  { id: "b1", label: "$150K – $250K" },
  { id: "b2", label: "$250K – $650K" },
  { id: "b3", label: "$650K – $1.05M" },
  { id: "b4", label: "$1.05M – $1.5M" },
  { id: "custom", label: "Over $1.5M", custom: true },
];

export const TIERS = [
  {
    id: "engine",
    name: "Your Engine",
    tagline: "Self-serve. No advisor.",
    summary: "Your data, your own custom AI engine. Send your numbers, get your brief back.",
    includes: [
      "Monthly Owner Briefing",
      "Seasonality-adjusted pace to goal",
      "Your KPI backbone tracked every month",
      "Three specific actions each month",
      "Shareable and printable",
    ],
    monthly: { b1: 49, b2: 79, b3: 109, b4: 129, custom: 129 },
    setup: { b1: 199, b2: 299, b3: 425, b4: 500, custom: 500 },
    customNote: "Capped at $129 — the rate stops scaling above $1.5M.",
  },
  {
    id: "insights",
    name: "+ Insights",
    tagline: "An advisor in the loop.",
    summary: "Deeper analysis, more sources, custom report design, and a real advisor keeping the recommendations fit to your business.",
    highlight: true,
    includes: [
      "Everything in Your Engine",
      "Discovery call and your core KPIs defined",
      "Your existing tools connected",
      "Deeper analysis across more sources",
      "Custom report design",
      "Ongoing tuning as your goals evolve",
    ],
    monthly: { b1: 125, b2: 275, b3: 495, b4: 695, custom: null },
    setup: { b1: 250, b2: 500, b3: 1000, b4: 1250, custom: null },
  },
  {
    id: "advisor",
    name: "+ Advisor",
    tagline: "A partner on your numbers.",
    summary: "A dedicated partner working your numbers alongside you — forecasting, richer dashboards, and hands-on strategy, not just a brief.",
    includes: [
      "Everything in + Insights",
      "A deeper data build with forecasting",
      "Richer dashboards",
      "A dedicated partner working your numbers",
      "Hands-on strategy, not just a brief",
      "Eleven186 specialist support when it fits",
    ],
    monthly: { b1: 165, b2: 355, b3: 645, b4: 900, custom: null },
    setup: { b1: 250, b2: 500, b3: 1000, b4: 1250, custom: null },
  },
];

export const getTier = (id) => TIERS.find((t) => t.id === id) || null;

// Returns { monthly, setup } for a tier in a band, or nulls where it is custom.
export const quote = (tierId, bandId) => {
  const t = getTier(tierId);
  if (!t) return { monthly: null, setup: null };
  return { monthly: t.monthly[bandId] ?? null, setup: t.setup[bandId] ?? null };
};

export const money = (n) => (n == null ? "Custom" : "$" + n.toLocaleString("en-US"));

// --- Everything priced outside the Operator ladder --------------------------

export const OTHER_PRICING = [
  {
    id: "sales-brief",
    name: "The Sales Brief",
    line: "Custom, per rep",
    body: "Priced per rep. Complexity and how consistently your reps log their notes both drive the number — the brief is only as good as what the CRM is fed. Setup is often reduced or waived when bundled with an Operator Path.",
  },
  {
    id: "automation",
    name: "Custom Automation Services",
    line: "Name your budget",
    body: "Tell us the budget and we'll determine which automations set you up for success. Scope decides delivery — AI and workflow builds run through Great Path, lead gen and CRM work through our partners at Eleven186.",
  },
  {
    id: "cleanup",
    name: "The Cleanup Path",
    line: "$500 – $5,000",
    body: "A one-time engagement, scoped to the work involved. Credits forward — what you spend on a Cleanup applies toward your first year of any ongoing Path.",
  },
  {
    id: "exit",
    name: "The Exit Path",
    line: "Custom",
    body: "Built around where you are in the process and what you're aiming at. Scoped together on your call.",
  },
  {
    id: "coaching",
    name: "AI Coaching & Consulting",
    line: "$750 for 3 sessions",
    body: "Prompt design, automation explained in plain language, and hands-on exposure to the tools worth your time. For owners who'd rather learn to use AI themselves than buy a system.",
  },
];

export const BILLING_NOTES = [
  {
    n: "01",
    title: "Priced on your revenue",
    body: "Your rate is set from your revenue, so the price fits the size of the business. Every quote is confirmed on a call.",
  },
  {
    n: "02",
    title: "Increases use a 2-year average",
    body: "A single strong year never spikes your price. Increases are set from the average of your last two years.",
  },
  {
    n: "03",
    title: "Decreases use last year",
    body: "If revenue drops, the decrease is based on last year's change — so a hard year is reflected right away, not two years later.",
  },
  {
    n: "04",
    title: "Reviewed once a year",
    body: "We revisit the tier at your one-year mark. Not mid-year, and not every time you have a good month.",
  },
  {
    n: "05",
    title: "Pay annually, save ~20%",
    body: "Annual locks in roughly 20% off month-to-month. Monthly keeps your cash flexible. Same service either way.",
  },
  {
    n: "06",
    title: "Bundle across roles",
    body: "Owner on the Operator Path, reps on Sales Briefs, a Cleanup up front — combine across your team and the package gets discounted.",
  },
];


// --- Hero -------------------------------------------------------------------

export const HERO = {
  eyebrow: "The Operator Path · Automated insights",
  headline:
    "You don't need more data. You need better decisions — delivered every month.",
  sub:
    "Great Path connects to the numbers you already have and sends you a Fortune 500–style executive brief: your key metrics, what changed, and the exact moves to make next.",
  trust: [
    "2–3 KPIs that actually matter",
    "Your existing tools",
    "A monthly brief you'll actually read",
  ],
};

// Tools strip — trust signal. These are names, not logos, until you have
// permission to use the marks. Names alone still do the job.
export const TOOLS = [
  "QuickBooks",
  "Square",
  "Shopify",
  "Excel",
  "Google Sheets",
  "Your CRM",
];

// --- The problem ------------------------------------------------------------

export const PROBLEM = {
  eyebrow: "Sound familiar?",
  headline: "You have plenty of data. What you don't have is a plan.",
  sub:
    "Big companies have teams of analysts turning numbers into decisions. You have a business to run — and reports that pile up unread.",
  cards: [
    {
      icon: "file",
      title: "Data in ten places",
      body:
        "Sales here, expenses there, spreadsheets everywhere. Nothing adds up to a clear picture of what's working.",
    },
    {
      icon: "target",
      title: "Reports, not direction",
      body:
        "You can see what happened last month. What you can't see is the one thing to do this week to move the needle.",
    },
    {
      icon: "gauge",
      title: "No analyst on staff",
      body:
        "Hiring a data team isn't realistic. So the big decisions get made on gut feel and hope.",
    },
  ],
};

// --- How it works — the five-step flywheel ----------------------------------

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  headline: "Your data in. Your next move out.",
  sub:
    "No new software to learn. We turn the tools you already run your business on into a clear, recurring plan you actually follow — in five steps.",
  steps: [
    {
      n: "1",
      title: "Discovery Call",
      body:
        "We learn your business — your goals, your bottlenecks, and the data you already have in QuickBooks, your POS, and spreadsheets.",
    },
    {
      n: "2",
      title: "Choose Your Paths",
      body:
        "Together we lock in the 2–3 outcomes that matter most this year — more profit, healthier cash flow, or a business that's ready to sell.",
    },
    {
      n: "3",
      title: "Reverse-Engineer the KPIs",
      body:
        "We work backward from each goal to the exact metrics that prove progress — wired straight to your existing data. No manual entry.",
    },
    {
      n: "4",
      title: "Your Owner Briefing",
      body:
        "Every cycle, your engine turns that data into a plain-English brief: what changed, what it means, and the moves to make next.",
    },
    {
      n: "5",
      title: "Progress on Repeat",
      body:
        "You act, we measure, the goal gets closer. Each briefing builds on the last, so your momentum compounds.",
    },
  ],
  flywheel: "Steps 4 and 5 repeat every cycle — that's the flywheel that keeps you moving down the path.",
  ctaNote: "30 minutes, no prep — and we'll map your first Path live on the call.",
};

// --- Why Great Path is different --------------------------------------------

export const DIFFERENCE = {
  eyebrow: "Why Great Path is different",
  headline: "Enterprise-grade insight, built for operators.",
  sub:
    "I've spent nearly two decades building the reporting and decision systems that billion-dollar companies run on. Great Path brings that same discipline to businesses doing $150K–$10M — without the complexity, the jargon, or the analyst salaries.",
  quote: "AI is a tool. Not a strategy.",
  cards: [
    {
      title: "Operator, not consultant",
      body:
        "Built by someone who's actually run operations and lived with the numbers — so you get practical moves, not theory decks.",
    },
    {
      title: "Corporate discipline, small-business simple",
      body:
        "The rigor of a Fortune 500 reporting function, stripped of the org charts and overhead. Clear structure, measurable outcomes.",
    },
    {
      title: "AI where it helps, human where it matters",
      body:
        "The engine watches your data and drafts the moves. A real advisor makes sure they fit your business and your goals.",
    },
  ],
};

// --- What changes -----------------------------------------------------------

export const WHAT_CHANGES = {
  eyebrow: "What changes",
  headline: "Run your business like the big companies do.",
  sub:
    "The Operator Path doesn't hand you another dashboard to ignore. It hands you decisions — already made from your own numbers, every single month.",
  points: [
    "Know the 2–3 KPIs that actually drive your business",
    "A monthly brief with prioritized, specific actions",
    "Catch problems early — before they hit the bank account",
    "Make confident calls without hiring an analyst",
    "Compound small, smart moves into real growth",
  ],
};

// --- Proof ------------------------------------------------------------------

export const PROOF = {
  eyebrow: "Proof it works",
  headline: "Complex data, made simple and actionable",
  cases: [
    {
      title: "Product & inventory intelligence",
      stats: [
        { value: "10,000+", label: "data points structured" },
        { value: "Hours → min", label: "analysis time" },
        { value: "<3 min", label: "to read the report" },
      ],
      body:
        "Turned 400+ fragmented accounts into a clear framework that surfaced hidden trends and flagged high-risk stock positions early — reactive inventory became proactive.",
    },
    {
      title: "Seasonal retail performance",
      stats: [
        { value: "15–25%", label: "weekday gap found" },
        { value: "<5 min", label: "weekly review" },
        { value: "30+ days", label: "of targets set" },
      ],
      body:
        "Turned inconsistent daily sales into a structured, repeatable decision system — isolating weekdays as the primary growth opportunity and sharpening promo timing.",
    },
  ],
};

// --- FAQ --------------------------------------------------------------------

export const FAQ = [
  {
    q: "Do I need special software or a data team?",
    a: "No — that's the whole point. The Operator Path connects to the everyday tools you already use, and the AI engine does the analysis. You bring the business; we bring the method and the technology.",
  },
  {
    q: "How much of my time does this take?",
    a: "Very little. The heavy lifting is automated. Most owners spend a few minutes a month reading their brief and deciding what to green-light — not hours in spreadsheets.",
  },
  {
    q: "Is my business data safe?",
    a: "Yes. Your data stays yours. We connect securely to your existing tools and never sell or share your information. We'll walk you through exactly how it works on your call.",
  },
  {
    q: "What size business is this for?",
    a: "The Operator Path is built for established small businesses — roughly $150K to $10M in revenue — that have real data and real ambition. Larger and specialized needs are a great fit for our other paths.",
  },
  {
    q: "What happens on the discovery call?",
    a: "A relaxed 30 minutes. We learn where you want to take the business, look at the data you already have, and map what your first brief could look like. No pressure, no obligation.",
  },
];

// --- Founder ----------------------------------------------------------------

export const FOUNDER = {
  // NOTE: your live Squarespace site still shows "[Your name], Founder" here.
  name: "Dan Merkel",
  title: "Founder, Great Path Advisors",
  quote:
    "Every small business I worked with was sitting on the answers to their biggest questions — buried in tools they already paid for. I built Great Path to dig those answers out and hand owners a plan they can actually act on.",
  values: [
    "Long-term thinking",
    "AI where it helps, human where it matters",
    "Focus on what moves the needle",
    "Consistency builds value",
  ],
};

// --- Who it's for -----------------------------------------------------------
// The honesty block. This converts better than another benefit list.

export const FIT = {
  yes: [
    "You run a business between roughly $150K and $10M in revenue",
    "Your numbers exist somewhere — accounting software, a POS, a spreadsheet",
    "You want a decision, not a dashboard",
    "You'll act on what the report tells you",
  ],
  no: [
    "You want someone to do your bookkeeping",
    "You need real-time data — this is a monthly rhythm, on purpose",
    "You're looking for the cheapest possible option",
    "Nobody at the business is willing to change anything",
  ],
};

// --- Seasonality library ----------------------------------------------------
// Seeds for the mini-report. Extend as design partners come in.

export const SEASONALITY_INDUSTRIES = [
  { id: "landscaping", label: "Landscaping" },
  { id: "lawncare", label: "Lawn care" },
  { id: "restaurant_seasonal", label: "Restaurant (seasonal)" },
  { id: "hvac", label: "HVAC / mechanical" },
  { id: "contracting", label: "Contracting / construction" },
  { id: "retail", label: "Retail" },
  { id: "other", label: "Something else" },
];
