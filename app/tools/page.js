import Link from "next/link";
import { BRAND } from "@/lib/brand";

export const metadata = { title: "Free Tools" };

export default function Page() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <h1>Free tools, no strings.</h1>
          <p className="lead" style={{ marginTop: 16 }}>Find your position on the path, and grab the template that makes your numbers usable.</p>
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
