// ============================================================================
// Briefing — ONE renderer for every Owner Briefing.
//
// Consumes the briefing data shape (company / report / series / kpis / goals /
// takeaways / comparisons / insights / actions / closing). The same component
// renders the public examples today and every client's real briefing later,
// once the engine emits report_data.json in this shape.
//
// Mobile-first: everything stacks on a phone and widens on larger screens.
// The old briefings were fixed-width print layouts — this is the responsive
// rebuild called for in the Launch 1 site spec.
// ============================================================================

import Icon from "./Icon";

const ICON = {
  bar: "trend", ticket: "file", people: "gauge", trend: "trend",
  check: "check", hands: "target", docs: "file", money: "trend",
};
const ic = (k) => ICON[k] || "check";

function fmt(v, kind) {
  if (kind === "pct") return v.toFixed(1) + "%";
  if (kind === "k") return "$" + Math.round(v / 1000) + "k";
  if (kind === "money") return "$" + Math.round(v).toLocaleString("en-US");
  return String(v);
}

/* Small responsive bar chart. SVG scales to its container via viewBox. */
function Bars({ values, labels, kind }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const lo = kind === "pct" ? Math.max(0, min - (max - min) * 0.8) : 0;
  const W = 320, H = 96, gap = 6;
  const bw = (W - gap * (values.length - 1)) / values.length;

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="96" role="img"
        aria-label={`Bar chart, ${labels.join(", ")}`} preserveAspectRatio="none">
        {values.map((v, i) => {
          const h = Math.max(3, ((v - lo) / (max - lo || 1)) * (H - 6));
          const last = i === values.length - 1;
          return (
            <rect key={i} x={i * (bw + gap)} y={H - h} width={bw} height={h} rx="3"
              fill={last ? "var(--gold)" : "var(--navy)"} opacity={last ? 1 : 0.55} />
          );
        })}
      </svg>
      <div style={{ display: "flex", marginTop: 6 }}>
        {labels.map((l, i) => (
          <span key={i} style={{ flex: 1, textAlign: "center", fontSize: 10.5,
            fontWeight: 700, letterSpacing: ".04em",
            color: i === labels.length - 1 ? "var(--gold-deep)" : "var(--muted)" }}>
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

function Section({ eyebrow, title, children }) {
  return (
    <div style={{ marginTop: 44 }}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {title && <h2 style={{ marginTop: 8, fontSize: "clamp(21px,3.4vw,28px)" }}>{title}</h2>}
      <div style={{ marginTop: 18 }}>{children}</div>
    </div>
  );
}

export default function Briefing({ data }) {
  const d = data;
  const m = d.monthsShort || d.months;

  return (
    <article>
      {/* masthead */}
      <header
        style={{
          background: "var(--navy-ink)",
          color: "#fff",
          borderRadius: 14,
          padding: "26px 24px",
        }}
      >
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".16em", color: "var(--gold)" }}>
          {d.report.title}
        </div>
        <h1 style={{ color: "#fff", marginTop: 10, fontSize: "clamp(26px,5vw,40px)" }}>
          {d.company.short}
        </h1>
        <p style={{ color: "var(--on-dark-muted)", marginTop: 8, fontSize: 15 }}>
          {d.report.period} · {d.report.date}
        </p>
      </header>

      {/* headline KPIs */}
      <div className="grid cols-3" style={{ marginTop: 24 }}>
        {d.kpis.map((k) => (
          <div className="card" key={k.label}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, color: "var(--navy)" }}>
              <Icon name={ic(k.icon)} size={18} />
              <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: ".08em", color: "var(--muted)" }}>
                {k.label}
              </span>
            </div>
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-.03em", margin: "10px 0 6px" }}>
              {k.value}
            </div>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: k.dir === "up" ? "var(--ahead)" : "var(--behind)" }}>
              {k.dir === "up" ? "▲" : "▼"} {k.delta} <span style={{ color: "var(--muted)", fontWeight: 500 }}>{k.m}</span>
            </div>
            {k.y && <div className="small" style={{ marginTop: 3 }}>{k.y}</div>}
          </div>
        ))}
      </div>

      {/* the headline read */}
      <Section eyebrow="The month in one paragraph">
        <p className="lead" style={{ color: "var(--ink)" }}>{d.highlight}</p>
      </Section>

      {/* goals */}
      {d.goals?.length > 0 && (
        <Section eyebrow="Goals" title="What we're driving toward">
          <div className="grid cols-3">
            {d.goals.map((g) => (
              <div className="card" key={g.t}>
                <h3 style={{ fontSize: 15 }}>{g.t}</h3>
                <p style={{ marginTop: 8 }}>{g.d}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* trends */}
      {d.comparisons?.length > 0 && (
        <Section eyebrow="Trends" title="How the numbers moved">
          <div className="grid cols-3">
            {d.comparisons.map((c) => {
              const vals = d.series[c.key];
              if (!vals) return null;
              return (
                <div className="card" key={c.key}>
                  <h3 style={{ fontSize: 13, letterSpacing: ".04em", color: "var(--muted)" }}>
                    {c.title}
                  </h3>
                  <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-.02em", margin: "6px 0 14px" }}>
                    {fmt(vals[vals.length - 1], c.fmt)}
                  </div>
                  <Bars values={vals} labels={m} kind={c.fmt} />
                  <p style={{ marginTop: 12, fontSize: 14 }}>{c.note}</p>
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {/* takeaways */}
      {d.takeaways?.length > 0 && (
        <Section eyebrow="Takeaways" title="What this means">
          <div className="grid cols-3">
            {d.takeaways.map((t) => (
              <div className="card" key={t.t}>
                <div style={{ color: "var(--gold-deep)" }}><Icon name={ic(t.icon)} size={20} /></div>
                <h3 style={{ fontSize: 16, marginTop: 10 }}>{t.t}</h3>
                <p style={{ marginTop: 8 }}>{t.d}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* insights */}
      {d.insights?.length > 0 && (
        <Section eyebrow="Insights" title="The read beneath the numbers">
          <div className="grid cols-2">
            {d.insights.map((t) => (
              <div className="card" key={t.t}>
                <div style={{ color: "var(--navy)" }}><Icon name={ic(t.icon)} size={20} /></div>
                <h3 style={{ fontSize: 16, marginTop: 10 }}>{t.t}</h3>
                <p style={{ marginTop: 8 }}>{t.d}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* actions — the payload */}
      {d.actions?.length > 0 && (
        <Section eyebrow="Do next" title="Three moves this month">
          <div className="stack">
            {d.actions.map((a, i) => (
              <div className="card" key={a.t} style={{ borderLeft: "4px solid var(--gold)", borderRadius: 12 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "var(--gold-deep)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{ fontSize: 17 }}>{a.t}</h3>
                </div>
                <ul className="fit-list fit-yes" style={{ marginTop: 10 }}>
                  {a.bullets.map((b) => (
                    <li key={b}>
                      <span className="mk"><Icon name="check" size={16} /></span>{b}
                    </li>
                  ))}
                </ul>
                {a.step && (
                  <p style={{ marginTop: 12, padding: "12px 14px", background: "var(--card-alt)",
                    borderRadius: 8, fontSize: 14.5, fontWeight: 600 }}>
                    <span style={{ color: "var(--gold-deep)" }}>This week: </span>{a.step}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* closing */}
      {d.closing && (
        <div style={{ marginTop: 44, padding: "26px 24px", background: "var(--navy-ink)",
          color: "var(--on-dark)", borderRadius: 14 }}>
          <div className="eyebrow" style={{ color: "var(--gold)" }}>Closing</div>
          <p style={{ marginTop: 10, fontSize: "clamp(16px,2.2vw,19px)", lineHeight: 1.6 }}>
            {d.closing}
          </p>
        </div>
      )}
    </article>
  );
}
