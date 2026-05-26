import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_INFO, ORG_NAME } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `How ${ORG_NAME} collects, uses, and protects information from visitors and applicants.`,
  path: "/privacy",
});

const LAST_UPDATED = "May 25, 2026";

interface Subprocessor {
  name: string;
  purpose: string;
  privacyUrl: string;
}

const subprocessors: Subprocessor[] = [
  {
    name: "Vercel",
    purpose:
      "Hosts the website and processes incoming requests. Logs basic technical request information for operations and abuse prevention.",
    privacyUrl: "https://vercel.com/legal/privacy-policy",
  },
  {
    name: "Resend",
    purpose:
      "Receives form submissions from our website and delivers them as email to our shared inbox. Stores delivery logs.",
    privacyUrl: "https://resend.com/legal/privacy-policy",
  },
  {
    name: "Google (Gmail)",
    purpose:
      "Provides the inbox where contact and application submissions land for review.",
    privacyUrl: "https://policies.google.com/privacy",
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/about"
            className="inline-flex items-center text-sm text-gold-300 hover:text-gold-200 transition-colors mb-6"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            About
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Privacy &amp; Transparency
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-ink-300">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              The short version
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              {ORG_NAME} runs a small public website at legislateforlife.org.
              We collect personal information only when you give it to us
              through one of our forms (the contact form or an application
              form), and we use it only to respond to you and run our work as
              a foundation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We do not sell personal information. We do not share it with
              advertisers. We do not currently use analytics or tracking
              cookies. The full details, including who processes information
              on our behalf and what your rights are, are below.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about anything in this policy, email{" "}
              <a
                className="text-gold-700 hover:text-gold-800 font-medium"
                href={`mailto:${CONTACT_INFO.email}?subject=Privacy`}
              >
                {CONTACT_INFO.email}
              </a>{" "}
              with the subject &ldquo;Privacy.&rdquo;
            </p>
          </section>

          <section id="scope">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What this policy covers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              This policy describes how {ORG_NAME} (&ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;the foundation&rdquo;) collects,
              uses, and protects information when you visit
              legislateforlife.org or use our forms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It does not cover services we link to but do not run, including
              our social media accounts on Instagram, TikTok, and LinkedIn.
              Those services have their own privacy policies, which we
              encourage you to read.
            </p>
          </section>

          <section id="information-we-collect">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Information we collect
            </h2>

            <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
              Information you give us through our forms
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              When you use our contact form, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The subject and content of your message</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-3">
              When you apply for a role through our application form, we
              collect:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>
                A link to your resume or CV (you choose where to host it; we
                do not store the document itself)
              </li>
              <li>Your description of relevant experience</li>
              <li>Your reasons for wanting to join the foundation</li>
              <li>The role you applied for</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You always choose what to send us through these forms.
            </p>

            <h3 className="text-base font-semibold text-foreground mt-8 mb-2">
              Information collected automatically
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              When you visit the site, our hosting provider (Vercel)
              automatically logs basic technical information about your
              request, such as your IP address, browser type, and the page
              you accessed. These logs are used to operate the site and
              detect abuse. We do not combine these logs with information
              you give us through forms unless we are investigating a
              specific security concern.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our website also stores a single small flag in your
              browser&apos;s session storage (named{" "}
              <code className="text-sm bg-cream-50 px-1.5 py-0.5 rounded border border-ink-100">
                lfl-crisis-popup-dismissed
              </code>
              ) so the crisis support popup does not reappear after you
              dismiss it. This flag is deleted when you close your browser
              tab and is never sent back to us.
            </p>
          </section>

          <section id="how-we-use">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How we use information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use the information you provide to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>
                <strong className="text-foreground">
                  Respond to your inquiries
                </strong>{" "}
                when you submit the contact form.
              </li>
              <li>
                <strong className="text-foreground">
                  Review and respond to applications
                </strong>{" "}
                when you apply for a role.
              </li>
              <li>
                <strong className="text-foreground">
                  Operate the website
                </strong>
                , including delivering pages, processing form submissions,
                and protecting against abuse.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do not use your information for advertising, profiling,
              automated decision-making, or any purpose other than the ones
              above. Under the EU/UK General Data Protection Regulation
              (GDPR), the legal bases we rely on are your consent (when you
              submit a form), our legitimate interest in operating the
              foundation and responding to inquiries, and where applicable,
              taking steps at your request before entering into an
              arrangement (when you apply to volunteer or intern with us).
            </p>
          </section>

          <section id="who-we-share">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Who processes information on our behalf
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use a small number of trusted third-party services
              (sometimes called &ldquo;subprocessors&rdquo;) to run the
              website and our forms. They receive only the information
              needed to perform their service.
            </p>
            <div className="overflow-hidden rounded-xl border border-ink-100">
              <table className="w-full text-sm">
                <thead className="bg-cream-50">
                  <tr>
                    <th
                      scope="col"
                      className="text-left px-4 py-3 font-semibold uppercase tracking-widest text-xs text-gold-700"
                    >
                      Service
                    </th>
                    <th
                      scope="col"
                      className="text-left px-4 py-3 font-semibold uppercase tracking-widest text-xs text-gold-700"
                    >
                      What they do for us
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100">
                  {subprocessors.map((sp) => (
                    <tr key={sp.name} className="bg-white align-top">
                      <td className="px-4 py-4 font-medium text-foreground whitespace-nowrap">
                        <a
                          href={sp.privacyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold-700 hover:text-gold-800"
                        >
                          {sp.name}
                        </a>
                      </td>
                      <td className="px-4 py-4 text-muted-foreground leading-relaxed">
                        {sp.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell, rent, or share your personal information with
              anyone outside of these service providers. We may share
              information if required by law (for example, in response to a
              valid subpoena), but we will challenge requests we believe are
              unlawful and will notify you if legally permitted.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Cookies and similar technologies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We do not currently use cookies for advertising, analytics, or
              tracking. We do not embed third-party trackers, pixels, or
              advertising scripts on the site.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The only browser storage we set is the single session-storage
              flag described under &ldquo;Information collected
              automatically.&rdquo; If we ever add cookies or analytics in
              the future, we will update this policy and notify visitors
              before doing so.
            </p>
          </section>

          <section id="retention">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How long we keep information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong className="text-foreground">
                Contact form submissions
              </strong>{" "}
              are kept in our shared inbox for as long as we need them to
              respond and follow up. We aim to delete or archive contact
              records that are no longer needed within 12 months of
              resolution.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong className="text-foreground">
                Application submissions
              </strong>{" "}
              are kept for up to 24 months after the application is
              reviewed, so we can re-evaluate strong applicants for future
              openings. After that, application records are deleted unless
              you have asked us to keep them on file.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong className="text-foreground">Server logs</strong>{" "} are kept
              by our hosting provider follow Vercel&apos;s retention policy
              (typically around 30 days for standard request logs).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">
                Email delivery logs
              </strong>{" "}
              kept by our email provider follow Resend&apos;s retention
              policy.
            </p>
          </section>

          <section id="international-transfers">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              International transfers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The foundation is based in the United States, and the service
              providers listed above are also based in the United States.
              If you visit our site from the European Economic Area, the
              United Kingdom, or another region with strong data protection
              laws, your information will be transferred to and processed
              in the United States. Where required, our service providers
              maintain Standard Contractual Clauses or participate in the
              EU-U.S. Data Privacy Framework to provide protection for
              these transfers.
            </p>
          </section>

          <section id="your-rights">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Your privacy rights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No matter where you live, you can ask us to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>
                <strong className="text-foreground">
                  Tell you what information we have about you.
                </strong>
              </li>
              <li>
                <strong className="text-foreground">
                  Correct information that is inaccurate or incomplete.
                </strong>
              </li>
              <li>
                <strong className="text-foreground">
                  Delete your information
                </strong>
                , where we are not legally required to keep it.
              </li>
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
              If you are in the European Economic Area or United Kingdom
              (GDPR)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You have additional rights under the GDPR:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
              <li>Restrict or object to our processing of your information.</li>
              <li>
                Withdraw consent at any time, where consent is the legal
                basis we rely on.
              </li>
              <li>Receive a copy of your information in a portable format.</li>
              <li>Lodge a complaint with your local data protection authority.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You can find your country&apos;s authority through the European
              Data Protection Board.
            </p>

            <h3 className="text-base font-semibold text-foreground mt-8 mb-2">
              If you are a California resident (CCPA/CPRA)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You have specific rights under the California Consumer Privacy
              Act and the California Privacy Rights Act, including the right
              to know what personal information we collect, the right to
              request deletion, and the right to correct inaccurate
              information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">
                We do not sell or share personal information for
                cross-context behavioral advertising.
              </strong>{" "}
              We will not discriminate against you for exercising any of
              your privacy rights.
            </p>

            <h3 className="text-base font-semibold text-foreground mt-8 mb-2">
              How to exercise your rights
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Email{" "}
              <a
                className="text-gold-700 hover:text-gold-800 font-medium"
                href={`mailto:${CONTACT_INFO.email}?subject=Privacy%20Request`}
              >
                {CONTACT_INFO.email}
              </a>{" "}
              with the subject &ldquo;Privacy Request&rdquo; and tell us
              what you would like us to do. We may need to verify your
              identity (usually by confirming the email address you used to
              contact us) before responding. We will respond within a
              reasonable period, and within any deadline required by law.
            </p>
          </section>

          <section id="children">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Children&apos;s privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website is not directed at children under the age of 13,
              and we do not knowingly collect personal information from
              children. If you believe we have received information from a
              child without appropriate consent, contact us and we will
              delete it promptly.
            </p>
          </section>

          <section id="security">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How we protect information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We take reasonable steps to protect the information you give
              us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
              <li>
                The site is served over HTTPS, so the connection between
                your browser and our server is encrypted.
              </li>
              <li>
                API keys for our service providers are stored as server-side
                environment variables and are never exposed in our website
                code.
              </li>
              <li>
                Form submissions are validated and sanitized on the server
                before being processed.
              </li>
              <li>
                Access to the inbox where submissions land is restricted to
                authorized members of the foundation.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              No system is perfectly secure, and we cannot guarantee that
              information you transmit to us will never be accessed by an
              unauthorized party. If we become aware of a security incident
              affecting personal information, we will notify affected
              people and authorities as required by law.
            </p>
          </section>

          <section id="changes">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Changes to this policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy from time to time. The &ldquo;Last
              updated&rdquo; date at the top of the page reflects the most
              recent change. If we make material changes, we will note the
              change at the top of the policy for a reasonable period.
            </p>
          </section>

          <section
            id="contact"
            className="p-6 rounded-xl bg-cream-50 border border-ink-100"
          >
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Contact us about privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              For privacy questions, requests, or concerns, email us at{" "}
              <a
                className="text-gold-700 hover:text-gold-800 font-medium"
                href={`mailto:${CONTACT_INFO.email}?subject=Privacy`}
              >
                {CONTACT_INFO.email}
              </a>{" "}
              with &ldquo;Privacy&rdquo; in the subject line.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not currently maintain a public mailing address. All
              privacy correspondence should go through email.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
