"use client";

import { useState } from "react";
import Link from "next/link";
import { BRAND, NAV } from "@/lib/brand";
import Icon from "./Icon";

// The road-to-destination mark. Background was flattened white in the source
// file, so /public/brand/logo-road.png is a cleaned, trimmed, truly-transparent
// version — use that one, not the original export.
function Mark() {
  return (
    <img
      className="mark"
      src="/brand/logo-road.png"
      alt=""
      width={68}
      height={40}
      aria-hidden="true"
    />
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
