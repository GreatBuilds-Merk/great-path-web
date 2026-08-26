import Link from "next/link";
import { BRAND } from "@/lib/brand";

export const metadata = {
  robots: { index: false, follow: false }, title: "Where Are You on the Path?" };

export default function Page() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <h1>Where are you on the path?</h1>
          <p className="lead" style={{ marginTop: 16 }}>Five questions, sixty seconds, seasonality included. Wired to the engine in week 4.</p>
        </div>
      </section>
      <section>
        <div className="wrap narrow">
          <div className="placeholder">
            This page is scheduled in the Launch 1 build plan. Content coming.
          </div>
          <div className="btn-row" style={{ marginTop: 24 }}>
            <Link href={BRAND.bookingUrl} className="btn btn-primary">Book a Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
