// ============================================================================
// /pricing — PRIVATE QUOTE SHEET
//
// This page is deliberately NOT in the nav or footer. It's the URL you send to
// a live prospect after a call, the same way /pricing-1 worked on Squarespace.
// To make pricing public, add it back to NAV in lib/brand.js — nothing here
// needs to change.
// ============================================================================

import Link from "next/link";
import {
  BRAND,
  REVENUE_BANDS,
  TIERS,
  OTHER_PRICING,
  BILLING_NOTES,
  money,
} from "@/lib/brand";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Pricing",
  description: "Pricing that scales with your business.",
  robots: { index: false, follow: false },
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
                {t.highlight && (
                  <span className="badge" style={{ marginBottom: 12 }}>
                    Flagship
                  </span>
                )}
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
              </div>
            ))}
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

          <p className="small" style={{ marginTop: 14 }}>
            Setup works out to roughly two months of the + Insights rate in every band. Annual prepay
            saves about 20%. Setup is often reduced or waived when you bundle across roles.
          </p>
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
      <section className="band-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Good to know</div>
            <h2 style={{ marginTop: 8 }}>How billing works.</h2>
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
