// ============================================================================
// OnThePath — v0 PLACEHOLDER
//
// This is the hero component: the road, your position on it, and whether you
// are on pace. It appears in three places — the home hero, the mini-report
// result, and the top of every client briefing.
//
// v0 renders from props with straight-line math so the site can be built and
// styled today. Track B (great-path-engine) replaces the math with real
// seasonality-adjusted pace and feeds this component from report_data.json.
// The PROPS CONTRACT below is meant to survive that swap — keep it stable.
// ============================================================================

const money = (n) =>
  "$" + Math.round(n).toLocaleString("en-US", { maximumFractionDigits: 0 });

const STATUS = {
  ahead: { label: "Ahead of pace", color: "var(--ahead)" },
  on_track: { label: "On track", color: "var(--on-track)" },
  behind: { label: "Behind pace", color: "var(--behind)" },
};

export default function OnThePath({
  title = "2026 Revenue",
  startValue = 0,
  currentValue = 1420000,
  targetValue = 2200000,
  expectedValue = 1495000, // engine supplies this (seasonality-aware); v0 accepts it as a prop
  periodLabel = "through August",
  dark = false,
}) {
  const span = Math.max(targetValue - startValue, 1);
  const pct = Math.min(Math.max((currentValue - startValue) / span, 0), 1);
  const expPct = Math.min(Math.max((expectedValue - startValue) / span, 0), 1);
  const gap = currentValue - expectedValue;

  const statusKey =
    Math.abs(gap) / Math.max(expectedValue, 1) < 0.02
      ? "on_track"
      : gap > 0
      ? "ahead"
      : "behind";
  const status = STATUS[statusKey];

  const ink = dark ? "#fff" : "var(--navy-ink)";
  const sub = dark ? "var(--on-dark-muted)" : "var(--muted)";
  const roadBg = dark ? "rgba(255,255,255,.16)" : "#e6eaf0";

  return (
    <div
      style={{
        background: dark ? "rgba(255,255,255,.05)" : "var(--card)",
        border: `1px solid ${dark ? "rgba(255,255,255,.14)" : "var(--line)"}`,
        borderRadius: "var(--radius)",
        padding: "22px 20px 20px",
        boxShadow: dark ? "none" : "var(--shadow)",
      }}
    >
      {/* header */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <div>
          <div className="eyebrow">On the Path</div>
          <div style={{ fontWeight: 800, fontSize: 19, color: ink, marginTop: 3 }}>
            {title}
          </div>
        </div>
        <span
          style={{
            background: status.color,
            color: "#fff",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".04em",
            padding: "6px 12px",
            borderRadius: 999,
            whiteSpace: "nowrap",
          }}
        >
          {status.label}
        </span>
      </div>

      {/* the road */}
      <div style={{ position: "relative", padding: "26px 0 8px" }}>
        {/* base */}
        <div style={{ height: 10, borderRadius: 999, background: roadBg, position: "relative" }}>
          {/* travelled */}
          <div
            style={{
              position: "absolute",
              inset: "0 auto 0 0",
              width: `${pct * 100}%`,
              borderRadius: 999,
              background: "linear-gradient(90deg, var(--navy) 0%, var(--gold) 100%)",
            }}
          />
          {/* expected-by-now tick */}
          <div
            style={{
              position: "absolute",
              left: `${expPct * 100}%`,
              top: -9,
              bottom: -9,
              width: 2,
              background: dark ? "rgba(255,255,255,.55)" : "var(--navy-ink)",
              opacity: 0.55,
            }}
            title="Where you should be by now"
          />
          {/* you-are-here marker */}
          <div
            style={{
              position: "absolute",
              left: `${pct * 100}%`,
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: "#fff",
              border: `4px solid ${status.color}`,
              boxShadow: "0 2px 8px rgba(0,0,0,.18)",
            }}
          />
        </div>

        {/* end labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 12,
            fontSize: 12,
            fontWeight: 600,
            color: sub,
          }}
        >
          <span>{money(startValue)}</span>
          <span>Goal {money(targetValue)}</span>
        </div>
      </div>

      {/* stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
          gap: 14,
          marginTop: 18,
          paddingTop: 18,
          borderTop: `1px solid ${dark ? "rgba(255,255,255,.14)" : "var(--line)"}`,
        }}
      >
        <Stat label={`You are here ${periodLabel}`} value={money(currentValue)} ink={ink} sub={sub} />
        <Stat label="Should be by now" value={money(expectedValue)} ink={ink} sub={sub} />
        <Stat
          label="Gap"
          value={(gap >= 0 ? "+" : "−") + money(Math.abs(gap)).slice(1)}
          ink={status.color}
          sub={sub}
          prefix="$"
        />
      </div>
    </div>
  );
}

function Stat({ label, value, ink, sub, prefix }) {
  return (
    <div>
      <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: sub }}>
        {label}
      </div>
      <div style={{ fontSize: 22, fontWeight: 800, color: ink, letterSpacing: "-.02em", marginTop: 4 }}>
        {prefix && !value.includes("$") ? value.replace(/^([+−])/, `$1${prefix}`) : value}
      </div>
    </div>
  );
}
