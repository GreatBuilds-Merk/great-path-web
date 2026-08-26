import Link from "next/link";
import { BRAND, FRANCHISE } from "@/lib/brand";
import Icon from "@/components/Icon";

const F = FRANCHISE;

export const metadata = {
  title: "Franchises & Multi-Unit",
  description: F.hero.sub,
};

export default function Franchises() {
  return (
    <>
      {/* hero */}
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            {F.hero.eyebrow}
          </div>
          <h1 style={{ marginTop: 12 }}>{F.hero.headline}</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            {F.hero.sub}
          </p>
          <div className="btn-row" style={{ marginTop: 26 }}>
            <a href={BRAND.bookingUrl} className="btn btn-gold btn-lg">
              {F.cta.button}
            </a>
            <a href="#models" className="btn btn-ghost-light btn-lg">
              See how it works
            </a>
          </div>
          <p className="small" style={{ marginTop: 18, color: "var(--on-dark-muted)" }}>
            {F.hero.note}
          </p>
        </div>
      </section>

      {/* the problem */}
      <section className="band-cool">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{F.problem.eyebrow}</div>
            <h2 style={{ marginTop: 8 }}>{F.problem.headline}</h2>
            <p>{F.problem.sub}</p>
          </div>
          <div className="grid cols-3">
            {F.problem.cards.map((c) => (
              <div className="card" key={c.title}>
                <div className={`ico ${c.accent}`} style={{ marginBottom: 12 }}>
                  <Icon name={c.icon} size={22} />
                </div>
                <h3>{c.title}</h3>
                <p style={{ marginTop: 8 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* two audiences */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{F.audiences.eyebrow}</div>
            <h2 style={{ marginTop: 8 }}>{F.audiences.headline}</h2>
            <p>{F.audiences.sub}</p>
          </div>

          <div className="grid cols-2">
            {F.audiences.cols.map((c) => (
              <div className="card" key={c.label}>
                <span className="tag">{c.label}</span>
                <h3 style={{ marginTop: 6 }}>{c.title}</h3>
                <p style={{ marginTop: 8 }}>{c.sub}</p>
                <ul className="fit-list fit-yes" style={{ marginTop: 14 }}>
                  {c.points.map((pt) => (
                    <li key={pt} style={{ fontSize: 15 }}>
                      <span className="mk">
                        <Icon name="check" size={16} />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* two models */}
      <section id="models" className="band-navy" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{F.models.eyebrow}</div>
            <h2 style={{ marginTop: 8 }}>{F.models.headline}</h2>
            <p>{F.models.sub}</p>
          </div>

          <div className="grid cols-2">
            {F.models.cards.map((c) => (
              <div className="card" key={c.title}>
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(199,166,90,.2)",
                    color: "var(--gold)",
                    fontSize: 11.5,
                    fontWeight: 700,
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    padding: "5px 10px",
                    borderRadius: 999,
                  }}
                >
                  {c.badge}
                </span>
                <h3 style={{ marginTop: 12 }}>{c.title}</h3>
                <p style={{ marginTop: 10 }}>{c.body}</p>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: 22,
              padding: "14px 18px",
              background: "rgba(199,166,90,.14)",
              borderLeft: "3px solid var(--gold)",
              borderRadius: 8,
              fontSize: 14.5,
              color: "var(--on-dark)",
            }}
          >
            {F.models.sampleNote}
          </p>
        </div>
      </section>

      {/* why it compounds */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{F.compounds.eyebrow}</div>
            <h2 style={{ marginTop: 8 }}>{F.compounds.headline}</h2>
            <p>{F.compounds.sub}</p>
          </div>
          <div className="grid cols-3">
            {F.compounds.cards.map((c, i) => (
              <div
                className="card path-card"
                key={c.title}
                style={{ "--accent": `var(--${c.accent})` }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    letterSpacing: ".1em",
                    color: "var(--gold-deep)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 style={{ marginTop: 8 }}>{c.title}</h3>
                <p style={{ marginTop: 8 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* beyond the monthly numbers */}
      <section className="band-warm">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{F.beyond.eyebrow}</div>
            <h2 style={{ marginTop: 8 }}>{F.beyond.headline}</h2>
            <p>{F.beyond.sub}</p>
          </div>
          <div className="grid cols-3">
            {F.beyond.cards.map((c) => (
              <div className="card" key={c.title}>
                <div className={`ico ${c.accent}`} style={{ marginBottom: 12 }}>
                  <Icon name={c.icon} size={22} />
                </div>
                <h3>{c.title}</h3>
                <p style={{ marginTop: 8 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* white-label */}
      <section className="band-navy">
        <div className="wrap narrow">
          <div className="eyebrow">{F.whiteLabel.eyebrow}</div>
          <h2 style={{ marginTop: 8 }}>{F.whiteLabel.headline}</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            {F.whiteLabel.body}
          </p>

          {/* the visual point: their brand on top, ours nowhere */}
          <div
            style={{
              marginTop: 28,
              background: "#fff",
              borderRadius: 14,
              overflow: "hidden",
              maxWidth: 420,
            }}
          >
            <div
              style={{
                background: "var(--card-alt)",
                padding: "18px 20px",
                borderBottom: "3px solid var(--gold)",
              }}
            >
              <div
                style={{
                  fontSize: 11.5,
                  fontWeight: 800,
                  letterSpacing: ".16em",
                  color: "var(--muted)",
                }}
              >
                YOUR BRAND
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "var(--navy-ink)",
                  marginTop: 4,
                  letterSpacing: "-.02em",
                }}
              >
                Owner Briefing
              </div>
            </div>
            <div style={{ padding: "18px 20px" }}>
              <div style={{ height: 8, borderRadius: 4, background: "var(--card-alt)", width: "85%" }} />
              <div style={{ height: 8, borderRadius: 4, background: "var(--card-alt)", width: "60%", marginTop: 9 }} />
              <div style={{ height: 8, borderRadius: 4, background: "var(--card-alt)", width: "72%", marginTop: 9 }} />
              <div
                style={{
                  marginTop: 16,
                  paddingTop: 14,
                  borderTop: "1px solid var(--line)",
                  fontSize: 11.5,
                  color: "var(--muted)",
                  fontStyle: "italic",
                }}
              >
                Great Path stays behind the curtain.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="band-dark">
        <div className="wrap narrow" style={{ textAlign: "center" }}>
          <h2>{F.cta.headline}</h2>
          <p className="lead" style={{ marginTop: 14 }}>
            {F.cta.sub}
          </p>
          <div className="btn-row" style={{ marginTop: 26, justifyContent: "center" }}>
            <a href={BRAND.bookingUrl} className="btn btn-gold btn-lg">
              {F.cta.button}
            </a>
            <Link href="/examples" className="btn btn-ghost-light">
              See an example briefing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
