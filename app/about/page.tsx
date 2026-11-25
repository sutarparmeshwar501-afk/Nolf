import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "About Nolf",
  description:
    "Learn about Nolf, a technology brand focused on building thoughtful digital products and experiences.",
};

export default function AboutPage() {
  return (
    <PageIntro
      eyebrow="About Nolf"
      title="Thoughtful technology, clearly considered."
      summary="Nolf is a technology brand focused on building thoughtful digital products and experiences."
    >
      <div className="prose-copy max-w-3xl">
        <h2>A brand with a product point of view</h2>
        <p>
          Nolf brings its technology perspective to digital products and experiences. The focus is simple: make each product thoughtful, useful, and clear in how it meets people.
        </p>
        <h2>Distinct identities</h2>
        <p>
          INDlop is the first product featured on this site. It is presented under its own name and identity, separate from the Nolf brand.
        </p>
        <p>
          <Link href="/products">Explore the Products page</Link> or visit the <Link href="https://indlop.com" target="_blank" rel="noreferrer noopener">INDlop website<span className="sr-only"> (opens in a new tab)</span></Link> to learn more about the product.
        </p>
      </div>
    </PageIntro>
  );
}
