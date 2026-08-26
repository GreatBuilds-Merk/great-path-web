import Link from "next/link";
import {
  BRAND,
  HERO,
  TOOLS,
  PROBLEM,
  HOW_IT_WORKS,
  DIFFERENCE,
  PATHS,
  WHAT_CHANGES,
  PROOF,
  TIERS,
  FAQ,
  FOUNDER,
} from "@/lib/brand";
import { EXAMPLES } from "@/lib/examples";
import Icon from "@/components/Icon";
import BriefMockup from "@/components/BriefMockup";

export default function Home() {
  const flagship = PATHS.find((p) => p.flagship);
  const others = PATHS.filter((p) => !p.flagship && p.slug !== "ai-readiness");

  return (
    <>
      {/* 1 — HERO ---------------------------------------------------------- */}
      <section className="band-dark" style={{ paddingTop: 44 }}>
        <div className="wrap">
          <div className="hero-grid" style={{ display: "grid", gap: 36, alignItems: "center" }}>
            <div>
              <div className="eyebrow" style={{ color: "var(--gold)" }}>
                {HERO.eyebrow}
              </div>
              <h1 style={{ marginTop: 14 }}>{HERO.headline}</h1>
              <p className="lead" style={{ marginTop: 16, maxWidth: 540 }}>
                {HERO.sub}
              </p>

              <div className="btn-row" style={{ marginTop: 26 }}>
                <a href={BRAND.bookingUrl} className="btn btn-gold btn-lg">
                  Book a free discovery call
                </a>
                <a href="#how" className="btn btn-ghost-light btn-lg">
                  See how it works
                </a>
              </div>

              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 20px",
                  marginTop: 26,
                  fontSize: 13.5,
                  color: "var(--on-dark-muted)",
                }}
              >
                {HERO.trust.map((t, i) => (
                  <li key={t} style={{ display: "flex", gap: 7, alignItems: "center" }}>
                    <span style={{ color: "var(--gold)" }}>
                      <Icon name="check" size={15} stroke={3} />
                    </span>
                    <span style={i === HERO.trust.length - 1 ? { fontWeight: 700, color: "#fff" } : undefined}>
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <BriefMockup />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — TOOLS STRIP --------------------------------------------------- */}
      <section style={{ padding: "34px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="small" style={{ marginBottom: 16 }}>
            Works with the tools you already run your business on
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px 30px",
              fontWeight: 700,
              fontSize: 15,
              color: "var(--muted)",
            }}
          >
            {TOOLS.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — THE PROBLEM --------------------------------------------------- */}
      <section className="band-cool">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{PROBLEM.eyebrow}</div>
            <h2 style={{ marginTop: 8 }}>{PROBLEM.headline}</h2>
            <p>{PROBLEM.sub}</p>
          </div>
          <div className="grid cols-3">
            {PROBLEM.cards.map((c, i) => (
              <div className="card" key={c.title}>
                <div
                  className={`ico ${["rust", "gold", "teal"][i % 3]}`}
                  style={{ marginBottom: 12 }}
                >
                  <Icon name={c.icon} size={22} />
                </div>
                <h3>{c.title}</h3>
                <p style={{ marginTop: 8 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — HOW IT WORKS -------------------------------------------------- */}
      <section id="how" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{HOW_IT_WORKS.eyebrow}</div>
            <h2 style={{ marginTop: 8 }}>{HOW_IT_WORKS.headline}</h2>
            <p>{HOW_IT_WORKS.sub}</p>
          </div>

          <div className="grid cols-3">
            {HOW_IT_WORKS.steps.map((s) => (
              <div className="card step" key={s.n}>
                <span className="n">{s.n}</span>
                <h3>{s.title}</h3>
                <p style={{ marginTop: 8 }}>{s.body}</p>
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
            }}
          >
            {HOW_IT_WORKS.flywheel}
          </p>

          <div className="btn-row" style={{ marginTop: 26 }}>
            <a href={BRAND.bookingUrl} className="btn btn-primary btn-lg">
              Book a free discovery call
            </a>
          </div>
          <p className="small" style={{ marginTop: 10 }}>
            {HOW_IT_WORKS.ctaNote}
          </p>
        </div>
      </section>

      {/* 5 — WHY DIFFERENT ------------------------------------------------- */}
      <section className="band-navy">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{DIFFERENCE.eyebrow}</div>
            <h2 style={{ marginTop: 8 }}>{DIFFERENCE.headline}</h2>
            <p>{DIFFERENCE.sub}</p>
          </div>

          <p
            style={{
              fontSize: "clamp(22px,3.6vw,30px)",
              fontWeight: 800,
              color: "var(--gold)",
              letterSpacing: "-.02em",
              borderLeft: "4px solid var(--gold)",
              paddingLeft: 18,
              margin: "0 0 32px",
            }}
          >
            “{DIFFERENCE.quote}”
          </p>

          <div className="grid cols-3">
            {DIFFERENCE.cards.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p style={{ marginTop: 8 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — THE PATHS ----------------------------------------------------- */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Our Paths</div>
            <h2 style={{ marginTop: 8 }}>Find the path that fits where you are.</h2>
            <p>
              One engine, five ways to put it to work. Start with the flagship — or jump straight
              to what you need today.
            </p>
          </div>

          {flagship && (
            <Link
              href={`/paths/${flagship.slug}`}
              className="card path-card"
              style={{
                borderColor: "var(--gold)",
                borderWidth: 2,
                marginBottom: 18,
                "--accent": "var(--gold)",
              }}
            >
              <div className={`ico ${flagship.accent}`} style={{ marginBottom: 12 }}>
                <Icon name={flagship.icon} size={24} />
              </div>
              <span className="badge">{flagship.badge}</span>
              <h3 style={{ fontSize: "clamp(21px,3vw,26px)", marginTop: 6 }}>
                The {flagship.name} Path
              </h3>
              <p>{flagship.promise}</p>
              <span className="more">
                Explore this Path <Icon name="arrow" size={15} />
              </span>
            </Link>
          )}

          <div className="grid cols-4">
            {others.map((p) => (
              <Link
                href={`/paths/${p.slug}`}
                className="card path-card"
                key={p.slug}
                style={{ "--accent": `var(--${p.accent})` }}
              >
                <div className={`ico ${p.accent}`} style={{ marginBottom: 10 }}>
                  <Icon name={p.icon} size={22} />
                </div>
                <span className="tag">{p.badge}</span>
                <h3>The {p.name} Path</h3>
                <p>{p.short}</p>
                <span className="more">
                  Explore <Icon name="arrow" size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — WHAT CHANGES -------------------------------------------------- */}
      <section className="band-warm">
        <div className="wrap narrow">
          <div className="eyebrow">{WHAT_CHANGES.eyebrow}</div>
          <h2 style={{ marginTop: 8 }}>{WHAT_CHANGES.headline}</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            {WHAT_CHANGES.sub}
          </p>
          <ul className="fit-list fit-yes" style={{ marginTop: 24 }}>
            {WHAT_CHANGES.points.map((t) => (
              <li key={t}>
                <span className="mk">
                  <Icon name="check" size={17} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 — PROOF --------------------------------------------------------- */}
      <section className="band-navy">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{PROOF.eyebrow}</div>
            <h2 style={{ marginTop: 8 }}>{PROOF.headline}</h2>
          </div>

          <div className="grid cols-2">
            {PROOF.cases.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: 12,
                    margin: "18px 0",
                    paddingBottom: 18,
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <div className="stat-num">{s.value}</div>
                      <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 3, lineHeight: 1.3 }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8b — EXAMPLES ----------------------------------------------------- */}
      <section className="band-cool">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Examples</div>
            <h2 style={{ marginTop: 8 }}>This is what shows up every month.</h2>
            <p>
              Two sample briefings built to show the format, and one from a real client whose name
              and logo were changed at their request.
            </p>
          </div>

          <div className="grid cols-3">
            {EXAMPLES.map((e) => (
              <Link href={`/examples/${e.slug}`} className="card path-card" key={e.slug}>
                <span
                  className="tag"
                  style={{ color: e.real ? "var(--gold-deep)" : "var(--muted)" }}
                >
                  {e.real ? "Real client" : "Sample"} · {e.meta.path} Path
                </span>
                <h3>{e.company.short}</h3>
                <p className="small" style={{ marginTop: -2 }}>
                  {e.meta.industry}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    marginTop: 14,
                    paddingTop: 14,
                    borderTop: "1px solid var(--line)",
                  }}
                >
                  {e.kpis.slice(0, 3).map((k) => (
                    <div key={k.label} style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-.02em" }}>
                        {k.value}
                      </div>
                      <div
                        style={{
                          fontSize: 10.5,
                          color: "var(--muted)",
                          marginTop: 2,
                          lineHeight: 1.25,
                        }}
                      >
                        {k.label}
                      </div>
                    </div>
                  ))}
                </div>
                <span className="more">
                  Read the full briefing <Icon name="arrow" size={15} />
                </span>
              </Link>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: 24 }}>
            <Link href="/examples" className="btn btn-primary">
              See all the example briefings
            </Link>
          </div>
        </div>
      </section>

      {/* 9 — FREE TOOLS ---------------------------------------------------- */}
      <section>
        <div className="wrap">
          <div
            className="card"
            style={{ borderColor: "var(--gold)", borderWidth: 2 }}
          >
            <div className="eyebrow">Free · no obligation</div>
            <h2 style={{ marginTop: 8, fontSize: "clamp(23px,3.6vw,30px)" }}>
              Not sure where you stand?
            </h2>
            <p style={{ marginTop: 10, color: "var(--muted)", maxWidth: 620 }}>
              Take the AI Readiness Audit for a personalized score and three specific next steps.
              Or find your position on the path in sixty seconds — seasonality included, because a
              straight line lies to most businesses.
            </p>
            <div className="btn-row" style={{ marginTop: 20 }}>
              <Link href="/tools/ai-readiness-audit" className="btn btn-gold btn-lg">
                Take the free audit
              </Link>
              <Link href="/tools/where-are-you" className="btn btn-ghost">
                Find your position
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — PRICING TEASER -----------------------------------------------
          No numbers here on purpose. Pricing is quoted privately — the /pricing
          page exists but is unlinked. See the NOTE above NAV in lib/brand.js. */}
      <section className="band-cool">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Pricing</div>
            <h2 style={{ marginTop: 8 }}>Priced to the size of your business.</h2>
            <p>
              Fortune 500 technology and insight, at small business pricing. Your rate is set from
              your revenue — so as we help you grow, your price never spikes.
            </p>
          </div>

          <div className="grid cols-3">
            {TIERS.map((t) => (
              <div className={`card price-card${t.highlight ? " featured" : ""}`} key={t.id}>
                {t.highlight && (
                  <span className="badge" style={{ marginBottom: 10 }}>
                    Flagship
                  </span>
                )}
                <h3>{t.name}</h3>
                <p className="small" style={{ marginTop: 4, marginBottom: 10 }}>
                  {t.tagline}
                </p>
                <p style={{ fontSize: 14.5 }}>{t.summary}</p>
              </div>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: 24 }}>
            <a href={BRAND.bookingUrl} className="btn btn-primary">
              Book a call for your exact number
            </a>
          </div>
        </div>
      </section>

      {/* 11 — FOUNDER ------------------------------------------------------ */}
      <section>
        <div className="wrap narrow">
          <div className="eyebrow">Why Great Path exists</div>
          <blockquote
            style={{
              fontSize: "clamp(18px,2.8vw,23px)",
              lineHeight: 1.5,
              color: "var(--navy-ink)",
              fontWeight: 600,
              borderLeft: "4px solid var(--gold)",
              paddingLeft: 20,
              margin: "18px 0 16px",
            }}
          >
            “{FOUNDER.quote}”
          </blockquote>
          <p style={{ fontWeight: 700 }}>
            — {FOUNDER.name}, <span style={{ color: "var(--muted)", fontWeight: 500 }}>{FOUNDER.title}</span>
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 10px",
              marginTop: 24,
            }}
          >
            {FOUNDER.values.map((v) => (
              <span key={v} className="badge">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — FAQ ---------------------------------------------------------- */}
      <section className="band-cool">
        <div className="wrap narrow">
          <div className="eyebrow">Questions</div>
          <h2 style={{ marginTop: 8 }}>What owners usually ask</h2>
          <div className="stack-lg" style={{ marginTop: 26 }}>
            {FAQ.map((f) => (
              <details
                key={f.q}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-sm)",
                  padding: "16px 18px",
                }}
              >
                <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 16 }}>
                  {f.q}
                </summary>
                <p style={{ marginTop: 10, color: "var(--muted)" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — FINAL CTA ---------------------------------------------------- */}
      <section className="band-dark">
        <div className="wrap narrow" style={{ textAlign: "center" }}>
          <h2>Ready to see your numbers work for you?</h2>
          <p className="lead" style={{ marginTop: 14 }}>
            One short call. We'll show you the insight hiding in your
            business — and the first moves to grow it.
          </p>
          <div className="btn-row" style={{ marginTop: 26, justifyContent: "center" }}>
            <a href={BRAND.bookingUrl} className="btn btn-gold btn-lg">
              Book my free discovery call
            </a>
          </div>
          <p className="small" style={{ marginTop: 14, color: "var(--on-dark-muted)" }}>
            No pitch deck. No obligation. Just a clear look at where your data can take you.
          </p>
        </div>
      </section>
    </>
  );
}
