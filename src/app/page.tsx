"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ServiceRow } from "@/components/ServiceRow";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { images } from "@/lib/images";
import { serviceMeta } from "@/lib/site";
import { useLang } from "@/components/LanguageProvider";

export default function HomePage() {
  const { t } = useLang();

  return (
    <>
      <Hero />

      {/* Intro statement */}
      <section className="shell py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="eyebrow">{t.home.whoEyebrow}</p>
          </Reveal>
          <Reveal className="md:col-span-9" delay={0.05}>
            <p className="font-display text-3xl font-medium leading-[1.15] tracking-tightest sm:text-4xl md:text-[2.9rem]">
              {t.home.introMain}
              <span className="text-muted">{t.home.introMuted}</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services list */}
      <section id="dienste" className="shell pb-24 md:pb-32">
        <Reveal className="flex items-end justify-between rule-b pb-6">
          <h2 className="font-display text-2xl font-semibold tracking-tightest md:text-3xl">
            {t.home.servicesHeading}
          </h2>
          <Link
            href="/services"
            className="link-sweep hidden font-sans text-sm font-medium sm:inline-flex sm:items-center sm:gap-1"
          >
            {t.home.allServices}{" "}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>

        <div>
          {serviceMeta.map((s) => (
            <ServiceRow key={s.slug} slug={s.slug} index={s.index} />
          ))}
        </div>
      </section>

      {/* Why choose us — big paired image + values, no boxes */}
      <section className="bg-ink text-paper">
        <div className="shell py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={images.aboutPrimary}
                  alt="Aluminium and glass work in a modern interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="flex flex-col justify-center">
              <Reveal>
                <p className="eyebrow text-paper/60">{t.home.whyEyebrow}</p>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tightest md:text-5xl">
                  {t.home.whyHeading}
                </h2>
              </Reveal>

              <StaggerGroup className="mt-12 divide-y divide-[color:var(--hairline-invert)]">
                {t.home.why.map((item) => (
                  <StaggerItem key={item.t} className="py-6 first:pt-0">
                    <div className="flex gap-6">
                      <span className="mt-1 h-px w-8 flex-none bg-red" />
                      <div>
                        <h3 className="font-display text-xl font-semibold tracking-tightest">
                          {item.t}
                        </h3>
                        <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-paper/70">
                          {item.d}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="shell py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">{t.home.processEyebrow}</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tightest md:text-5xl">
            {t.home.processHeading}
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.map((step, i) => (
            <StaggerItem key={step.title} className="rule-t-strong pt-6">
              <span className="font-display text-5xl font-semibold text-bone">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tightest">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Testimonials */}
      <section className="bg-bone">
        <div className="shell py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">{t.home.testimonialsEyebrow}</p>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-3">
            {t.testimonials.map((item) => (
              <StaggerItem key={item.name}>
                <div className="flex h-full flex-col">
                  <span className="font-display text-5xl leading-none text-red">
                    &ldquo;
                  </span>
                  <blockquote className="mt-4 font-display text-xl font-medium leading-snug tracking-tightest text-ink">
                    {item.quote}
                  </blockquote>
                  <div className="mt-6 border-t border-[color:var(--hairline)] pt-4">
                    <p className="font-sans text-sm font-semibold text-ink">
                      {item.name}
                    </p>
                    <p className="font-sans text-sm text-muted">{item.place}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="shell py-24 md:py-32">
        <Reveal className="flex flex-col items-start justify-between gap-10 rule-t-strong pt-14 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.02] tracking-tightest md:text-6xl">
            {t.home.ctaHeading}
          </h2>
          <div className="flex-none">
            <Link href="/contact" className="btn-primary">
              {t.cta.quote}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
