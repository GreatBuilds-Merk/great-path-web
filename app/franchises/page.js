import Link from "next/link";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Franchises & Multi-Unit",
  description:
    "Every unit. One system. Firing in unison. One branded executive brief across every location.",
};

export default function Page() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            For franchise systems &amp; multi-unit operators
          </div>
          <h1 style={{ marginTop: 12 }}>Every unit. One system. Firing in unison.</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Franchise ownership multiplies complexity — different accountants, different software,
            blind spots between locations. Great Path turns the scattered numbers across your units
            into one branded executive brief, so the whole system can see what&apos;s working and
            move together.
          </p>
          <div className="btn-row" style={{ marginTop: 26 }}>
            <a href={BRAND.bookingUrl} className="btn btn-gold btn-lg">Book a franchise demo</a>
          </div>
          <p className="small" style={{ marginTop: 14, color: "var(--on-dark-muted)" }}>
            Set-up fee + simple per-unit pricing · White-label to your brand · Works with the
            accounting each unit already uses
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Two ways to partner</div>
            <h2 style={{ marginTop: 8 }}>Pick the model that fits your system.</h2>
          </div>
          <div className="grid cols-2">
            <div className="card">
              <span className="badge">Path 1 · Advisor Program</span>
              <h3 style={{ marginTop: 10 }}>Great Path as your official advisor</h3>
              <p style={{ marginTop: 8 }}>
                We become your system&apos;s named advisor. Your franchisees work with us directly
                under custom rate structures and discounted setup fees you secure for them — a
                genuine benefit you provide, with none of the overhead.
              </p>
            </div>
            <div className="card">
              <span className="badge">Path 2 · White-label</span>
              <h3 style={{ marginTop: 10 }}>Your brand, our engine</h3>
              <p style={{ marginTop: 8 }}>
                Premium executive briefings — from a single unit up to a full system view — under
                your own brand. Give it to owners as a benefit or bundle it into your tech package.
              </p>
            </div>
          </div>

          <div className="placeholder" style={{ marginTop: 24 }}>
            Full page still to be rebuilt from the Squarespace version: the three problem cards,
            the two-audience split, why it compounds, the beyond-monthly section, and the two live
            samples (/franchiseoperator and /franchisebrief).
          </div>

          <div className="btn-row" style={{ marginTop: 24 }}>
            <a href={BRAND.bookingUrl} className="btn btn-primary">Book a franchise demo</a>
            <Link href="/contact" className="btn btn-ghost">Ask a question</Link>
          </div>
        </div>
      </section>
    </>
  );
}
