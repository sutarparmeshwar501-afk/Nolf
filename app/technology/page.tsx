import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore Nolf's thoughtful, product-led approach to digital technology, clarity, and considered experiences.",
};

export default function TechnologyPage() {
  return (
    <PageIntro
      eyebrow="Technology"
      title="Technology in service of the experience."
      summary="A considered technology perspective starts with the experience to be created and the needs it should meet."
    >
      <div className="prose-copy max-w-3xl">
        <h2>Purpose before complexity</h2>
        <p>
          A product’s technology should support what the product is there to do. Keep complexity in proportion, make decisions with the user experience in view, and let the needs of each product guide its implementation.
        </p>
        <h2>Clarity and access</h2>
        <p>
          Clear interaction and accessible foundations belong in the product conversation from the outset. They are part of making digital experiences thoughtful, not a finishing touch.
        </p>
        <h2>A deliberate foundation</h2>
        <p>
          This page describes a product philosophy, not a published engineering specification. No particular software stack, performance figure, or technical capability is claimed here.
        </p>
      </div>
    </PageIntro>
  );
}
