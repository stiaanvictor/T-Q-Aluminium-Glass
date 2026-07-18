"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { nav, serviceMeta, site } from "@/lib/site";
import { useLang } from "@/components/LanguageProvider";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-ink text-paper">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand + statement */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={site.name}
                width={48}
                height={48}
                className="h-11 w-11"
              />
              <span className="font-display text-2xl font-semibold tracking-tightest">
                Aluminium &amp; Glass
              </span>
            </div>
            <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-paper/65">
              {t.footer.statement}
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm text-paper/70 transition-colors hover:text-paper"
            >
              <Facebook strokeWidth={1.5} className="h-4 w-4" />
              {t.footer.followFacebook}
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="eyebrow text-paper/50">{t.footer.browse}</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-sweep font-sans text-sm text-paper/80 hover:text-paper"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <p className="eyebrow text-paper/50">{t.footer.services}</p>
            <ul className="mt-5 space-y-3">
              {serviceMeta.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="link-sweep font-sans text-sm text-paper/80 hover:text-paper"
                  >
                    {t.services[s.slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="eyebrow text-paper/50">{t.footer.contact}</p>
            <ul className="mt-5 space-y-3 font-sans text-sm text-paper/80">
              <li>
                <a
                  href={`tel:+${site.phoneIntl}`}
                  className="link-sweep hover:text-paper"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-sweep break-all hover:text-paper"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-paper/60">{t.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[color:var(--hairline-invert)] pt-8 font-sans text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t.footer.rights} · Website by{" "}
            <a href="https://www.nexsitestudios.co.za/" target="_blank" rel="noopener" className="hover:underline">Nexsite Studios</a>
          </p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
