// ============================================================================
// /pricing — PUBLIC as of 2026-08-25
//
// Shows what you get, what it costs, and the guarantee. The guarantee is the
// reason this page can be public: it turns a price into a risk-free decision.
// ============================================================================

import Link from "next/link";
import {
  BRAND,
  REVENUE_BANDS,
  TIERS,
  OTHER_PRICING,
  BILLING_NOTES,
  GUARANTEE,
  money,
} from "@/lib/brand";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Pricing",
  description: `Pricing that scales with your business. ${GUARANTEE.hook} ${GUARANTEE.headline}`,
};

export default function Pricing() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            Pricing
          </div>
          <h1 style={{ marginTop: 12 }}>Pricing that scales with your business.</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Fortune 500 technology and insight, at small business pricing. Your rate is set from your
            revenue — so as we help you grow, your price never spikes. Every plan starts with a call
            to map the right fit and confirm your exact number.
          </p>
          <div className="btn-row" style={{ marginTop: 26 }}>
            <a href={BRAND.bookingUrl} className="btn btn-gold btn-lg">
              Book a call for your exact quote
            </a>
            <a href="#guarantee" className="btn btn-ghost-light btn-lg">
              {GUARANTEE.hook}
            </a>
          </div>
        </div>
      </section>

      {/* the guarantee — stated before any price, because it changes how the
          prices read */}
      <section className="band-warm">
        <div className="wrap narrow">
          <div className="eyebrow">{GUARANTEE.name}</div>
          <h2 style={{ marginTop: 8 }}>{GUARANTEE.headline}</h2>
          <p className="lead" style={{ marginTop: 16, color: "var(--ink)" }}>
            {GUARANTEE.promise}
          </p>
          <div className="btn-row" style={{ marginTop: 22 }}>
            <a href="#guarantee" className="btn btn-ghost">
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* the three tiers */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">The Operator Path</div>
            <h2 style={{ marginTop: 8 }}>Three tiers. Same engine underneath.</h2>
            <p>
              The difference between them is how much human sits on top of it — and how deep the
              analysis goes.
            </p>
          </div>

          <div className="grid cols-3">
            {TIERS.map((t) => (
              <div className={`card price-card${t.highlight ? " featured" : ""}`} key={t.id}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                  {t.highlight && <span className="badge">Flagship</span>}
                  {t.guaranteed && (
                    <span
                      className="badge"
                      style={{ background: "var(--navy)", color: "#fff" }}
                    >
                      {GUARANTEE.hook}
                    </span>
                  )}
                </div>
                <h3>{t.name}</h3>
                <p className="small" style={{ marginTop: 4 }}>
                  {t.tagline}
                </p>
                <div className="price" style={{ margin: "14px 0 6px", fontSize: 30 }}>
                  {money(t.monthly.b1)}
                  <small> – {money(t.monthly.b4)}/mo</small>
                </div>
                <p style={{ fontSize: 14.5, marginBottom: 14 }}>{t.summary}</p>
                <ul className="includes" style={{ marginBottom: 16 }}>
                  {t.includes.map((i) => (
                    <li key={i}>
                      <span className="mk">
                        <Icon name="check" size={16} />
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="small" style={{ marginTop: "auto" }}>
                  Setup {money(t.setup.b1)} – {money(t.setup.b4)}
                </p>
                {t.guaranteed && (
                  <p
                    style={{
                      marginTop: 12,
                      paddingTop: 12,
                      borderTop: "1px solid var(--line)",
                      fontSize: 13.5,
                      fontWeight: 700,
                      color: "var(--navy)",
                    }}
                  >
                    Covered by {GUARANTEE.name}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* the guarantee in full */}
      <section id="guarantee" className="band-navy" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{GUARANTEE.name}</div>
            <h2 style={{ marginTop: 8 }}>{GUARANTEE.hook}</h2>
            <p>{GUARANTEE.why}</p>
          </div>

          <div className="grid cols-2">
            <div className="card">
              <h3>What you do</h3>
              <p style={{ marginTop: 8 }}>
                Three things. All of them are about showing up — none of them are about
                hitting a number.
              </p>
              <ul className="fit-list fit-yes" style={{ marginTop: 12 }}>
                {GUARANTEE.qualify.map((q) => (
                  <li key={q} style={{ fontSize: 15 }}>
                    <span className="mk">
                      <Icon name="check" size={16} />
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>How it&apos;s measured</h3>
              <p style={{ marginTop: 8 }}>
                Agreed in writing before we start, so there&apos;s a number at the end instead
                of an argument.
              </p>
              <ul className="fit-list fit-yes" style={{ marginTop: 12 }}>
                {GUARANTEE.measured.map((m) => (
                  <li key={m} style={{ fontSize: 15 }}>
                    <span className="mk">
                      <Icon name="check" size={16} />
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            style={{
              marginTop: 22,
              padding: "16px 20px",
              background: "rgba(199,166,90,.14)",
              borderLeft: "3px solid var(--gold)",
              borderRadius: 8,
              fontSize: 15.5,
              color: "var(--on-dark)",
            }}
          >
            {GUARANTEE.honest}
          </p>

          <div style={{ marginTop: 28 }}>
            <h3 style={{ color: "#fff" }}>The details</h3>
            <ul style={{ marginTop: 12 }}>
              {GUARANTEE.finePrint.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    gap: 10,
                    padding: "7px 0",
                    fontSize: 14.5,
                    color: "rgba(238,242,247,.82)",
                  }}
                >
                  <span style={{ color: "var(--gold)", flex: "0 0 auto" }}>·</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* the band table */}
      <section className="band-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Your band</div>
            <h2 style={{ marginTop: 8 }}>Find your revenue, read across.</h2>
          </div>

          <div className="scroll-x">
            <table
              style={{
                width: "100%",
                minWidth: 620,
                borderCollapse: "collapse",
                background: "var(--card)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                fontSize: 14.5,
              }}
            >
              <thead>
                <tr style={{ background: "var(--navy)", color: "#fff", textAlign: "left" }}>
                  <th style={{ padding: "13px 16px", fontWeight: 700 }}>Annual revenue</th>
                  {TIERS.map((t) => (
                    <th key={t.id} style={{ padding: "13px 16px", fontWeight: 700 }}>
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {REVENUE_BANDS.map((b, i) => (
                  <tr
                    key={b.id}
                    style={{
                      borderTop: "1px solid var(--line)",
                      background: i % 2 ? "var(--card-alt)" : "var(--card)",
                    }}
                  >
                    <td style={{ padding: "13px 16px", fontWeight: 700 }}>{b.label}</td>
                    {TIERS.map((t) => {
                      const m = t.monthly[b.id];
                      const s = t.setup[b.id];
                      return (
                        <td key={t.id} style={{ padding: "13px 16px" }}>
                          {m == null ? (
                            <span style={{ color: "var(--muted)" }}>Custom</span>
                          ) : (
                            <>
                              <span style={{ fontWeight: 700 }}>{money(m)}</span>
                              <span style={{ color: "var(--muted)" }}>/mo</span>
                              <br />
                              <span className="small">setup {money(s)}</span>
                            </>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              marginTop: 20,
              padding: "16px 20px",
              background: "rgba(199,166,90,.14)",
              borderLeft: "3px solid var(--gold)",
              borderRadius: 8,
            }}
          >
            <p style={{ fontSize: 15.5, fontWeight: 600, color: "var(--navy-ink)" }}>
              Setup works out to roughly two months of the + Insights rate in every band. Annual
              prepay saves about 20%, and setup is often reduced or waived when you bundle across
              roles.
            </p>
            <p style={{ fontSize: 15, marginTop: 10 }}>
              <a href="#billing" style={{ color: "var(--navy)", fontWeight: 700 }}>
                See below for how a change in your revenue affects your pricing
              </a>{" "}
              <span style={{ color: "var(--muted)" }}>
                — increases and decreases are handled differently, and nothing moves mid-year.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* everything else */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">More ways to work together</div>
            <h2 style={{ marginTop: 8 }}>Priced outside the ladder.</h2>
          </div>

          <div className="grid cols-2">
            {OTHER_PRICING.map((o) => (
              <div className="card" key={o.id}>
                <h3>{o.name}</h3>
                <p
                  style={{
                    fontWeight: 800,
                    color: "var(--navy)",
                    fontSize: 19,
                    margin: "8px 0 10px",
                    letterSpacing: "-.02em",
                  }}
                >
                  {o.line}
                </p>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how billing works */}
      <section className="band-alt" id="billing" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Good to know</div>
            <h2 style={{ marginTop: 8 }}>How billing works.</h2>
            <p>
              Including what happens to your rate when your revenue moves — up or down.
            </p>
          </div>

          <div className="grid cols-3">
            {BILLING_NOTES.map((b) => (
              <div className="card step" key={b.n}>
                <span className="n">{b.n}</span>
                <h3>{b.title}</h3>
                <p style={{ marginTop: 8 }}>{b.body}</p>
              </div>
            ))}
          </div>

          <div className="stack-lg" style={{ marginTop: 40 }}>
            <div>
              <h3>Is there a contract?</h3>
              <p style={{ marginTop: 8, color: "var(--muted)" }}>
                No long-term lock-in. Annual plans run for the year you prepay; monthly plans are
                month-to-month. If it isn&apos;t earning its keep, you can stop.
              </p>
            </div>
            <div>
              <h3>What if my revenue changes mid-year?</h3>
              <p style={{ marginTop: 8, color: "var(--muted)" }}>
                Nothing changes mid-year. We revisit your tier at your one-year mark — increases based
                on your two-year average, decreases based on last year&apos;s change.
              </p>
            </div>
            <div>
              <h3>Do I need new software?</h3>
              <p style={{ marginTop: 8, color: "var(--muted)" }}>
                No. We connect the tools you already use. Setup covers building that connection and
                your reporting — there&apos;s nothing new to buy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band-dark">
        <div className="wrap narrow" style={{ textAlign: "center" }}>
          <h2>Let&apos;s find your exact number.</h2>
          <p className="lead" style={{ marginTop: 14 }}>
            A short call is all it takes to map the right fit and give you a clear, no-obligation
            quote.
          </p>
          <div className="btn-row" style={{ marginTop: 26, justifyContent: "center" }}>
            <a href={BRAND.bookingUrl} className="btn btn-gold btn-lg">
              Book your free call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
