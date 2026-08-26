// Shared layout for /terms and /privacy. Keeps both pages consistent and makes
// the effective date come from one place (LEGAL in lib/brand.js).

import { LEGAL } from "@/lib/brand";

export function LegalHero({ eyebrow, title, sub }) {
  return (
    <section className="band-dark">
      <div className="wrap narrow">
        <div className="eyebrow" style={{ color: "var(--gold)" }}>
          {eyebrow}
        </div>
        <h1 style={{ marginTop: 12 }}>{title}</h1>
        {sub && (
          <p className="lead" style={{ marginTop: 16 }}>
            {sub}
          </p>
        )}
        <p className="small" style={{ marginTop: 18, color: "var(--on-dark-muted)" }}>
          Effective {LEGAL.effectiveDate}
        </p>
      </div>
    </section>
  );
}

export function LegalBody({ children }) {
  return (
    <section>
      <div className="wrap narrow legal">{children}</div>
    </section>
  );
}

export function Clause({ n, title, children }) {
  return (
    <div style={{ marginTop: 38 }}>
      <div className="eyebrow">{n}</div>
      <h2 style={{ marginTop: 6, fontSize: "clamp(21px,3.2vw,27px)" }}>{title}</h2>
      <div className="stack-sm" style={{ marginTop: 12 }}>
        {children}
      </div>
    </div>
  );
}

export function P({ children }) {
  return <p style={{ color: "var(--ink)", fontSize: 16.5 }}>{children}</p>;
}

export function Promise_({ children }) {
  return (
    <li
      style={{
        display: "flex",
        gap: 12,
        padding: "14px 16px",
        background: "rgba(199,166,90,.14)",
        borderLeft: "3px solid var(--gold)",
        borderRadius: 8,
        fontSize: 16,
        fontWeight: 600,
        color: "var(--navy-ink)",
        marginTop: 10,
      }}
    >
      {children}
    </li>
  );
}
