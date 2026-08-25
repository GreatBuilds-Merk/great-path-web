import Link from "next/link";
import { BRAND } from "@/lib/brand";

export const metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <section className="band-dark">
        <div className="wrap narrow">
          <h1>Let's see if this fits.</h1>
          <p className="lead" style={{ marginTop: 16 }}>One call, no deck, no pitch. Replace this with your booking embed.</p>
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
