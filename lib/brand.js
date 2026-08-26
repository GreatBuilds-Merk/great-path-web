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
  // --- DOMAIN ---------------------------------------------------------------
  // ONE place to switch domains. Change `domain` and every email address and
  // canonical URL follows. Nothing else in the codebase hardcodes a domain.
  //
  // Currently: greatpathadvisors.com is primary. greatpath.ai is owned and
  // should 301-redirect here — held as a short vanity domain for cards and for
  // saying out loud, not as the live site.
  //
  // To move to greatpath.ai later:
  //   1. change `domain` below to "greatpath.ai"
  //   2. update SITE_URL in Vercel's env vars
  //   3. reverse the redirect at the registrar (.com -> .ai)
  //   4. move email LAST, and not during an active outreach campaign —
  //      sending-domain reputation resets and deliverability suffers.
  domain: "greatpathadvisors.com",
  vanityDomain: "greatpath.ai",

  // Two contact tiers — see /contact.
  //   email     = general inquiries + technical questions (the footer address)
  //   emailDan  = clients and prospective clients, straight to Dan
  //   emailGp   = spare//alias, currently unused on the site
  emailUser: "success",
  emailDanUser: "dan",
  emailGpUser: "gp",

  bookingUrl: "https://calendly.com/dan-greatpathadvisors/intro-meeting",
  // Must match the duration set on the Calendly event itself. If you change one,
  // change the other — a site that promises 30 and books 15 reads as careless.
  callMinutes: 15,
};

// Derived — never hardcode an address or a URL anywhere else.
BRAND.email = `${BRAND.emailUser}@${BRAND.domain}`;
BRAND.emailDan = `${BRAND.emailDanUser}@${BRAND.domain}`;
BRAND.emailGp = `${BRAND.emailGpUser}@${BRAND.domain}`;
BRAND.siteUrl = `https://www.${BRAND.domain}`;

export const CONTACT = {
  headline: "Let's see if this fits.",
  sub:
    "The fastest way in is a short call — fifteen minutes, no prep, and we'll look at what you already have. If you'd rather write first, there are two addresses depending on what you need.",
  tiers: [
    {
      id: "clients",
      icon: "target",
      label: "Clients & prospective clients",
      title: "Talk to Dan directly",
      body:
        "Working with us already, or weighing it up? This goes straight to me — not a queue, not a form. Questions about your briefing, your Path, pricing for your business, or whether any of this fits at all.",
      cta: "Book a call",
      featured: true,
      responseTime: "Usually same day",
    },
    {
      id: "general",
      icon: "gauge",
      label: "General & technical",
      title: "Everything else",
      body:
        "Technical questions, trouble with a file or a login, press and partnership enquiries, franchise system questions, or anything that isn't about a specific engagement.",
      cta: "Send a message",
      featured: false,
      responseTime: "Within one business day",
    },
  ],
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
    title: "Explore",
    links: [
      { label: "Example Briefings", href: "/examples" },
      { label: "Franchises & Multi-Unit", href: "/franchises" },
      { label: "All the Paths", href: "/paths" },
      { label: "Getting Your Data Ready", href: "/data-prep" },
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
    accent: "gold",
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
    accent: "navy",
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
    exampleSlug: "summit-air-mechanical",
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
    accent: "teal",
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
    exampleSlug: "lakeside-exteriors",
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
    accent: "plum",
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
    accent: "rust",
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
    accent: "teal",
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
  ctaNote: "Fifteen minutes, no prep — and we'll map your first Path live on the call.",
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
    a: "A relaxed fifteen minutes. We learn where you want to take the business, look at the data you already have, and map what your first brief could look like. No pressure, no obligation. If it's going well we can always keep talking.",
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

// --- Franchises --------------------------------------------------------------
// Ported from the Squarespace /franchises page. This is the highest-leverage
// offering — one relationship, many units, revenue not capped by Dan's hours.

export const FRANCHISE = {
  hero: {
    eyebrow: "For franchise systems & multi-unit operators",
    headline: "Every unit. One system. Firing in unison.",
    sub:
      "Franchise ownership multiplies complexity — different accountants, different software, blind spots between locations. Great Path turns the scattered numbers across your units into one branded executive brief, so the whole system can see what's working and move together.",
    note:
      "Set-up fee + simple per-unit pricing · White-label to your brand · Works with the accounting each unit already uses",
  },

  problem: {
    eyebrow: "The hidden tax of growth",
    headline: "Every new unit multiplies the complexity.",
    sub:
      "One location is hard enough. Ten locations on different systems, different bookkeepers, and different reporting habits means nobody can see the whole picture — until a problem is already expensive.",
    cards: [
      {
        icon: "file",
        accent: "rust",
        title: "Scattered data",
        body:
          "Each unit picks its own accounting software and accountant. The numbers never line up the same way twice, so comparing units is guesswork.",
      },
      {
        icon: "target",
        accent: "gold",
        title: "Blind between units",
        body:
          "Your best location and your struggling one are running side by side — and no one connects the dots until the quarterly numbers land.",
      },
      {
        icon: "gauge",
        accent: "teal",
        title: "Slow to react",
        body:
          "By the time a laggard shows up in the financials, months of margin are already gone. Insight arrives too late to change the outcome.",
      },
    ],
  },

  audiences: {
    eyebrow: "Built for two seats at the table",
    headline: "Whether you run the brand or run the units.",
    sub: "The same engine, aimed at what each of you needs most.",
    cols: [
      {
        label: "Franchisors & management groups",
        title: "See — and lift — the whole system",
        sub:
          "Offer it to your owners as a benefit, or build it into your tech package as a per-unit add-on.",
        points: [
          "One consistent executive brief for every unit, on your brand",
          "System-wide benchmarking — instantly see top quartile vs. bottom",
          "Spot a struggling unit early, while there's still time to help",
          "A stronger, data-backed story for recruiting new franchisees",
          "Turn \"we don't see owner financials\" into a real support advantage",
        ],
      },
      {
        label: "Multi-unit operators",
        title: "Run all your units like one",
        sub: "Stop stitching together ten reports in your head. See every location in one view.",
        points: [
          "All your units side by side, measured the exact same way",
          "Find what your top performer does differently — and copy it",
          "Catch the laggard before it quietly drains the portfolio",
          "One clear brief each period instead of a pile of statements",
          "Know exactly where to spend your next dollar and hour",
        ],
      },
    ],
  },

  models: {
    eyebrow: "Two ways to partner",
    headline: "Pick the model that fits your system.",
    sub:
      "Bring Great Path in as your system's official advisor, or put your own brand on the reporting and resell it to your owners.",
    cards: [
      {
        badge: "Path 1 · Advisor Program",
        title: "Great Path as your official advisor",
        body:
          "We become your system's named advisor. Your franchisees work with us directly under custom rate structures and discounted setup fees you secure for them — a genuine benefit you provide, with none of the overhead.",
      },
      {
        badge: "Path 2 · White-label",
        title: "Your brand, our engine",
        body:
          "Premium executive briefings — from a single unit up to a full system view — under your own brand. Give it to owners as a benefit or bundle it into your tech package.",
      },
    ],
    sampleNote:
      "We'll show you a live sample of each on the demo call — one built for an individual unit operator, one private-labeled for a franchise brand.",
  },

  compounds: {
    eyebrow: "Why it compounds",
    headline: "The advantage grows with every unit you add.",
    sub:
      "A single business gets a clearer picture. A system gets something no single owner or accountant can offer: the ability to connect units to each other, faster than anything else you could build or buy.",
    cards: [
      {
        accent: "navy",
        title: "Standardized in one place",
        body:
          "Every unit's numbers mapped to one shared template — so a dollar, a margin, and a labor rate mean the same thing everywhere.",
      },
      {
        accent: "gold",
        title: "Connections others miss",
        body:
          "See which units share the same strength or the same leak, and roll a fix out across the whole system at once — not one location at a time.",
      },
      {
        accent: "teal",
        title: "Replicate what wins",
        body:
          "Your best unit becomes the playbook. Great Path shows exactly where the others fall short of it, and by how much.",
      },
    ],
  },

  beyond: {
    eyebrow: "Beyond the monthly numbers",
    headline: "Answer the questions only a franchise system asks.",
    sub:
      "Clean, unified data doesn't just report the past — it powers the decisions that define your next five years.",
    cards: [
      {
        icon: "flag",
        accent: "plum",
        title: "Plan expansion with confidence",
        body:
          "Know which unit profiles, formats, and markets actually perform — so you open your next locations on evidence, not optimism.",
      },
      {
        icon: "file",
        accent: "rust",
        title: "Consolidate your supply base",
        body:
          "See spend across every unit in one place, surface where the system is buying the same things from different vendors, and negotiate as one.",
      },
      {
        icon: "gauge",
        accent: "teal",
        title: "Cut cost, in unison",
        body:
          "When you can compare labor, COGS, and overhead across units on equal footing, the savings hiding in the outliers become obvious.",
      },
    ],
  },

  whiteLabel: {
    eyebrow: "White-label",
    headline: "Your brand. Your brief. Our engine.",
    body:
      "Every owner briefing goes out under your name and your logo — a premium, Fortune 500–style report your owners look forward to opening. We stay behind the curtain. You get the credit.",
  },

  cta: {
    headline: "See your whole system in a single view.",
    sub:
      "Bring one or two units and we'll show you exactly what a unified, branded briefing looks like for your franchise — and the per-unit numbers to roll it out.",
    button: "Book a franchise demo",
  },
};

// --- Legal -------------------------------------------------------------------
// Plain-language drafts written from Dan's own commitments. NOT reviewed by a
// lawyer. Have an attorney read them before taking payments at scale, and
// update `entity` and `governingLaw` once the business is formally registered.

export const LEGAL = {
  effectiveDate: "August 25, 2026",
  entity: "Great Path Advisors", // sole proprietorship; update when registered
  governingLaw: "the state in which Great Path Advisors operates",
};

// --- Data prep (/data-prep) --------------------------------------------------
// An FYI page, not a lead magnet. It answers "what do I have to do to my data?"
// — which is the question that stalls people between the call and signing up.
// Templates and step-by-step directions get published here later.

export const DATA_PREP = {
  eyebrow: "Getting your data ready",
  headline: "You don't have to clean anything up before we talk.",
  sub:
    "Most owners assume their numbers are too messy to be useful. They almost never are. Here's what actually happens to your data, and the short answer is: we handle it during setup.",

  why: {
    title: "Why data has to be standardized",
    body:
      "An engine can only compare things it can recognize. If revenue is called \"Sales\" one month and \"Total Income\" the next, or one location logs a job type three different ways, the numbers can't be lined up — and a report built on top of that is worse than no report, because it looks authoritative while being wrong.",
    quote: "You can't automate a mess.",
    close:
      "Standardizing means agreeing on one name, one format, and one definition for each number that matters. Do it once and every month after it is fast.",
  },

  steps: [
    {
      n: "1",
      title: "We look at what you already have",
      body:
        "On the setup call we go through your accounting software, your point of sale, and any spreadsheets you keep. We're looking for which numbers exist and where they live — not judging how tidy they are.",
    },
    {
      n: "2",
      title: "We map it, not you",
      body:
        "We work out which of your fields correspond to the KPIs your Path tracks, and write that mapping down. This is the part people expect to be painful. It isn't — it's a conversation, and we do the writing down.",
    },
    {
      n: "3",
      title: "We agree on one monthly export",
      body:
        "You end up with a single, repeatable way to send your numbers each month — usually an export you already know how to run, or a simple sheet with fixed columns.",
    },
    {
      n: "4",
      title: "After that it's a habit, not a project",
      body:
        "Once the mapping exists, sending your numbers takes a few minutes a month. The engine reads them the same way every time because the shape never changes.",
    },
  ],

  bring: [
    "Whatever your accounting software exports — QuickBooks, Xero, or similar",
    "Point-of-sale reports, if you run one",
    "Any spreadsheet you already keep by hand",
    "Payroll summaries, if labor cost matters on your Path",
    "Your CRM export, for the Sales Brief",
  ],

  dontWorry: [
    "Inconsistent category names",
    "Numbers living in several places",
    "Gaps in older months",
    "Not knowing which numbers matter yet — that's the advisory part",
  ],

  comingSoon:
    "Downloadable templates and step-by-step export directions are being written and will be published on this page. Until then, your setup call covers all of it — there's nothing to prepare in advance.",
};

// --- About ------------------------------------------------------------------
// Merged from the Squarespace /about and /the-great-path-difference pages.
// NOTE: /about said "well over a decade" while the Difference page and the home
// page said "nearly two decades." Standardized on nearly two decades.

export const ABOUT = {
  eyebrow: "About Great Path",
  headline: "Great insight shouldn't belong only to great big companies.",
  sub:
    "Great Path exists to put enterprise-grade clarity in the hands of the owners who need it most. It started with a simple frustration — and a business named after the five people who matter most.",

  story: [
    "For nearly two decades, I built the reporting and decision systems that billion-dollar companies run on. I saw firsthand how much leverage comes from simply seeing the numbers clearly — how every big decision gets easier when the data is organized and the next move is obvious.",
    "Then I'd look at the small businesses around me — the ones with real revenue, real ambition, and real data sitting unused inside the tools they already paid for. They didn't have a team of analysts. They had a gut feeling and a hope. And they were leaving growth on the table, not for lack of effort, but because no one had ever turned their numbers into a plan.",
  ],
  storyQuote: "The answers were already there. Someone just had to dig them out.",
  storyClose:
    "So I built Great Path to bring that same enterprise discipline — the structure, the KPIs, the automation — down to the businesses that need it most, in a way that's simple enough to actually use. No jargon. No analyst salaries. Just the next move, every month.",

  name: {
    letters: ["G", "R", "E", "A", "T"],
    body:
      "Great Path carries my kids' name. The five of them spell out GREAT — a daily reminder of exactly who I'm building for, and the standard I hold this work to. Every owner I help is somebody's livelihood, somebody's family. I don't take that lightly.",
  },

  // From "The Great Path Difference"
  difference: [
    {
      title: "Proven systems from the corporate world",
      body:
        "Nearly two decades in a corporate environment focused on hitting targets consistently, building systems that scale, and finding inefficiencies and closing gaps. We bring that same discipline to small businesses without the bureaucracy.",
      points: [
        "Hitting targets consistently",
        "Building systems that scale",
        "Identifying inefficiencies and closing gaps",
      ],
      close: "Clear structure, better decisions, and measurable outcomes.",
    },
    {
      title: "We think like operators, not consultants",
      body:
        "We've sat on both sides — running a business day to day, evaluating performance and making real decisions, and buying a business and navigating the transition firsthand.",
      points: [
        "What actually improves profit",
        "What reduces risk",
        "What makes a business easier to run, buy, or sell",
      ],
      close: "Not theory. Not generic advice.",
    },
    {
      title: "AI is a tool. Not a strategy",
      body:
        "There's a lot of noise around AI right now. Our position is straightforward: it's powerful, but only when applied correctly. Not using it today is like choosing to run a business without email, a website, or a phone — and forcing it where it doesn't belong creates just as many problems.",
      points: [
        "Turning raw data into clear insights",
        "Identifying trends and opportunities faster",
        "Supporting better decisions, not replacing them",
      ],
      close: "We use AI where it creates leverage, and nowhere else.",
    },
    {
      title: "Built for owners, not for theory",
      body:
        "Most advisory firms start with a framework or a tool and try to apply it across hundreds of businesses. We start somewhere different: with the owner. Great Path was built by someone actively running a small business, not just advising one.",
      points: [],
      close: "Structured Paths. Not one-size-fits-all programs.",
    },
  ],

  values: [
    {
      n: "01",
      title: "Long-term thinking",
      body:
        "We optimize for where you'll be in five years, not just this quarter. Durable value beats a quick spike.",
    },
    {
      n: "02",
      title: "AI where it helps, human where it matters",
      body:
        "The engine does the watching and the math. A real person makes sure it fits your business, your goals, and your life.",
    },
    {
      n: "03",
      title: "Focus on what moves the needle",
      body:
        "A handful of decisions drive most of the results. We spend our energy there, and cut the noise.",
    },
    {
      n: "04",
      title: "Consistency builds value",
      body:
        "Small, smart moves, made every single month, compound into something worth a great deal.",
    },
  ],

  founderNote:
    "If you're an owner sitting on data you've never had the time to use, I'd genuinely love to show you what's hiding in it. No pitch, no jargon — just a straight conversation about your business and where it could go.",
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
