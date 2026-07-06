"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { images } from "@/lib/images";
import { useLang } from "@/components/LanguageProvider";

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
  });

  return (
    <section
      id="hero"
      className="relative min-h-dvh w-full overflow-hidden bg-ink text-paper"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Modern aluminium and glass facade"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Targeted scrims: dark where the text/buttons sit (bottom-left),
            a thin strip up top for the nav, image stays crisp centre-right. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/65 to-transparent" />
      </div>

      <div className="shell relative flex min-h-dvh flex-col justify-end pb-16 pt-32">
        <motion.p {...rise(0.1)} className="eyebrow text-paper/70">
          {t.location}
        </motion.p>

        <motion.h1
          {...rise(0.2)}
          className="mt-6 max-w-4xl font-display text-[13vw] font-semibold leading-[0.92] tracking-tightest sm:text-7xl lg:text-8xl"
        >
          {t.hero.line1}
          <br />
          <span className="text-red">{t.hero.red}</span> {t.hero.line2}
        </motion.h1>

        <motion.p
          {...rise(0.32)}
          className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-paper/80"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          {...rise(0.44)}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link href="/contact" className="btn-primary">
            {t.cta.quote}
          </Link>
          <Link
            href="/services"
            className="btn text-paper link-sweep self-start sm:self-auto"
          >
            {t.cta.viewServices}
          </Link>
        </motion.div>

        {/* Thin frame line + scroll hint */}
        <motion.div
          {...rise(0.6)}
          className="mt-16 flex items-center gap-4 border-t border-[color:var(--hairline-invert)] pt-6 font-sans text-xs uppercase tracking-[0.2em] text-paper/50"
        >
          <ArrowDown strokeWidth={1.5} className="h-4 w-4 animate-bounce" />
          {t.hero.scroll}
        </motion.div>
      </div>
    </section>
  );
}
