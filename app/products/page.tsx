import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Meet INDlop, the first product featured by Nolf. Visit the INDlop website to learn more about the product.",
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0">
      <path d="M3.75 10h12.5m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function ProductsPage() {
  return (
    <PageIntro
      eyebrow="Products"
      title="Digital products with their own point of view."
      summary="Nolf is focused on thoughtful digital products. INDlop is the first product featured here, presented as its own distinct brand."
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow">Featured product / 01</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-600">
            Explore the product directly through its official website.
          </p>
        </div>
        <article>
          <a
            href="https://indlop.com"
            target="_blank"
            rel="noreferrer noopener"
            className="group block border-y border-line py-7 transition-colors hover:bg-soft focus-visible:outline-offset-4 sm:px-6"
            aria-label="Explore INDlop, a distinct product brand featured by Nolf (opens in a new tab)"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="eyebrow">Product brand</p>
                <h2 className="mt-3 font-display text-5xl tracking-[-0.05em]">INDlop</h2>
                <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                  A distinct product brand within Nolf’s technology portfolio.
                </p>
                <span className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-ink">
                  Explore INDlop <ArrowIcon />
                </span>
              </div>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                <ArrowIcon />
              </span>
            </div>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="https://indlop.com"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex min-h-11 items-center gap-3 border border-ink px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-offset-4 motion-reduce:transition-none"
          >
            Visit INDlop <ArrowIcon />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </article>
      </div>
    </PageIntro>
  );
}
