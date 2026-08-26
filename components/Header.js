"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BRAND, NAV, PATHS } from "@/lib/brand";
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
  const [open, setOpen] = useState(false); // mobile drawer
  const [drop, setDrop] = useState(false); // desktop Paths dropdown
  const [drawerPaths, setDrawerPaths] = useState(false); // mobile Paths accordion
  const dropRef = useRef(null);

  // Escape closes the dropdown; clicking outside closes it too.
  useEffect(() => {
    if (!drop) return;
    const onKey = (e) => e.key === "Escape" && setDrop(false);
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDrop(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [drop]);

  const closeAll = () => {
    setOpen(false);
    setDrop(false);
    setDrawerPaths(false);
  };

  return (
    <header className="site">
      <div className="wrap">
        <nav className="nav">
          <Link href="/" className="brand" onClick={closeAll}>
            <Mark />
            <b>
              Great <span>Path</span>
            </b>
          </Link>

          <div className="nav-links">
            {NAV.map((item) =>
              item.dropdown ? (
                <div
                  key={item.href}
                  className="nav-item"
                  ref={dropRef}
                  onMouseEnter={() => setDrop(true)}
                  onMouseLeave={() => setDrop(false)}
                >
                  <button
                    className="nav-trigger"
                    aria-expanded={drop}
                    aria-haspopup="true"
                    onClick={() => setDrop((v) => !v)}
                  >
                    {item.label}
                    <Icon name="chevron" size={15} stroke={2.5} />
                  </button>

                  {drop && (
                    <div className="dropdown">
                      {PATHS.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/paths/${p.slug}`}
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          <span className={`ico ${p.accent}`}>
                            <Icon name={p.icon} size={18} />
                          </span>
                          <span>
                            <span className="dd-name">{p.name}</span>
                            <span className="dd-tag">{p.tagline}</span>
                          </span>
                        </Link>
                      ))}

                      <Link href="/paths" className="dropdown-all" onClick={closeAll}>
                        Compare all six Paths <Icon name="arrow" size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="nav-cta">
            <a href={BRAND.bookingUrl} className="btn btn-primary">
              Book a Call
            </a>
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
          {NAV.map((item) =>
            item.dropdown ? (
              <div key={item.href}>
                <button
                  className="drawer-trigger"
                  aria-expanded={drawerPaths}
                  onClick={() => setDrawerPaths((v) => !v)}
                >
                  {item.label}
                  <Icon
                    name="chevron"
                    size={18}
                    stroke={2.5}
                    className={drawerPaths ? "flip" : undefined}
                  />
                </button>

                {drawerPaths && (
                  <div className="drawer-sub">
                    {PATHS.map((p) => (
                      <Link key={p.slug} href={`/paths/${p.slug}`} onClick={closeAll}>
                        {p.name}
                        <span className="dd-tag"> · {p.tagline}</span>
                      </Link>
                    ))}
                    <Link href="/paths" onClick={closeAll}>
                      Compare all six
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} onClick={closeAll}>
                {item.label}
              </Link>
            )
          )}

          <a href={BRAND.bookingUrl} className="btn btn-primary" onClick={closeAll}>
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
