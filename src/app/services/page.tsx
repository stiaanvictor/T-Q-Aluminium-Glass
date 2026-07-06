"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { serviceMeta } from "@/lib/site";
import { serviceImage } from "@/lib/images";
import { useLang } from "@/components/LanguageProvider";

export default function DienstePage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        eyebrow={t.services_page.eyebrow}
        title={t.services_page.title}
        intro={t.services_page.intro}
      />

      <div className="shell pb-24 md:pb-32">
        {serviceMeta.map((meta, i) => {
          const service = t.services[meta.slug];
          const img = serviceImage[meta.slug];
          const flip = i % 2 === 1;
          return (
            <section
              key={meta.slug}
              id={meta.slug}
              className="scroll-mt-28 rule-t py-16 md:py-24"
            >
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                {/* Text */}
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <span className="font-display text-6xl font-semibold text-bone">
                    {meta.index}
                  </span>
                  <h2 className="mt-4 font-display text-4xl font-semibold tracking-tightest md:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <Check
                          strokeWidth={2}
                          className="mt-0.5 h-5 w-5 flex-none text-red"
                        />
                        <span className="font-sans text-sm text-ink">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="btn-ghost mt-10 inline-flex">
                    {t.services_page.ask} {service.title}
                  </Link>
                </Reveal>

                {/* Image */}
                <Reveal delay={0.08} className={flip ? "lg:order-1" : ""}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA strip */}
      <section className="bg-ink text-paper">
        <div className="shell flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tightest md:text-4xl">
            {t.services_page.ctaHeading}
          </h2>
          <Link href="/contact" className="btn-primary flex-none">
            {t.cta.chat}
          </Link>
        </div>
      </section>
    </>
  );
}
