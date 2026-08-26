import { BRAND, LEGAL } from "@/lib/brand";
import { LegalHero, LegalBody, Clause, P, Promise_ } from "@/components/LegalPage";

export const metadata = {
  title: "Privacy",
  description:
    "What Great Path collects, what we do with it, and the four things we will never do with your data.",
};

export default function Privacy() {
  return (
    <>
      <LegalHero
        eyebrow="Privacy"
        title="Your data stays yours."
        sub="Plain language, no lawyer-speak. If anything here is unclear, ask and we'll explain it."
      />

      <LegalBody>
        <Clause n="First" title="The four promises">
          <P>
            Everything below is detail. These four are the commitments that matter, and they hold
            regardless of anything else on this page.
          </P>
          <ul style={{ marginTop: 4 }}>
            <Promise_>
              We will never share your contact information with anyone without your explicit
              approval.
            </Promise_>
            <Promise_>
              We will never share your business data. Not with other clients, not with partners, not
              with anyone.
            </Promise_>
            <Promise_>
              We store only the summaries and reports we produce for you, and only for clients who
              have agreed to our terms.
            </Promise_>
            <Promise_>
              If we ever use client work in marketing, it will be anonymized by industry, with the
              business, its location, and its true performance figures changed to protect it.
            </Promise_>
          </ul>
        </Clause>

        <Clause n="Second" title="What we collect">
          <P>
            <strong>Contact information</strong> you give us — your name, email, business name, and
            anything else you share when you book a call, send an email, or fill in a form.
          </P>
          <P>
            <strong>Business data</strong> you send us so we can do the work: financial exports,
            point-of-sale reports, spreadsheets, CRM exports, and similar. We only ever receive what
            you choose to send.
          </P>
          <P>
            <strong>Basic website analytics</strong> — which pages get visited and roughly where
            visitors come from. This is aggregate traffic data and is not tied to you personally.
          </P>
          <P>We do not buy data about you, and we do not track you across other websites.</P>
        </Clause>

        <Clause n="Third" title="What we do with it">
          <P>
            We use your business data for exactly one thing: producing your reports and the advice
            that goes with them. We use your contact information to communicate with you about your
            work and, if you have asked us to, to send occasional updates you can unsubscribe from
            at any time.
          </P>
          <P>That is the complete list. We do not sell data. We do not rent it. We do not share it.</P>
        </Clause>

        <Clause n="Fourth" title="What we store, and for how long">
          <P>
            We keep the <strong>summaries and reports</strong> we produce for you, so your history
            is available and each month can be compared against the last. We keep the source files
            you send only as long as we need them to produce and verify that work.
          </P>
          <P>
            Ask us to delete your data and we will, and we will confirm when it is done. Some
            records may be retained where the law requires it, and we will tell you if that applies.
          </P>
        </Clause>

        <Clause n="Fifth" title="Services we rely on">
          <P>
            Running the business means using a few outside services. We keep the list short and
            deliberate:
          </P>
          <P>
            <strong>Google Workspace</strong> for email · <strong>Calendly</strong> for scheduling ·{" "}
            <strong>Vercel</strong> for website hosting · and, where reports are delivered
            electronically, secure file storage.
          </P>
          <P>
            Each of these can see only what passing through it requires. None of them receive your
            business data for their own purposes, and none of them are permitted to use it.
          </P>
        </Clause>

        <Clause n="Sixth" title="How your data is protected">
          <P>
            Access is limited to the people who need it to do your work — in practice, that is
            currently one person. Files are kept in access-controlled storage, and reports are
            shared through private links rather than published anywhere public.
          </P>
          <P>
            No system is perfectly secure, and we will not pretend otherwise. If a breach ever
            affected your data, we would tell you promptly and directly.
          </P>
        </Clause>

        <Clause n="Seventh" title="Your choices">
          <P>
            You can ask us at any time to show you what we hold, correct it, delete it, or stop
            contacting you. There is no form to fill in — email{" "}
            <a href={`mailto:${BRAND.emailDan}`} style={{ color: "var(--navy)", fontWeight: 700 }}>
              {BRAND.emailDan}
            </a>{" "}
            and we will handle it.
          </P>
        </Clause>

        <Clause n="Eighth" title="Changes to this policy">
          <P>
            If this policy changes in a way that affects you, we will update the effective date
            above and tell active clients directly. We will not quietly weaken the four promises at
            the top.
          </P>
        </Clause>

        <Clause n="Ninth" title="Questions">
          <P>
            {LEGAL.entity} is a sole proprietorship. Privacy questions go to{" "}
            <a href={`mailto:${BRAND.emailDan}`} style={{ color: "var(--navy)", fontWeight: 700 }}>
              {BRAND.emailDan}
            </a>
            ; general and technical questions go to{" "}
            <a href={`mailto:${BRAND.email}`} style={{ color: "var(--navy)", fontWeight: 700 }}>
              {BRAND.email}
            </a>
            .
          </P>
        </Clause>
      </LegalBody>
    </>
  );
}
