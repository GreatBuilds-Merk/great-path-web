import Link from "next/link";
import { notFound } from "next/navigation";
import { EXAMPLES, getExample } from "@/lib/examples";
import { BRAND } from "@/lib/brand";

export function generateStaticParams() {
  return EXAMPLES.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }) {
  const e = getExample(params.slug);
  if (!e) return {};
  return {
    title: `${e.company.short} · Example Briefing`,
    description: e.meta.blurb,
  };
}

import Briefing from "@/components/Briefing";

export default function ExamplePage({ params }) {
  const e = getExample(params.slug);
  if (!e) notFound();

  return (
    <>
      <section style={{ paddingBottom: 0 }}>
        <div className="wrap narrow">
          <Link href="/examples" className="small" style={{ fontWeight: 700, color: "var(--navy)" }}>
            ← All examples
          </Link>

          <p
            style={{
              marginTop: 16,
              padding: "12px 16px",
              background: e.real ? "rgba(199,166,90,.14)" : "var(--card-alt)",
              borderLeft: `3px solid ${e.real ? "var(--gold)" : "var(--line-strong)"}`,
              borderRadius: 8,
              fontSize: 14.5,
            }}
          >
            {e.real ? (
              <>
                <strong>Real client briefing.</strong> The name and logo were changed at the
                owner&apos;s request. The numbers and the analysis are theirs.
              </>
            ) : (
              <>
                <strong>Sample briefing.</strong> The business is illustrative, built to show the
                format and the depth of the analysis. The layout and the engine behind it are the
                real thing.
              </>
            )}
          </p>

          {/* The original print layout, anonymized. Open it and use your browser's
              Print → Save as PDF to produce the downloadable version. */}
          <div className="btn-row" style={{ marginTop: 18 }}>
            <a
              href={`/briefings/${e.slug}.html`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Open the print version
            </a>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 28 }}>
        <div className="wrap narrow">
          <Briefing data={e} />
        </div>
      </section>

      <section className="band-alt">
        <div className="wrap narrow" style={{ textAlign: "center" }}>
          <h2>This one is {e.meta.industry.toLowerCase()}. Yours would be yours.</h2>
          <p className="lead" style={{ marginTop: 14 }}>
            Same engine, your data, your Path. We&apos;ll map what your first briefing looks like on
            a call.
          </p>
          <div className="btn-row" style={{ marginTop: 24, justifyContent: "center" }}>
            <a href={BRAND.bookingUrl} className="btn btn-primary btn-lg">
              Book a free discovery call
            </a>
            <Link href="/examples" className="btn btn-ghost">
              See another example
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
