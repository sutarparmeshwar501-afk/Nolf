import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Learn about career information at Nolf. No roles or hiring contact details are included in this starter.",
};

export default function CareersPage() {
  return (
    <PageIntro
      eyebrow="Careers"
      title="Work worth thinking about."
      summary="A place for confirmed career information from Nolf."
    >
      <div className="max-w-3xl border-l border-line pl-5 sm:pl-7">
        <p className="eyebrow">Career information</p>
        <p className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg">
          No confirmed roles or application channel have been provided for this website starter. No open positions are listed here.
        </p>
      </div>
    </PageIntro>
  );
}
