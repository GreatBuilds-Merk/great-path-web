import Link from "next/link";
import { EXAMPLES } from "@/lib/examples";
import { BRAND } from "@/lib/brand";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Examples",
  description:
    "Real Owner Briefings from real businesses. Names and identifying details changed at the owners' request.",
};

export default function Examples() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            Examples
          </div>
          <h1 style={{ marginTop: 12 }}>This is what shows up every month.</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Two of these are samples — illustrative businesses built to show the format and the
            depth of the analysis. The third is a real client briefing, with the name and logo
            changed at their request.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
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
                  {e.meta.industry} · {e.meta.revenue}
                </p>
                <p style={{ marginTop: 8 }}>{e.meta.blurb}</p>

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

        </div>
      </section>

      <section className="band-alt">
        <div className="wrap narrow" style={{ textAlign: "center" }}>
          <h2>Want to see one built from your numbers?</h2>
          <p className="lead" style={{ marginTop: 14 }}>
            On a discovery call we&apos;ll map what your first briefing would look like — using the
            data you already have.
          </p>
          <div className="btn-row" style={{ marginTop: 24, justifyContent: "center" }}>
            <a href={BRAND.bookingUrl} className="btn btn-primary btn-lg">
              Book a free discovery call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
