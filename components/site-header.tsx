"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  function linkClass(href: string) {
    const isCurrent = pathname === href;
    return `nav-link ${isCurrent ? "nav-link-current" : ""}`;
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="wordmark"
            aria-label="Nolf home"
            onClick={() => setMenuOpen(false)}
          >
            NOLF
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="menu-toggle lg:hidden"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              {menuOpen ? (
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>

        <div id="mobile-navigation" className={`mobile-menu lg:hidden ${menuOpen ? "is-open" : ""}`}>
          <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-5 pb-6 sm:px-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
                <span aria-hidden="true" className="text-sm text-neutral-400">↗</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
