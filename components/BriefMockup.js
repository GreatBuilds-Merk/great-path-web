// ============================================================================
// BriefMockup — the hero's product demo.
//
// This is a STATIC sample, not live data. It exists to show a visitor what
// lands in their inbox every month, in one glance, before they read a word of
// copy. Carried over from the Squarespace hero, with the On-the-Path bar added
// so the road concept appears above the fold.
//
// When the engine is live, this can be swapped for a real report_data.json
// sample — keep the layout, change the source.
// ============================================================================

const KPIS = [
  { value: "+18%", label: "Repeat revenue", good: true },
  { value: "$142", label: "Avg. ticket", good: true },
  { value: "74%", label: "Goal to date", good: null },
];

const ACTIONS = [
  "Re-engage 12 lapsed customers — they drove 22% of Q2 profit.",
  "Raise price on your top 3 services; demand is inelastic here.",
  "Watch Thursday staffing — labor % is trending over target.",
];

export default function BriefMockup() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 24px 60px rgba(0,0,0,.34)",
        overflow: "hidden",
        maxWidth: 460,
        width: "100%",
      }}
    >
      {/* header */}
      <div
        style={{
          background: "var(--navy)",
          color: "#fff",
          padding: "14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 14.5 }}>Your Operator Brief</span>
        <span style={{ fontSize: 12, color: "var(--gold)", fontWeight: 600 }}>August 2026</span>
      </div>

      <div style={{ padding: "20px" }}>
        {/* KPI row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
          {KPIS.map((k) => (
            <div key={k.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 23,
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                  color: k.good ? "var(--ahead)" : "var(--navy-ink)",
                }}
              >
                {k.value}
              </div>
              <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 2, lineHeight: 1.3 }}>
                {k.label}
              </div>
            </div>
          ))}
        </div>

        {/* slim on-the-path bar */}
        <div style={{ marginTop: 20 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: 7,
            }}
          >
            <span>On the path</span>
            <span style={{ color: "var(--ahead)" }}>On track</span>
          </div>
          <div style={{ height: 8, borderRadius: 999, background: "#e6eaf0", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "0 auto 0 0",
                width: "74%",
                borderRadius: 999,
                background: "linear-gradient(90deg,var(--navy),var(--gold))",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "74%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#fff",
                border: "3px solid var(--ahead)",
                boxShadow: "0 1px 5px rgba(0,0,0,.2)",
              }}
            />
          </div>
        </div>

        {/* do next */}
        <div
          style={{
            marginTop: 20,
            paddingTop: 16,
            borderTop: "1px solid var(--line)",
          }}
        >
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 800,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--gold-deep)",
              marginBottom: 10,
            }}
          >
            Do next
          </div>
          <ul style={{ display: "grid", gap: 9 }}>
            {ACTIONS.map((a) => (
              <li
                key={a}
                style={{
                  display: "flex",
                  gap: 9,
                  fontSize: 13.5,
                  lineHeight: 1.45,
                  color: "var(--ink)",
                }}
              >
                <span style={{ color: "var(--navy)", fontWeight: 800, flex: "0 0 auto" }}>→</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
