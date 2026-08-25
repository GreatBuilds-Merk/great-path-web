import Link from "next/link";
import { BRAND } from "@/lib/brand";

export const metadata = { title: "AI Readiness Audit" };

export default function Page() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <div className="eyebrow" style={{ color: "var(--gold)" }}>Free · 4 minutes</div>
          <h1 style={{ marginTop: 12 }}>How ready is your business to grow with AI?</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Answer a few quick questions and get a personalized score plus three specific next
            steps to turn your data into better decisions. No cost, no obligation.
          </p>
        </div>
      </section>
      <section>
        <div className="wrap narrow">
          <div className="placeholder">
            The audit is being rebuilt here from the Squarespace version. Recovered structure is in
            AI_Readiness_Audit_Recovered_Structure.md.
          </div>
          <div className="btn-row" style={{ marginTop: 24 }}>
            <a href={BRAND.bookingUrl} className="btn btn-primary">Book a free discovery call</a>
          </div>
        </div>
      </section>
    </>
  );
}
