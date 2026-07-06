"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceSlug } from "@/lib/i18n";
import { useLang } from "@/components/LanguageProvider";

// Editorial numbered list row — hairline divider, big type, restrained hover
// (title shifts to red, arrow slides). No card, no border-radius, no overlay.
export function ServiceRow({
  slug,
  index,
}: {
  slug: ServiceSlug;
  index: string;
}) {
  const { t } = useLang();
  const service = t.services[slug];

  return (
    <Link href={`/services#${slug}`} className="group block rule-t">
      <div className="grid grid-cols-12 items-baseline gap-4 py-8 md:py-10">
        <span className="col-span-2 font-sans text-sm font-semibold text-muted md:col-span-1">
          {index}
        </span>

        <h3 className="col-span-10 font-display text-3xl font-semibold tracking-tightest transition-colors duration-300 group-hover:text-red md:col-span-6 md:text-5xl">
          {service.title}
        </h3>

        <p className="col-span-12 mt-3 max-w-md font-sans text-sm leading-relaxed text-muted md:col-span-4 md:mt-0">
          {service.summary}
        </p>

        <span className="col-span-12 mt-4 flex justify-start md:col-span-1 md:mt-0 md:justify-end">
          <ArrowUpRight
            strokeWidth={1.5}
            className="h-7 w-7 text-ink transition-all duration-300 group-hover:text-red group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </span>
      </div>
    </Link>
  );
}
