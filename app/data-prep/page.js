import Link from "next/link";
import { DATA_PREP, BRAND } from "@/lib/brand";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Getting Your Data Ready",
  description: DATA_PREP.sub,
};

export default function DataPrep() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            {DATA_PREP.eyebrow}
          </div>
          <h1 style={{ marginTop: 12 }}>{DATA_PREP.headline}</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            {DATA_PREP.sub}
          </p>
        </div>
      </section>

      {/* why it matters */}
      <section>
        <div className="wrap narrow">
          <h2>{DATA_PREP.why.title}</h2>
          <p className="lead" style={{ marginTop: 16, color: "var(--ink)" }}>
            {DATA_PREP.why.body}
          </p>

          <blockquote
            style={{
              fontSize: "clamp(20px,3.2vw,27px)",
              fontWeight: 800,
              color: "var(--navy)",
              letterSpacing: "-.02em",
              borderLeft: "4px solid var(--gold)",
              paddingLeft: 20,
              margin: "28px 0",
            }}
          >
            “{DATA_PREP.why.quote}”
          </blockquote>

          <p className="lead" style={{ color: "var(--ink)" }}>
            {DATA_PREP.why.close}
          </p>
        </div>
      </section>

      {/* what happens */}
      <section className="band-cool">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">During Path Setup</div>
            <h2 style={{ marginTop: 8 }}>What actually happens to your numbers.</h2>
          </div>

          <div className="grid cols-4">
            {DATA_PREP.steps.map((s) => (
              <div className="card step" key={s.n}>
                <span className="n">{s.n}</span>
                <h3 style={{ fontSize: 17 }}>{s.title}</h3>
                <p style={{ marginTop: 8 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* bring / don't worry */}
      <section>
        <div className="wrap">
          <div className="grid cols-2">
            <div className="card">
              <h3>What we'll look at</h3>
              <ul className="fit-list fit-yes" style={{ marginTop: 12 }}>
                {DATA_PREP.bring.map((b) => (
                  <li key={b}>
                    <span className="mk">
                      <Icon name="check" size={17} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>What you don&apos;t need to fix first</h3>
              <ul className="fit-list fit-yes" style={{ marginTop: 12 }}>
                {DATA_PREP.dontWorry.map((b) => (
                  <li key={b}>
                    <span className="mk" style={{ color: "var(--muted)" }}>
                      <Icon name="check" size={17} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <p className="small" style={{ marginTop: 14 }}>
                If your data is genuinely tangled, that&apos;s what the{" "}
                <Link href="/paths/cleanup" style={{ color: "var(--navy)", fontWeight: 700 }}>
                  Cleanup Path
                </Link>{" "}
                is for — and we&apos;ll tell you honestly if you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* coming soon */}
      <section className="band-warm">
        <div className="wrap narrow">
          <div className="eyebrow">Coming soon</div>
          <h2 style={{ marginTop: 8 }}>Templates and export directions.</h2>
          <p className="lead" style={{ marginTop: 14, color: "var(--ink)" }}>
            {DATA_PREP.comingSoon}
          </p>

          <div className="btn-row" style={{ marginTop: 26 }}>
            <a href={BRAND.bookingUrl} className="btn btn-primary btn-lg">
              Book a call
            </a>
            <Link href="/paths/operator" className="btn btn-ghost">
              See the Operator Path
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
