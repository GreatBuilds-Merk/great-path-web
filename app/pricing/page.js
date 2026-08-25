import Link from "next/link";
import { PRICING, BRAND } from "@/lib/brand";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Pricing",
  description: "Set up once, then a monthly rhythm. $199 setup, $49/month.",
};

export default function Pricing() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            Pricing
          </div>
          <h1 style={{ marginTop: 12 }}>Set up once. Then it's a monthly rhythm.</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Setup is where a human does the thinking — choosing the Path, setting the destination,
            and mapping your data. After that, the monthly part runs on it.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="grid cols-4">
            {PRICING.map((t) => (
              <div className={`card price-card${t.highlight ? " featured" : ""}`} key={t.id}>
                {t.badge && (
                  <span className="badge" style={{ marginBottom: 12 }}>
                    {t.badge}
                  </span>
                )}
                <h3>{t.name}</h3>
                <div className="price" style={{ margin: "12px 0 8px" }}>
                  {t.price === null ? (
                    "Quoted"
                  ) : (
                    <>
                      ${t.price}
                      <small> /{t.cadence === "month" ? "mo" : "one-time"}</small>
                    </>
                  )}
                </div>
                <p style={{ fontSize: 14.5, minHeight: 44 }}>{t.summary}</p>

                <ul className="includes" style={{ margin: "14px 0 18px" }}>
                  {t.includes.map((i) => (
                    <li key={i}>
                      <span className="mk">
                        <Icon name="check" size={16} />
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>

                {t.note && (
                  <p className="small" style={{ marginBottom: 12 }}>
                    {t.note}
                  </p>
                )}

                <Link
                  href={t.cta.href}
                  className={`btn btn-block ${t.highlight ? "btn-gold" : "btn-ghost"}`}
                  style={{ marginTop: "auto" }}
                >
                  {t.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-alt">
        <div className="wrap narrow">
          <h2>Common questions</h2>
          <div className="stack-lg" style={{ marginTop: 24 }}>
            <div>
              <h3>Why is there a setup fee?</h3>
              <p style={{ marginTop: 8, color: "var(--muted)" }}>
                Because the setup is the part that actually requires judgment. Choosing the right
                Path, setting a destination that's ambitious but reachable, and picking the
                numbers that measure it — that's advisory work, and it's what makes every month
                after it useful.
              </p>
            </div>
            <div>
              <h3>Do I need new software?</h3>
              <p style={{ marginTop: 8, color: "var(--muted)" }}>
                No. You fill one template with figures your business already produces. No
                integration project, no migration, no changing how you work.
              </p>
            </div>
            <div>
              <h3>Can I cancel?</h3>
              <p style={{ marginTop: 8, color: "var(--muted)" }}>
                Yes, monthly. The setup fee is one-time and non-refundable once the working
                session happens, because that's real work delivered.
              </p>
            </div>
          </div>

          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link href={BRAND.bookingUrl} className="btn btn-primary btn-lg">
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
