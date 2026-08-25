"use client";

import { useState } from "react";
import Link from "next/link";
import { BRAND, NAV } from "@/lib/brand";
import Icon from "./Icon";

// TODO: replace the <Mark /> placeholder with the real logo from
// Logo Generic.png / Logo Navy background.png once it's in /public/brand/.
function Mark() {
  return (
    <svg className="mark" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="var(--navy)" />
      <path
        d="M11 30L17 10M29 30L23 10"
        stroke="var(--gold)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M20 15v3M20 21v3" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site">
      <div className="wrap">
        <nav className="nav">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <Mark />
            <b>
              Great <span>Path</span>
            </b>
          </Link>

          <div className="nav-links">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-cta">
            <Link href={BRAND.bookingUrl} className="btn btn-primary">
              Book a Call
            </Link>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </nav>
      </div>

      {open && (
        <div className="drawer">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link
            href={BRAND.bookingUrl}
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}
