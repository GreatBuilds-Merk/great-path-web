// ============================================================================
// /pricing — PUBLIC
//
// The table shows dollar RANGES only. The underlying percentages are internal
// (RATES in lib/brand.js) — the note under the table explains the mechanic in
// one sentence, and anything more detailed gets fielded on a call.
// ============================================================================

import Link from "next/link";
import {
  BRAND,
  REVENUE_BANDS,
  TIERS,
  OTHER_PRICING,
  BILLING_NOTES,
  PRICING_NOTE,
  REPRICING_NOTE,
  rangeLabel,
  tierSetup,
  money,
} from "@/lib/brand";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Pricing",
  description:
    "What each tier includes, what it costs, and how the price scales with your business.",
};

export default function Pricing() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            Pricing
          </div>
          <h1 style={{ marginTop: 12 }}>Priced to the size of your business.</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Fortune 500 technology and insight, at small business pricing. One flat price for the
            engine on its own. For the advised tiers, a rate that fits the business and
            improves as you grow.
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
              The difference between them is how much human sits on top of it, and how deep the
              analysis goes.
            </p>
          </div>

          <div className="grid cols-3">
            {TIERS.map((t) => (
              <div className={`card price-card${t.highlight ? " featured" : ""}`} key={t.id}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                  {t.highlight && <span className="badge">Most popular</span>}
                </div>

                <h3>{t.name}</h3>
                <p className="small" style={{ marginTop: 4 }}>
                  {t.tagline}
                </p>

                <div className="price" style={{ margin: "14px 0 6px", fontSize: 38 }}>
                  {t.flatMonthly ? (
                    <>
                      {money(t.flatMonthly)}
                      <small> /mo</small>
                    </>
                  ) : (
                    <>
                      {rangeLabel(t.id, "b1")}
                      <small> +/mo</small>
                    </>
                  )}
                </div>
                <p className="small" style={{ marginBottom: 12 }}>
                  {t.flatMonthly ? t.note : "Scales with your revenue. See the table below."}
                </p>

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
                  Setup{" "}
                  {t.flatSetup
                    ? money(t.flatSetup)
                    : `${money(tierSetup(t.id, "b1"))} – ${money(tierSetup(t.id, "b4"))}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* the band table */}
      <section className="band-cool">
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
                      const label = rangeLabel(t.id, b.id);
                      const setup = tierSetup(t.id, b.id);
                      return (
                        <td key={t.id} style={{ padding: "13px 16px" }}>
                          {label === "Custom" ? (
                            <span style={{ color: "var(--muted)" }}>Custom</span>
                          ) : (
                            <>
                              <span style={{ fontWeight: 700, whiteSpace: "nowrap" }}>{label}</span>
                              <span style={{ color: "var(--muted)" }}>/mo</span>
                              {setup && (
                                <>
                                  <br />
                                  <span className="small">setup {money(setup)}</span>
                                </>
                              )}
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
            <p style={{ fontSize: 15.5, color: "var(--navy-ink)", fontWeight: 600 }}>
              {PRICING_NOTE}
            </p>
            <p style={{ fontSize: 15, marginTop: 10, color: "var(--ink)" }}>{REPRICING_NOTE}</p>
          </div>

          <p className="small" style={{ marginTop: 14 }}>
            Annual prepay saves about 20%. Setup is often reduced or waived when you bundle across
            roles.
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
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    color: "var(--navy)",
                    fontSize: 26,
                    margin: "8px 0 10px",
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
      <section className="band-cool">
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
                Nothing changes mid-year. We revisit your rate at your one-year mark. Increases use
                a twenty-four month average, decreases the last twelve.
              </p>
            </div>
            <div>
              <h3>Do I need new software?</h3>
              <p style={{ marginTop: 8, color: "var(--muted)" }}>
                No. We connect the tools you already use. Setup covers building that connection and
                your reporting. There&apos;s nothing new to buy.
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
