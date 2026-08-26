import Link from "next/link";
import { notFound } from "next/navigation";
import { PATHS, getPath, HOW_IT_WORKS, BRAND } from "@/lib/brand";
import Icon from "@/components/Icon";

// Pre-render all six Path pages at build time.
export function generateStaticParams() {
  return PATHS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getPath(params.slug);
  if (!p) return {};
  return { title: `${p.name} — ${p.tagline}`, description: p.short };
}

export default function PathPage({ params }) {
  const p = getPath(params.slug);
  if (!p) notFound();


  return (
    <>
      {/* hero */}
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            {p.tagline}
          </div>
          <h1 style={{ marginTop: 12 }}>{p.name}</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            {p.promise}
          </p>
          {p.note && (
            <p style={{ marginTop: 14, color: "var(--gold)", fontWeight: 600 }}>{p.note}</p>
          )}
          <div className="btn-row" style={{ marginTop: 26 }}>
            <a href={BRAND.bookingUrl} className="btn btn-gold btn-lg">
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* this is for you if */}
      <section>
        <div className="wrap narrow">
          <h2>This is for you if</h2>
          <ul className="fit-list fit-yes" style={{ marginTop: 18 }}>
            {p.forYouIf.map((t) => (
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

      {/* what we watch */}
      <section className="band-alt">
        <div className="wrap narrow">
          <div className="eyebrow">What we watch</div>
          <h2 style={{ marginTop: 8 }}>The numbers that define progress on this Path.</h2>
          <p style={{ marginTop: 12, color: "var(--muted)" }}>
            You don't have to invent these. They come loaded with the Path — we tune them to your
            business and set your targets. Wondering what that means for your data?{" "}
            <Link href="/data-prep" style={{ color: "var(--navy)", fontWeight: 700 }}>
              Here's what actually happens to it
            </Link>
            .
          </p>
          <div className="grid cols-2" style={{ marginTop: 22 }}>
            {p.kpis.map((k) => (
              <div className="card" key={k} style={{ padding: 18, display: "flex", gap: 12 }}>
                <span style={{ color: "var(--gold-deep)", flex: "0 0 auto", marginTop: 2 }}>
                  <Icon name="check" size={18} />
                </span>
                <span style={{ fontSize: 15.5, fontWeight: 600 }}>{k}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* what you get */}
      <section>
        <div className="wrap narrow">
          <div className="eyebrow">What you get</div>
          <h2 style={{ marginTop: 8 }}>{p.deliverable}</h2>

          {p.exampleSlug && (
            <div className="btn-row" style={{ marginTop: 22 }}>
              <Link href={`/examples/${p.exampleSlug}`} className="btn btn-primary">
                See a real {p.name} briefing
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* how it works */}
      <section className="band-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{HOW_IT_WORKS.eyebrow}</div>
            <h2 style={{ marginTop: 8 }}>{HOW_IT_WORKS.headline}</h2>
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
        </div>
      </section>

      {/* pricing — no numbers; pricing is quoted privately */}
      <section>
        <div className="wrap narrow">
          <div className="eyebrow">What it costs</div>
          <h2 style={{ marginTop: 8 }}>
            {p.tier === "free"
              ? "Free to start."
              : "Priced to the size of your business."}
          </h2>
          <p style={{ marginTop: 12, color: "var(--muted)" }}>{p.pricingNote}</p>
          <div className="btn-row" style={{ marginTop: 22 }}>
            <a href={BRAND.bookingUrl} className="btn btn-primary">
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
