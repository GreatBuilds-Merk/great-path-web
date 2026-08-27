import Link from "next/link";
import { BRAND, GP_DIFFERENCE, DIFFERENCE } from "@/lib/brand";
import Icon from "@/components/Icon";

const D = GP_DIFFERENCE;

export const metadata = {
  title: "The Great Path Difference",
  description: D.hero.sub,
};

export default function TheDifference() {
  return (
    <>
      {/* hero */}
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            {D.hero.eyebrow}
          </div>
          <h1 style={{ marginTop: 12 }}>{D.hero.headline}</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            {D.hero.sub}
          </p>
        </div>
      </section>

      {/* the honest part — credibility before the argument */}
      <section>
        <div className="wrap narrow">
          <div className="eyebrow">Fair is fair</div>
          <h2 style={{ marginTop: 8 }}>{D.fair.title}</h2>
          <p className="lead" style={{ marginTop: 16, color: "var(--ink)" }}>
            {D.fair.body}
          </p>
          <p className="lead" style={{ marginTop: 14, color: "var(--ink)", fontWeight: 600 }}>
            {D.fair.close}
          </p>
        </div>
      </section>

      {/* the five failures */}
      <section className="band-cool">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">What happens</div>
            <h2 style={{ marginTop: 8 }}>Five things a tool can&apos;t do for you.</h2>
            <p>
              Each one on its own is survivable. Together they&apos;re why the reports pile up
              unread.
            </p>
          </div>

          <div className="stack">
            {D.failures.map((f) => (
              <div
                className="card path-card"
                key={f.n}
                style={{ "--accent": `var(--${f.accent})` }}
              >
                <div className="diff-row">
                  <div>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        letterSpacing: ".1em",
                        color: `var(--${f.accent})`,
                      }}
                    >
                      {f.n}
                    </span>
                    <h3 style={{ marginTop: 8, fontSize: "clamp(19px,2.8vw,23px)" }}>{f.title}</h3>
                    <p style={{ marginTop: 10 }}>{f.body}</p>
                  </div>

                  <div className="diff-instead">
                    <div
                      style={{
                        fontSize: 11.5,
                        fontWeight: 800,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--gold-deep)",
                        marginBottom: 8,
                      }}
                    >
                      What we do instead
                    </div>
                    <p style={{ color: "var(--navy-ink)", fontWeight: 500, fontSize: 15.5 }}>
                      {f.instead}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* the one that matters */}
      <section className="band-navy">
        <div className="wrap narrow">
          <div className="eyebrow">{D.challenge.eyebrow}</div>
          <h2 style={{ marginTop: 8 }}>{D.challenge.headline}</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            {D.challenge.body}
          </p>
          <p
            style={{
              marginTop: 22,
              paddingLeft: 20,
              borderLeft: "4px solid var(--gold)",
              fontSize: "clamp(17px,2.4vw,20px)",
              fontWeight: 600,
              color: "var(--gold)",
            }}
          >
            {D.challenge.close}
          </p>
        </div>
      </section>

      {/* the analogy */}
      <section>
        <div className="wrap narrow">
          <p
            style={{
              fontSize: "clamp(20px,3.2vw,28px)",
              fontWeight: 800,
              letterSpacing: "-.02em",
              color: "var(--muted)",
            }}
          >
            {D.analogy.quote}
          </p>
          <p
            style={{
              fontSize: "clamp(22px,3.6vw,32px)",
              fontWeight: 800,
              letterSpacing: "-.02em",
              color: "var(--navy-ink)",
              marginTop: 10,
            }}
          >
            {D.analogy.counter}
          </p>
          <p className="lead" style={{ marginTop: 18 }}>
            {D.analogy.close}
          </p>

          {/* the three positioning cards, reused from the home page */}
          <div className="grid cols-3" style={{ marginTop: 34 }}>
            {DIFFERENCE.cards.map((c) => (
              <div className="card" key={c.title}>
                <h3 style={{ fontSize: 17 }}>{c.title}</h3>
                <p style={{ marginTop: 8 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="band-dark">
        <div className="wrap narrow" style={{ textAlign: "center" }}>
          <h2>{D.cta.headline}</h2>
          <p className="lead" style={{ marginTop: 14 }}>
            {D.cta.sub}
          </p>
          <div className="btn-row" style={{ marginTop: 26, justifyContent: "center" }}>
            <a href={BRAND.bookingUrl} className="btn btn-gold btn-lg">
              Book a call
            </a>
            <Link href="/examples" className="btn btn-ghost-light">
              See a real briefing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
