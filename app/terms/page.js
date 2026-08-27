import Link from "next/link";
import { BRAND, LEGAL, GUARANTEE } from "@/lib/brand";
import { LegalHero, LegalBody, Clause, P } from "@/components/LegalPage";

export const metadata = {
  title: "Terms",
  description:
    "What Great Path provides, what it doesn't, how billing works, and who owns what.",
};

export default function Terms() {
  return (
    <>
      <LegalHero
        eyebrow="Terms of Service"
        title="What you're agreeing to."
        sub="Short, readable, and accurate to how the work actually runs."
      />

      <LegalBody>
        <Clause n="First" title="Who we are">
          <P>
            {LEGAL.entity} is a sole proprietorship providing business advisory services and
            recurring reporting to small and mid-sized businesses. Throughout this page, &ldquo;we&rdquo;
            means {LEGAL.entity} and &ldquo;you&rdquo; means the client.
          </P>
        </Clause>

        <Clause n="Second" title="What we provide">
          <P>
            Depending on the Path you choose: an advisory setup session, a configured set of
            measures tied to goals you agree with us, and recurring reports built from data you
            send us — along with specific recommended actions. Some Paths include project work or
            direct advisory time instead of, or alongside, recurring reports.
          </P>
          <P>
            What is included in your engagement is what we agree on your call and confirm in
            writing. This page governs the relationship; your quote governs the scope.
          </P>
        </Clause>

        <Clause n="Third" title="What we are not">
          <P>
            This matters, so it is stated plainly. We are <strong>not</strong> accountants, auditors,
            attorneys, tax preparers, or licensed financial advisors, and nothing we provide is
            accounting, audit, legal, tax, or investment advice.
          </P>
          <P>
            Our reports analyze data you supply and suggest business actions. They are not a
            substitute for professional advice from a licensed practitioner, they are not audited,
            and they should not be relied on for filings, financing applications, or legal
            proceedings. Decisions you make about your business remain yours.
          </P>
        </Clause>

        <Clause n="Fourth" title="What we need from you">
          <P>
            The work depends on the data you send. You agree to provide it accurately and on a
            reasonable schedule, and to tell us when something material changes in the business —
            a new location, a change in how revenue is recorded, a shift in goals.
          </P>
          <P>
            We do not audit or verify what you send. If the inputs are wrong, the analysis built on
            them will be wrong, and that is not something we can catch for you.
          </P>
        </Clause>

        <Clause n="Fifth" title="Fees, billing, and changes in price">
          <P>
            Pricing is based on your revenue and is confirmed in writing before any work begins.
            Recurring plans are billed monthly or annually; annual plans run for the year prepaid.
          </P>
          <P>
            <strong>Setup fees are one-time and non-refundable once the setup session has taken
            place</strong>, because that is real work delivered. Recurring fees are month-to-month
            with no long-term lock-in — you can stop at the end of a billing period.
          </P>
          <P>
            We review your rate once a year, at your anniversary. Increases are based on your
            two-year revenue average, so a single strong year does not spike your price. Decreases
            are based on the most recent year&apos;s change, so a hard year is reflected without
            waiting. We do not change your rate mid-term.
          </P>
        </Clause>

        <Clause n="Sixth" title="Who owns what">
          <P>
            <strong>Your data is yours.</strong> You keep all rights to the business data you send
            us, and the reports we produce for you are yours to use however you like inside your
            business.
          </P>
          <P>
            <strong>Our methods are ours.</strong> The frameworks, templates, measure libraries,
            report formats, and underlying engine remain our property. You are licensed to use the
            outputs, not to resell, redistribute, or rebuild the system behind them.
          </P>
        </Clause>

        <Clause n="Seventh" title="Confidentiality">
          <P>
            We treat everything you share as confidential. We will not disclose your business data,
            your figures, or your identity as a client without your explicit permission. The
            specifics of how we handle, store, and never share your information are set out in our{" "}
            <Link href="/privacy" style={{ color: "var(--navy)", fontWeight: 700 }}>
              Privacy policy
            </Link>
            , and those commitments are part of these terms.
          </P>
          <P>
            If we ever use work in marketing, it will be anonymized by industry with the business,
            its location, and its true performance figures changed to protect it — unless you have
            given us written permission to be named.
          </P>
        </Clause>

        <Clause n="Eighth" title="Limits">
          <P>
            We do the work carefully and honestly, but we cannot guarantee business outcomes. No
            report can promise revenue, profit, a valuation, or a sale, and nothing we provide
            should be read as predicting what your business will do.
          </P>
          <P>
            <strong>{GUARANTEE.name} is not an exception to that.</strong> It is a promise about our
            fee, not about your results — if you hold up your side and the work doesn&apos;t pay for
            itself several times over, you get half your recurring fees back. We are refunding our
            own price, not underwriting your business. The terms are in the next clause.
          </P>
          <P>
            To the extent the law allows, our total liability for any claim relating to the work is
            limited to the fees you paid us in the twelve months before the claim arose. We are not
            liable for indirect or consequential losses, including lost profits.
          </P>
        </Clause>

        <Clause n="Ninth" title={GUARANTEE.name}>
          <P>
            Available on <strong>+ Insights</strong> and <strong>+ Advisor</strong>. It is not
            offered on Your Engine, because that tier has no advisor in the loop and we will not
            guarantee a result we have no ability to influence.
          </P>
          <P>
            <strong>To qualify, you participate.</strong> For twelve consecutive months you send
            your numbers on time, attend the scheduled reviews, and either act on each month&apos;s
            recommendations or tell us in writing why you are not. These conditions are about taking
            part — you are never required to hit a business result in order to claim.
          </P>
          <P>
            <strong>If the measured improvement against the goals set at your Path Setup has not
            reached five times the recurring fees you paid, we refund fifty percent of those fees.</strong>{" "}
            Improvement is measured on gross profit against the twelve months before we started,
            using your own numbers, on definitions agreed in writing before any work begins.
            One-time events — asset sales, acquisitions, insurance proceeds — are excluded.
          </P>
          <P>
            Setup fees are excluded from any refund; that work is delivered at the start. The claim
            window opens at month thirteen and closes at month fifteen. One claim per client, per
            engagement. At month six we review progress together, so a shortfall can be corrected
            while there is still time — the refund is a backstop, not the plan.
          </P>
        </Clause>

        <Clause n="Tenth" title="Ending the engagement">
          <P>
            Either of us can end a recurring engagement at the end of a billing period, for any
            reason. If you leave, you keep every report we have produced for you, and you can ask
            us to delete your data.
          </P>
        </Clause>

        <Clause n="Eleventh" title="Changes and governing law">
          <P>
            We may update these terms. If a change materially affects active clients, we will tell
            them directly rather than quietly editing this page. These terms are governed by the
            laws of {LEGAL.governingLaw}.
          </P>
        </Clause>

        <Clause n="Twelfth" title="Contact">
          <P>
            Questions about these terms go to{" "}
            <a href={`mailto:${BRAND.emailDan}`} style={{ color: "var(--navy)", fontWeight: 700 }}>
              {BRAND.emailDan}
            </a>
            .
          </P>
        </Clause>
      </LegalBody>
    </>
  );
}
