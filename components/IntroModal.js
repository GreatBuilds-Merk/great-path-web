"use client";

// ============================================================================
// IntroModal — first-visit popup.
//
// Triggers:
//   · desktop — exit intent (cursor leaves the top of the viewport)
//   · touch   — 60% scroll depth
//
// NEVER on page load. Google treats an interstitial that covers content
// immediately on mobile as intrusive and can penalize search ranking for it.
// Both triggers above fire only after real engagement, which sidesteps that
// entirely and converts better anyway.
//
// Shown once per visitor (localStorage). Suppressed on the pages it would send
// people to, and on the legal pages.
// ============================================================================

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND, POPUP, GUARANTEE } from "@/lib/brand";
import Icon from "./Icon";

const SUPPRESS = ["/contact", "/pricing", "/terms", "/privacy"];

export default function IntroModal() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const fired = useRef(false);
  const closeRef = useRef(null);

  useEffect(() => {
    if (SUPPRESS.includes(pathname)) return;

    // already seen? bail. Private mode can throw on access — treat as unseen.
    try {
      if (localStorage.getItem(POPUP.storageKey)) return;
    } catch {}

    const show = () => {
      if (fired.current) return;
      fired.current = true;
      setOpen(true);
      try {
        localStorage.setItem(POPUP.storageKey, String(Date.now()));
      } catch {}
    };

    // desktop: cursor heads for the tab bar / close button
    const onLeave = (e) => {
      if (e.clientY <= 0) show();
    };

    // touch: 60% down the page
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.body.scrollHeight;
      if (total > 0 && scrolled / total > 0.6) show();
    };

    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) {
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      document.addEventListener("mouseout", onLeave);
      // fall back to scroll on desktop too, in case they never exit
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      document.removeEventListener("mouseout", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  // Escape closes; move focus to the close button when it opens
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="gp-modal-title">
        <button
          ref={closeRef}
          className="modal-x"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          <Icon name="close" size={20} />
        </button>

        <div className="modal-head">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            A question worth sitting with
          </div>
          <h2 id="gp-modal-title" style={{ color: "#fff", marginTop: 10 }}>
            {POPUP.hook}
          </h2>
        </div>

        <div className="modal-body">
          <p style={{ color: "var(--ink)", fontSize: 16 }}>{POPUP.body}</p>
          <p style={{ color: "var(--ink)", fontSize: 16, marginTop: 12, fontWeight: 600 }}>
            {POPUP.turn}
          </p>

          <div className="modal-guarantee">
            <div className="eyebrow">{POPUP.guaranteeLead}</div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px,5vw,34px)",
                fontWeight: 700,
                color: "var(--navy-ink)",
                lineHeight: 1.1,
                marginTop: 6,
              }}
            >
              {GUARANTEE.hook}
            </p>
            <p className="small" style={{ marginTop: 8 }}>
              Do your part for twelve months. If it hasn&apos;t paid for itself five times
              over, half your fees come back.
            </p>
          </div>

          <div className="btn-row" style={{ marginTop: 20 }}>
            <a href={BRAND.bookingUrl} className="btn btn-gold btn-lg" onClick={() => setOpen(false)}>
              {POPUP.cta}
            </a>
            <Link href="/pricing" className="btn btn-ghost" onClick={() => setOpen(false)}>
              {POPUP.secondary}
            </Link>
          </div>

          <button className="modal-dismiss" onClick={() => setOpen(false)}>
            {POPUP.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
}
