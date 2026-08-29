import Link from "next/link";
import { BRAND } from "@/lib/brand";

export const metadata = { title: "Thanks" };

export default function Page() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <h1>It's on its way.</h1>
          <p className="lead" style={{ marginTop: 16 }}>Check your inbox. If it isn't there in a few minutes, look in spam.</p>
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
