"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { images } from "@/lib/images";
import { useLang } from "@/components/LanguageProvider";

export default function OorOnsPage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        intro={t.about.intro}
      />

      {/* Two-image editorial band */}
      <section className="shell pb-8">
        <div className="grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={images.aboutPrimary}
                alt="Interior with large glass panels"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden md:h-full">
              <Image
                src={images.aboutSecondary}
                alt="Aluminium detail work"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="shell py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="eyebrow">{t.about.approachEyebrow}</p>
          </Reveal>
          <div className="md:col-span-9">
            <Reveal>
              <p className="font-display text-3xl font-medium leading-[1.15] tracking-tightest md:text-4xl">
                {t.about.approachMain}
                <span className="text-muted">{t.about.approachMuted}</span>
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-muted">
                {t.about.approachBody}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bone">
        <div className="shell py-24 md:py-32">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tightest md:text-5xl">
              {t.about.valuesHeading}
            </h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-3">
            {t.about.values.map((v) => (
              <StaggerItem key={v.t}>
                <div className="border-t-2 border-red pt-6">
                  <h3 className="font-display text-2xl font-semibold tracking-tightest">
                    {v.t}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                    {v.d}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Process recap */}
      <section className="shell py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">{t.about.processEyebrow}</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tightest md:text-5xl">
            {t.about.processHeading}
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

        <Reveal className="mt-16">
          <Link href="/contact" className="btn-primary">
            {t.cta.quote}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
