import type { ReactNode } from "react";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  summary: string;
  children: ReactNode;
}

export function PageIntro({ eyebrow, title, summary, children }: PageIntroProps) {
  return (
    <main id="main-content" className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <header className="motion-enter max-w-5xl border-b border-line pb-12 pt-16 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[0.98] tracking-[-0.055em] text-ink sm:text-6xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
          {summary}
        </p>
      </header>
      <div className="max-w-5xl py-12 sm:py-16 lg:py-20">{children}</div>
    </main>
  );
}
