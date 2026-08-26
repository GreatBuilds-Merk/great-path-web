import Script from "next/script";
import { BRAND, CONTACT } from "@/lib/brand";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Contact",
  description: CONTACT.sub,
};

export default function Contact() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            Contact
          </div>
          <h1 style={{ marginTop: 12 }}>{CONTACT.headline}</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            {CONTACT.sub}
          </p>
        </div>
      </section>

      {/* the two tiers */}
      <section>
        <div className="wrap">
          <div className="grid cols-2">
            {CONTACT.tiers.map((t) => {
              const addr = t.id === "clients" ? BRAND.emailDan : BRAND.email;
              return (
                <div
                  className="card"
                  key={t.id}
                  style={
                    t.featured
                      ? { borderColor: "var(--gold)", borderWidth: 2, display: "flex", flexDirection: "column" }
                      : { display: "flex", flexDirection: "column" }
                  }
                >
                  <div className="ico" style={{ marginBottom: 12 }}>
                    <Icon name={t.icon} size={22} />
                  </div>

                  <span className="tag">{t.label}</span>
                  <h3 style={{ marginTop: 6 }}>{t.title}</h3>
                  <p style={{ marginTop: 10 }}>{t.body}</p>

                  <p style={{ marginTop: 16 }}>
                    <a
                      href={`mailto:${addr}`}
                      style={{
                        color: "var(--navy)",
                        fontWeight: 700,
                        fontSize: 16,
                        borderBottom: "2px solid var(--gold)",
                        paddingBottom: 2,
                        wordBreak: "break-word",
                      }}
                    >
                      {addr}
                    </a>
                  </p>

                  <p className="small" style={{ marginTop: 10 }}>
                    {t.responseTime}
                  </p>

                  <div style={{ marginTop: "auto", paddingTop: 20 }}>
                    {t.id === "clients" ? (
                      <a href={BRAND.bookingUrl} className="btn btn-gold btn-block">
                        {t.cta}
                      </a>
                    ) : (
                      <a href={`mailto:${addr}`} className="btn btn-ghost btn-block">
                        {t.cta}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* inline booking */}
      <section className="band-alt">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Pick a time</div>
            <h2 style={{ marginTop: 8 }}>Fifteen minutes to see what&apos;s hiding in your numbers.</h2>
            <p>
              A quick intro — no prep, no pitch deck. We&apos;ll look at what you already have and
              tell you honestly whether there&apos;s something worth chasing.
            </p>
          </div>

          <div
            className="calendly-inline-widget"
            data-url={`${BRAND.bookingUrl}?hide_gdpr_banner=1&primary_color=3f5f86`}
            style={{
              minWidth: 320,
              height: 720,
              background: "var(--card)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--line)",
              overflow: "hidden",
            }}
          />

          {/* Fallback if the widget is blocked by a browser extension or ad blocker */}
          <p className="small" style={{ marginTop: 14, textAlign: "center" }}>
            Scheduler not loading?{" "}
            <a
              href={BRAND.bookingUrl}
              style={{ color: "var(--navy)", fontWeight: 700 }}
              target="_blank"
              rel="noreferrer"
            >
              Open it in a new tab
            </a>
            .
          </p>
        </div>
      </section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
