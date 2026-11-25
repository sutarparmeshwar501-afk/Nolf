import Link from "next/link";

const footerSections = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Nolf" },
      { href: "/technology", label: "Technology" },
      { href: "/newsroom", label: "Newsroom" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: "/products", label: "Products" },
      { href: "https://indlop.com", label: "INDlop", external: true },
    ],
  },
  {
    title: "Support",
    links: [{ href: "/contact", label: "Contact Us" }],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(15rem,1.35fr)_2fr] lg:gap-16">
          <div className="max-w-sm">
            <Link href="/" className="wordmark" aria-label="Nolf home">
              NOLF
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-600">
              A technology brand focused on thoughtful digital products and experiences.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-4 sm:gap-x-6"
          >
            {footerSections.map((section) => (
              <section key={section.title} aria-labelledby={`footer-${section.title.toLowerCase()}`}>
                <h2
                  id={`footer-${section.title.toLowerCase()}`}
                  className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-900"
                >
                  {section.title}
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-link"
                        >
                          {link.label}<span aria-hidden="true"> ↗</span>
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : (
                        <Link href={link.href} className="footer-link">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-line pt-5 text-xs text-neutral-500 sm:mt-12">
          <p>© {new Date().getFullYear()} Nolf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
