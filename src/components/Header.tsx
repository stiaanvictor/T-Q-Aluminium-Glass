"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { useLang } from "@/components/LanguageProvider";

export function Header() {
  const pathname = usePathname();
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The home page has a dark full-bleed hero behind the transparent header, so
  // nav text must be light there. Everywhere else (and once scrolled onto the
  // solid paper bar) it must be dark.
  const onDark = pathname === "/" && !scrolled;

  return (
    <>
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-paper/90 backdrop-blur-md rule-b" : "bg-transparent",
      ].join(" ")}
    >
      <div className="shell flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-baseline gap-2 font-display text-lg font-semibold tracking-tightest"
          aria-label={`${site.name} — ${t.nav.home}`}
        >
          <span className="text-red">T&amp;Q</span>
          <span
            className={`hidden sm:inline ${onDark ? "text-paper" : "text-ink"}`}
          >
            Aluminium &amp; Glass
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "link-sweep font-sans text-sm font-medium tracking-wide transition-colors",
                  active
                    ? "text-red"
                    : onDark
                      ? "text-paper hover:text-red"
                      : "text-ink hover:text-red",
                ].join(" ")}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary text-xs">
            {t.cta.quote}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`md:hidden inline-flex h-11 w-11 items-center justify-center ${
            onDark ? "text-paper" : "text-ink"
          }`}
          aria-label="Open menu"
        >
          <Menu strokeWidth={1.5} className="h-6 w-6" />
        </button>
      </div>
    </header>

      {/* Mobile overlay menu — rendered as a SIBLING of <header> so it escapes
          the header's backdrop-blur containing block and covers the full viewport. */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] bg-ink text-paper md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="shell flex h-20 items-center justify-between">
              <span className="font-display text-lg font-semibold">
                <span className="text-red">T&amp;Q</span> Aluminium &amp; Glass
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center text-paper"
                aria-label="Close menu"
              >
                <X strokeWidth={1.5} className="h-6 w-6" />
              </button>
            </div>

            <nav className="shell mt-6 flex flex-col">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.05, duration: 0.4 }}
                  className="border-t border-[color:var(--hairline-invert)]"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-6 font-display text-4xl font-medium tracking-tightest"
                  >
                    {t.nav[item.key]}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="shell mt-10">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                {t.cta.quote}
              </Link>
              <p className="mt-8 font-sans text-sm text-paper/70">
                {site.phoneDisplay}
              </p>
              <p className="font-sans text-sm text-paper/70">{site.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
