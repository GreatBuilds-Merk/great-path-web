// Inline SVG icon set. No icon library dependency — these ship as markup.
// Add new icons by adding a key to PATHS_D below.

const D = {
  trend: "M3 17l6-6 4 4 7-7M21 8v5h-5",
  gauge: "M12 14l4-4M4.9 19.1A9 9 0 1119.1 19.1M12 20v.01",
  target: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 16a4 4 0 100-8 4 4 0 000 8zM12 13a1 1 0 100-2 1 1 0 000 2z",
  spark: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z",
  flag: "M5 21V4M5 4h11l-1.6 3.5L16 11H5",
  wrench: "M14.7 6.3a4 4 0 01-5 5L4 17v3h3l5.7-5.7a4 4 0 015-5l1.6-1.6-2.6-2.6-1.6 1.6z",
  check: "M4 12.5l5 5 11-11",
  x: "M6 6l12 12M18 6L6 18",
  arrow: "M5 12h14M13 6l6 6-6 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  road: "M4 21L9 3M20 21L15 3M12 6v3M12 12v3M12 18v2",
  file: "M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5zM14 3v5h5",
  play: "M8 5l11 7-11 7V5z",
  bolt: "M13 3L5 14h6l-1 7 8-11h-6l1-7z",
};

export default function Icon({ name, size = 20, stroke = 2, className = "", fill = "none" }) {
  const d = D[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  );
}
