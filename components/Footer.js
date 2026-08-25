import Link from "next/link";
import { BRAND, FOOTER_NAV } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div style={{ fontWeight: 800, fontSize: 19, color: "#fff", marginBottom: 10 }}>
              Great <span style={{ color: "var(--gold)" }}>Path</span>
            </div>
            <p style={{ color: "var(--on-dark-muted)", fontSize: 14.5, maxWidth: 320 }}>
              {BRAND.tagline}
            </p>
            <p style={{ marginTop: 14 }}>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </p>
          </div>

          {FOOTER_NAV.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </span>
          <span>Example briefings use real businesses with names and details changed.</span>
        </div>
      </div>
    </footer>
  );
}
