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
  bookingUrl: "/contact", // swap for a Calendly/Cal.com URL when you have one
};

// --- Navigation -------------------------------------------------------------
// Five items maximum. Anything else belongs in the footer.

export const NAV = [
  { label: "Paths", href: "/paths" },
  { label: "Examples", href: "/examples" },
  { label: "Free Tools", href: "/tools" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const FOOTER_NAV = [
  {
    title: "Paths",
    links: [
      { label: "Growth", href: "/paths/growth" },
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
      { label: "Pricing", href: "/pricing" },
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
// tier: "on-the-path" = self-serve signup CTA
//       "advisory"    = Book a Call CTA, priced per engagement

export const PATHS = [
  {
    slug: "growth",
    name: "Growth",
    tagline: "Improve Performance",
    icon: "trend",
    featured: true,
    short: "Grow revenue without guessing which lever actually moved it.",
    promise:
      "You know the business can do more. The Growth Path sets a destination, then shows you every month whether you're on pace to reach it and what to change if you're not.",
    forYouIf: [
      "You have a revenue number in your head but no way to tell if you're tracking toward it",
      "Good months and bad months feel random, and you can't explain either one",
      "You're making decisions on a gut read of the bank balance",
      "You want one page a month, not a dashboard you'll never open",
    ],
    kpis: [
      "Revenue against a seasonality-adjusted pace",
      "Average ticket / transaction value",
      "Gross margin percentage",
      "Revenue mix by product, service, or line",
      "Month-over-month and year-over-year movement",
    ],
    deliverable:
      "A monthly On-the-Path briefing: where you are, where you should be by now, the gap, and three specific actions to close it.",
    exampleSlug: "summit-mechanical",
    tier: "on-the-path",
    engine: "performance",
    profile: "growth",
  },
  {
    slug: "operator",
    name: "Operator",
    tagline: "Run It Better",
    icon: "gauge",
    featured: true,
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
    tier: "plus",
    engine: "performance",
    profile: "operator",
  },
  {
    slug: "sales",
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
    tier: "plus",
    engine: "sales",
    profile: "sales",
  },
  {
    slug: "ai-readiness",
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
    tier: "advisory",
    engine: null,
    profile: null,
  },
  {
    slug: "exit",
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
    engine: null,
    profile: null,
    note: "This one we run with you, not for you.",
  },
  {
    slug: "cleanup",
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
    tier: "advisory",
    engine: null,
    profile: null,
    note: "This one we run with you, not for you.",
  },
];

export const getPath = (slug) => PATHS.find((p) => p.slug === slug) || null;

// --- Pricing ----------------------------------------------------------------
// Every price on the site reads from here. Change it once.

export const PRICING = [
  {
    id: "setup",
    name: "Path Setup",
    price: 199,
    cadence: "one-time",
    badge: "Introductory rate — first 15 clients",
    summary: "The part where a human does the thinking.",
    includes: [
      "A working session to choose your Path",
      "Destination and goals set with real target dates",
      "Your KPI backbone configured",
      "Your data mapped so the engine reads it",
      "Your first briefing built and walked through with you",
    ],
    cta: { label: "Book a Call", href: "/contact" },
  },
  {
    id: "on-the-path",
    name: "On the Path",
    price: 49,
    cadence: "month",
    summary: "Send your numbers. Get your briefing.",
    highlight: true,
    includes: [
      "Monthly On-the-Path briefing",
      "Seasonality-adjusted pace to goal",
      "Your KPI backbone tracked every month",
      "Three specific actions each month",
      "Shareable and printable",
    ],
    cta: { label: "Book a Call", href: "/contact" },
    note: "Requires Path Setup.",
  },
  {
    id: "plus",
    name: "On the Path Plus",
    price: 149,
    cadence: "month",
    summary: "Deeper analysis, and a quarterly conversation.",
    includes: [
      "Everything in On the Path",
      "Full Operator-depth KPI set",
      "Deeper monthly analysis",
      "A quarterly working call",
      "Goal resets as the business changes",
    ],
    cta: { label: "Book a Call", href: "/contact" },
    note: "Requires Path Setup.",
  },
  {
    id: "advisory",
    name: "Advisory",
    price: null,
    cadence: "quoted",
    summary: "AI Readiness, Exit prep, and Cleanup work.",
    includes: [
      "AI Readiness audit",
      "Exit Path — twelve-month sale preparation",
      "Cleanup — diagnosis and ninety-day plan",
      "Scoped and quoted per engagement",
    ],
    cta: { label: "Book a Call", href: "/contact" },
  },
];

export const getTier = (id) => PRICING.find((t) => t.id === id) || null;

// --- How it works -----------------------------------------------------------

export const HOW_IT_WORKS = [
  {
    n: "01",
    title: "Pick your Path",
    body:
      "One working session. We choose the Path that fits where you're trying to go, set the destination, and configure the numbers that measure progress toward it. You don't have to invent anything.",
  },
  {
    n: "02",
    title: "Send your numbers",
    body:
      "Fill one simple template with figures your business already produces. No new software, no integration project, no changing how you work.",
  },
  {
    n: "03",
    title: "Get your briefing",
    body:
      "Every month: where you are on the road, whether you're on pace, and three specific things to do about it. One page you'll actually read.",
  },
];

// --- Who it's for -----------------------------------------------------------
// The honesty block. This converts better than another benefit list.

export const FIT = {
  yes: [
    "You run a business between roughly $500K and $20M in revenue",
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
