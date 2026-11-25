import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Nolf website privacy notice starter, including site functionality, hosting data, and third-party links.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageIntro
      eyebrow="Privacy Policy"
      title="Privacy, explained plainly."
      summary="A baseline privacy notice for this website starter. Review and complete it for the actual operator and hosting setup before public use."
    >
      <div className="prose-copy max-w-3xl">
        <h2>About this notice</h2>
        <p>
          This boilerplate does not identify an operating legal entity or establish a complete privacy program. The person or organization responsible for operating the published website should review and update this notice for the applicable locations and services before relying on it.
        </p>
        <h2>Information handled by this starter</h2>
        <p>
          The application includes no visitor accounts, contact form, payment flow, or third-party analytics library. A hosting or delivery provider may process technical request information as part of serving and protecting a website. Confirm the provider, data categories, retention, and any additional processing before publication.
        </p>
        <h2>Cookies and external websites</h2>
        <p>
          No site feature in this starter depends on an account or preference cookie. Review the final hosting setup for any technical cookies or other storage. Links to third-party websites, including INDlop, lead to services with their own privacy practices; this starter does not control those practices.
        </p>
        <h2>Questions and updates</h2>
        <p>
          A verified privacy contact has not been supplied, so none is stated here. Add an appropriate contact route, effective date, and any required disclosures before using this notice on a live site. Update the notice if the site’s data practices change.
        </p>
        <p>
          This text is a drafting baseline, not legal advice or a representation that the published site complies with any particular privacy law.
        </p>
      </div>
    </PageIntro>
  );
}
