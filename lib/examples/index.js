// ============================================================================
// The example briefing library.
//
// Two kinds of example live here, and the difference is deliberate:
//
//   real: false  — a SAMPLE briefing. The business is illustrative, built to
//                  show the format and the depth of the analysis. Labelled as
//                  a sample on the site. Never presented as client work.
//   real: true   — a REAL client briefing. `anonymized: true` means the name
//                  and logo were changed at that client's request; the numbers
//                  and the analysis are theirs.
//
// Keep that distinction honest. Presenting an illustrative business as a real
// client is fabricated proof, and it's the one thing that can't be walked back.
//
// These files were lifted from the original fixed-width HTML briefings' single
// `DATA` object. When the engine lands they become report_data.json fixtures —
// which is also why they double as the golden-file regression set.
// ============================================================================

import summitAir from "./summit-air-mechanical.json";
import dcClark from "./dc-clark-homes.json";
import lakeside from "./lakeside-exteriors.json";

export const EXAMPLES = [summitAir, dcClark, lakeside];

export const getExample = (slug) => EXAMPLES.find((e) => e.slug === slug) || null;
