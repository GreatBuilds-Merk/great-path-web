/** @type {import('next').NextConfig} */

// ============================================================================
// 301 redirects from the old Squarespace URLs.
//
// Every one of these had search traffic and inbound links pointing at it.
// Without these, that traffic hits a 404 and the ranking is lost — this file
// is the single most important thing to get right at launch.
//
// Source: greatpathadvisors.com/sitemap.xml, captured 2026-08-25.
// Full list and reasoning: ../Squarespace_URL_Inventory.md
// ============================================================================

const redirects = [
  // --- live pages, one-to-one -------------------------------------------
  { source: "/home", destination: "/", permanent: true },
  { source: "/operator-path", destination: "/paths/operator", permanent: true },
  { source: "/sales-brief", destination: "/paths/sales", permanent: true },
  { source: "/growth-path", destination: "/paths/automation", permanent: true },
  { source: "/cleanup-path-1", destination: "/paths/cleanup", permanent: true },
  { source: "/cleanup-path", destination: "/paths/cleanup", permanent: true },
  { source: "/exit-path", destination: "/paths/exit", permanent: true },
  { source: "/ai-readiness-audit", destination: "/tools/ai-readiness-audit", permanent: true },
  { source: "/pricing-1", destination: "/pricing", permanent: true },

  // NOTE: /the-great-path-difference is a REAL page again (it kept the old
  // Squarespace URL deliberately, to hold its inbound links). No redirect.

  // --- folded into other pages ------------------------------------------
  { source: "/success-stories", destination: "/examples", permanent: true },
  { source: "/growth-path-examples", destination: "/examples", permanent: true },
  // NOTE: /paths needs NO redirect — it's a real page. A self-referential rule
  // here ({ source: "/paths", destination: "/paths" }) creates an infinite loop.

  // --- franchise sub-pages, until they're rebuilt ------------------------
  { source: "/franchisebrief", destination: "/franchises", permanent: true },
  { source: "/franchiseoperator", destination: "/franchises", permanent: true },

  // --- archived / retired ------------------------------------------------
  // Dan retired the brokerage-leaning toolkits; Exit is the nearest live home.
  { source: "/buyer-prep-toolkit", destination: "/paths/exit", permanent: true },
  { source: "/seller-prep-toolkit", destination: "/paths/exit", permanent: true },
  { source: "/ownership-path", destination: "/paths", permanent: true },
  { source: "/growth-patharchive", destination: "/paths/automation", permanent: true },
  { source: "/cleanup-patharchive", destination: "/paths/cleanup", permanent: true },
  { source: "/tristext", destination: "/examples", permanent: true },

  // --- moved when Free Tools was hidden ---------------------------------
  { source: "/tools/data-template", destination: "/data-prep", permanent: true },

  // --- Squarespace system paths ------------------------------------------
  { source: "/cart", destination: "/", permanent: false },
];

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
