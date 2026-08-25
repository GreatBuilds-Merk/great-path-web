import Link from "next/link";
import { BRAND, PATHS, PRICING, HOW_IT_WORKS, FIT } from "@/lib/brand";
import Icon from "@/components/Icon";
import OnThePath from "@/components/OnThePath";

export default function Home() {
  const featured = PATHS.filter((p) => p.featured);
  const rest = PATHS.filter((p) => !p.featured);

  return (
    <>
      {/* 1 — HERO ---------------------------------------------------------- */}
      <section className="band-dark" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gap: 36,
              gridTemplateColumns: "1fr",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            <div>
              <div className="eyebrow" style={{ color: "var(--gold)" }}>
                {BRAND.tagline}
              </div>
              <h1 style={{ marginTop: 14 }}>
                Know exactly where your business is on the road to where you want it.
              </h1>
              <p className="lead" style={{ marginTop: 16, maxWidth: 520 }}>
                {BRAND.promise}
              </p>
              <div className="btn-row" style={{ marginTop: 26 }}>
                <Link href={BRAND.bookingUrl} className="btn btn-gold btn-lg">
                  Book a Call
                </Link>
                <Link href="/tools/where-are-you" className="btn btn-ghost-light btn-lg">
                  See where you are — free
                </Link>
              </div>
            </div>

            <OnThePath dark />
          </div>
        </div>
      </section>

      {/* 2 — THE PROBLEM --------------------------------------------------- */}
      <section>
        <div className="wrap narrow">
          <h2>Your numbers already exist. Nobody turns them into a decision.</h2>
          <div className="stack" style={{ marginTop: 22 }}>
            <p className="lead">
              They're in your accounting software. They're in your point of sale. They're in a
              spreadsheet someone built three years ago.
            </p>
            <p className="lead">
              So at the end of every month you get reports that tell you what happened, and none
              that tell you what to do about it.
            </p>
            <p className="lead" style={{ color: "var(--navy-ink)", fontWeight: 600 }}>
              That's the gap we close.
            </p>
          </div>
        </div>
      </section>

      {/* 3 — HOW IT WORKS -------------------------------------------------- */}
      <section className="band-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How it works</div>
            <h2 style={{ marginTop: 8 }}>Three steps, then a rhythm.</h2>
          </div>
          <div className="grid cols-3">
            {HOW_IT_WORKS.map((s) => (
              <div className="card step" key={s.n}>
                <span className="n">{s.n}</span>
                <h3>{s.title}</h3>
                <p style={{ marginTop: 8 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — THE PATHS ----------------------------------------------------- */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">The Paths</div>
            <h2 style={{ marginTop: 8 }}>Start by choosing where you're going.</h2>
            <p>
              Every Path has its own destination, its own set of numbers, and its own actions.
              We'll help you pick the one that fits.
            </p>
          </div>

          <div className="grid cols-3">
            {featured.map((p) => (
              <Link href={`/paths/${p.slug}`} className="card path-card" key={p.slug}>
                <div className="ico">
                  <Icon name={p.icon} size={22} />
                </div>
                <span className="tag">{p.tagline}</span>
                <h3>{p.name}</h3>
                <p>{p.short}</p>
                <span className="more">
                  Explore this Path <Icon name="arrow" size={15} />
                </span>
              </Link>
            ))}
          </div>

          <div className="grid cols-3" style={{ marginTop: 18 }}>
            {rest.map((p) => (
              <Link href={`/paths/${p.slug}`} className="card path-card" key={p.slug}>
                <div className="ico">
                  <Icon name={p.icon} size={22} />
                </div>
                <span className="tag">{p.tagline}</span>
                <h3>{p.name}</h3>
                <p>{p.short}</p>
                <span className="more">
                  Explore this Path <Icon name="arrow" size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — SEE A REAL ONE ------------------------------------------------ */}
      <section className="band-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Examples</div>
            <h2 style={{ marginTop: 8 }}>This is what shows up every month.</h2>
            <p>
              Real briefings from real businesses. Names and identifying details changed at the
              owners' request — the numbers and the analysis are theirs.
            </p>
          </div>

          {/* TODO: replace with <BriefingPreview /> once the renderer lands (Track B, week 3) */}
          <div className="placeholder">
            Example briefing previews go here — Summit Mechanical, Clark Custom Homes, and two
            more. Built in week 3 from the shared briefing renderer.
          </div>

          <div className="btn-row" style={{ marginTop: 24 }}>
            <Link href="/examples" className="btn btn-primary">
              See the example briefings
            </Link>
          </div>
        </div>
      </section>

      {/* 6 — FREE TOOL ----------------------------------------------------- */}
      <section>
        <div className="wrap">
          <div
            className="card"
            style={{
              display: "grid",
              gap: 20,
              alignItems: "center",
              borderColor: "var(--gold)",
              borderWidth: 2,
            }}
          >
            <div>
              <div className="eyebrow">Free, no signup</div>
              <h2 style={{ marginTop: 8, fontSize: "clamp(23px,3.6vw,30px)" }}>
                Where are you on the path right now?
              </h2>
              <p style={{ marginTop: 10, color: "var(--muted)" }}>
                Five questions, sixty seconds. We'll show you your position, whether you're on
                pace for your goal, and where you'll land if nothing changes. Seasonality
                included — because a straight line lies to most businesses.
              </p>
              <div className="btn-row" style={{ marginTop: 20 }}>
                <Link href="/tools/where-are-you" className="btn btn-gold btn-lg">
                  Find your position
                </Link>
                <Link href="/tools/data-template" className="btn btn-ghost">
                  Get the free data template
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — PRICING TEASER ------------------------------------------------ */}
      <section className="band-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Pricing</div>
            <h2 style={{ marginTop: 8 }}>Set up once. Then it's a monthly rhythm.</h2>
          </div>

          <div className="grid cols-4">
            {PRICING.map((t) => (
              <div className={`card price-card${t.highlight ? " featured" : ""}`} key={t.id}>
                <h3>{t.name}</h3>
                <div className="price" style={{ margin: "12px 0 6px" }}>
                  {t.price === null ? (
                    "Quoted"
                  ) : (
                    <>
                      ${t.price}
                      <small> /{t.cadence === "month" ? "mo" : "one-time"}</small>
                    </>
                  )}
                </div>
                <p style={{ fontSize: 14.5 }}>{t.summary}</p>
              </div>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: 24 }}>
            <Link href="/pricing" className="btn btn-primary">
              See what's included
            </Link>
          </div>
        </div>
      </section>

      {/* 8 — FIT ----------------------------------------------------------- */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Honest fit</div>
            <h2 style={{ marginTop: 8 }}>This isn't for everyone.</h2>
          </div>

          <div className="grid cols-2">
            <div className="card">
              <h3 style={{ color: "var(--ahead)" }}>It's a good fit if</h3>
              <ul className="fit-list fit-yes" style={{ marginTop: 10 }}>
                {FIT.yes.map((t) => (
                  <li key={t}>
                    <span className="mk">
                      <Icon name="check" size={17} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 style={{ color: "var(--behind)" }}>It's probably not if</h3>
              <ul className="fit-list fit-no" style={{ marginTop: 10 }}>
                {FIT.no.map((t) => (
                  <li key={t}>
                    <span className="mk">
                      <Icon name="x" size={17} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — DAN ----------------------------------------------------------- */}
      <section className="band-alt">
        <div className="wrap narrow">
          <div style={{ display: "grid", gap: 22, justifyItems: "start" }}>
            {/* TODO: swap for Dan's headshot in /public/brand/dan.jpg */}
            <div
              style={{
                width: 104,
                height: 104,
                borderRadius: "50%",
                background: "var(--navy)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gold)",
                fontWeight: 800,
                fontSize: 32,
              }}
              aria-label="Photo placeholder"
            >
              DM
            </div>
            <div>
              <div className="eyebrow">Who you're working with</div>
              <h2 style={{ marginTop: 8 }}>You're hiring a person, not a platform.</h2>
              <p className="lead" style={{ marginTop: 14 }}>
                {/* TODO: replace with Dan's real bio — three sentences, plain language. */}
                Placeholder bio. Three sentences about who you are, the businesses you've worked
                in, and why you built this. Small business owners buy the person before they buy
                the product, so this is worth writing carefully.
              </p>
              <div className="btn-row" style={{ marginTop: 20 }}>
                <Link href="/about" className="btn btn-ghost">
                  More about Great Path
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — FINAL CTA ---------------------------------------------------- */}
      <section className="band-dark">
        <div className="wrap narrow" style={{ textAlign: "center" }}>
          <h2>Pick a Path. Set the destination. Start moving.</h2>
          <p className="lead" style={{ marginTop: 14 }}>
            One call to see whether this fits your business. No deck, no pitch.
          </p>
          <div
            className="btn-row"
            style={{ marginTop: 26, justifyContent: "center" }}
          >
            <Link href={BRAND.bookingUrl} className="btn btn-gold btn-lg">
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
