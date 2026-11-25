import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Nolf website terms of service starter and the information to review before the site is used live.",
};

export default function TermsOfServicePage() {
  return (
    <PageIntro
      eyebrow="Terms of Service"
      title="Terms should be clear, too."
      summary="A structured starting point for website terms. It must be reviewed and completed for the actual operator before public use."
    >
      <div className="prose-copy max-w-3xl">
        <h2>Website information</h2>
        <p>
          This site starter is intended to present information about the Nolf technology brand and its featured product. Content is general information; it is not professional, financial, or technical advice.
        </p>
        <h2>Third-party websites</h2>
        <p>
          Links to external websites take visitors to services operated separately from this site. Their content, terms, availability, and privacy practices are not established by this boilerplate. INDlop is presented as a distinct product brand, and its website is governed by the terms published there.
        </p>
        <h2>Operator and legal terms</h2>
        <p>
          The operating legal entity, governing law, dispute process, warranty terms, liability limits, and any intellectual-property permissions have not been supplied. This starter intentionally makes no assertion about those matters. Confirm the actual operator and have applicable terms reviewed before using this page as a legal notice.
        </p>
        <h2>Changes</h2>
        <p>
          The responsible site operator should publish a verified contact route and an effective date if required, then keep the terms aligned with the site and applicable requirements.
        </p>
        <p>
          This text is a drafting baseline, not legal advice, and is not a claim that a particular legal entity owns or operates the Nolf or INDlop brands.
        </p>
      </div>
    </PageIntro>
  );
}
