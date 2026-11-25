import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building technology for what comes next",
  description:
    "Nolf is a technology brand focused on building thoughtful digital products and experiences.",
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0">
      <path d="M3.75 10h12.5m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main id="main-content" className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <section className="motion-enter flex min-h-[70vh] flex-col justify-center border-b border-line py-20 sm:min-h-[76vh] sm:py-28">
        <p className="eyebrow">Nolf / Technology brand</p>
        <h1 className="mt-7 max-w-6xl font-display text-[clamp(3.4rem,9.2vw,8.7rem)] leading-[0.91] tracking-[-0.065em] text-ink">
          Building technology for what comes next.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-600 sm:mt-10 sm:text-lg sm:leading-8">
          Nolf is a technology brand focused on building thoughtful digital products and experiences.
        </p>
        <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
          <a href="#products" className="text-link">
            Explore our products <ArrowIcon />
          </a>
          <Link href="/about" className="text-link text-neutral-600">
            About Nolf <ArrowIcon />
          </Link>
        </div>
      </section>

      <section id="products" aria-labelledby="products-heading" className="scroll-mt-8 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">01 / Products</p>
            <h2 id="products-heading" className="mt-5 max-w-lg font-display text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl">
              Made with intention.
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              Nolf brings thoughtful digital products into focus. INDlop is the first product featured here, presented under its own distinct brand.
            </p>
            <article className="mt-9 border-y border-line py-6 sm:py-7">
              <a
                href="https://indlop.com"
                target="_blank"
                rel="noreferrer noopener"
                className="group block rounded-sm focus-visible:outline-offset-4"
                aria-label="Explore INDlop, a product featured by Nolf (opens in a new tab)"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow">Featured product</p>
                    <h3 className="mt-3 font-display text-4xl tracking-[-0.045em] sm:text-5xl">INDlop</h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                      A distinct product brand within Nolf’s technology portfolio.
                    </p>
                  </div>
                  <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                    <ArrowIcon />
                  </span>
                </div>
                <span className="sr-only">Visit indlop.com (opens in a new tab)</span>
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
        </div>
      </section>

      <section aria-labelledby="more-heading" className="border-t border-line py-14 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-[0.8fr_1.2fr] sm:gap-12">
          <div>
            <p className="eyebrow">A little more about Nolf</p>
            <h2 id="more-heading" className="mt-4 font-display text-3xl tracking-[-0.04em] sm:text-4xl">
              A clear point of view.
            </h2>
          </div>
          <div className="flex flex-col items-start">
            <p className="max-w-xl text-base leading-7 text-neutral-600">
              Learn about the Nolf brand, explore its technology perspective, or find the latest confirmed information.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
              <Link href="/about" className="text-link">About Nolf <ArrowIcon /></Link>
              <Link href="/technology" className="text-link">Technology <ArrowIcon /></Link>
              <Link href="/newsroom" className="text-link">Newsroom <ArrowIcon /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
