import Link from "next/link";
import { ABOUT, FOUNDER, BRAND } from "@/lib/brand";
import Icon from "@/components/Icon";

export const metadata = {
  title: "About",
  description: ABOUT.sub,
};

export default function About() {
  return (
    <>
      {/* hero */}
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            {ABOUT.eyebrow}
          </div>
          <h1 style={{ marginTop: 12 }}>{ABOUT.headline}</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            {ABOUT.sub}
          </p>
        </div>
      </section>

      {/* the story */}
      <section>
        <div className="wrap narrow">
          <div className="eyebrow">The story</div>
          <div className="stack" style={{ marginTop: 18 }}>
            {ABOUT.story.map((para) => (
              <p className="lead" key={para.slice(0, 30)} style={{ color: "var(--ink)" }}>
                {para}
              </p>
            ))}
          </div>

          <blockquote
            style={{
              fontSize: "clamp(20px,3.2vw,27px)",
              fontWeight: 700,
              lineHeight: 1.4,
              color: "var(--navy)",
              letterSpacing: "-.02em",
              borderLeft: "4px solid var(--gold)",
              paddingLeft: 20,
              margin: "30px 0",
            }}
          >
            “{ABOUT.storyQuote}”
          </blockquote>

          <p className="lead" style={{ color: "var(--ink)" }}>
            {ABOUT.storyClose}
          </p>
        </div>
      </section>

      {/* the name */}
      <section className="band-alt">
        <div className="wrap narrow">
          <div className="eyebrow">The name</div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              margin: "20px 0 24px",
            }}
          >
            {ABOUT.name.letters.map((l) => (
              <span
                key={l}
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 12,
                  background: "var(--navy)",
                  color: "var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: 0,
                }}
                aria-hidden="true"
              >
                {l}
              </span>
            ))}
          </div>

          <p className="lead" style={{ color: "var(--ink)", maxWidth: 640 }}>
            {ABOUT.name.body}
          </p>
        </div>
      </section>

      {/* the difference */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">What sets Great Path apart</div>
            <h2 style={{ marginTop: 8 }}>Structured Paths. Not one-size-fits-all programs.</h2>
          </div>

          <div className="grid cols-2">
            {ABOUT.difference.map((d) => (
              <div className="card" key={d.title}>
                <h3>{d.title}</h3>
                <p style={{ marginTop: 10 }}>{d.body}</p>

                {d.points.length > 0 && (
                  <ul className="fit-list fit-yes" style={{ marginTop: 12 }}>
                    {d.points.map((pt) => (
                      <li key={pt} style={{ fontSize: 14.5 }}>
                        <span className="mk">
                          <Icon name="check" size={16} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}

                <p
                  style={{
                    marginTop: 14,
                    paddingTop: 14,
                    borderTop: "1px solid var(--line)",
                    fontWeight: 700,
                    color: "var(--navy)",
                    fontSize: 15,
                  }}
                >
                  {d.close}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* values */}
      <section className="band-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">What we stand for</div>
            <h2 style={{ marginTop: 8 }}>The values behind every path.</h2>
          </div>

          <div className="grid cols-4">
            {ABOUT.values.map((v) => (
              <div className="card step" key={v.n}>
                <span className="n">{v.n}</span>
                <h3 style={{ fontSize: 17 }}>{v.title}</h3>
                <p style={{ marginTop: 8 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* founder note */}
      <section>
        <div className="wrap narrow">
          <div className="eyebrow">A note from the founder</div>

          <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginTop: 20 }}>
            {/* TODO: swap for Dan's headshot at /public/brand/dan.jpg */}
            <div
              style={{
                width: 76,
                height: 76,
                flex: "0 0 auto",
                borderRadius: "50%",
                background: "var(--navy)",
                color: "var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 24,
              }}
              aria-label="Photo placeholder"
            >
              DM
            </div>

            <div>
              <p className="lead" style={{ color: "var(--ink)" }}>
                {ABOUT.founderNote}
              </p>
              <p style={{ fontWeight: 700, marginTop: 16 }}>
                {FOUNDER.name},{" "}
                <span style={{ color: "var(--muted)", fontWeight: 500 }}>{FOUNDER.title}</span>
              </p>
            </div>
          </div>

          <div className="btn-row" style={{ marginTop: 28 }}>
            <a href={BRAND.bookingUrl} className="btn btn-primary btn-lg">
              Book a free discovery call
            </a>
            <Link href="/paths" className="btn btn-ghost">
              See the Paths
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
