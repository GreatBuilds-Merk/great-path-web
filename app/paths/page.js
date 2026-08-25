import Link from "next/link";
import { PATHS } from "@/lib/brand";
import Icon from "@/components/Icon";

export const metadata = {
  title: "The Paths",
  description:
    "Six Paths, each with its own destination, its own numbers, and its own actions.",
};

export default function PathsIndex() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            The Paths
          </div>
          <h1 style={{ marginTop: 12 }}>Start by choosing where you're going.</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            A Path is a destination plus the numbers that measure progress toward it. Pick the
            one that matches what you're trying to do — we'll confirm the fit on a call before
            anything starts.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="grid cols-3">
            {PATHS.map((p) => (
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
    </>
  );
}
