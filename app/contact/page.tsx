import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find verified contact options for Nolf. This starter lists no general contact channel; product information is available at INDlop.com.",
};

export default function ContactPage() {
  return (
    <PageIntro
      eyebrow="Contact"
      title="A clear way to get in touch matters."
      summary="This page only lists contact options that can be verified."
    >
      <div className="prose-copy max-w-3xl">
        <h2>General enquiries</h2>
        <p>
          Have a question or need assistance?

            We&apos;re here to help. For business inquiries, product-related questions, or general support, please reach out to our team.

Email: s@nolf.in
        </p>
        <h2>INDlop product information</h2>
        <p>
          For information about INDlop, visit its official product website. INDlop is presented separately from Nolf.
        </p>
        <p>
          <a href="https://indlop.com" target="_blank" rel="noreferrer noopener">
            Visit indlop.com<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>
    </PageIntro>
  );
}
