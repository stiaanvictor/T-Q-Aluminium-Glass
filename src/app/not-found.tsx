"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";

export default function NotFound() {
  const { t } = useLang();

  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center py-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 max-w-2xl font-display text-6xl font-semibold leading-[0.95] tracking-tightest md:text-8xl">
        {t.notFound.title}
      </h1>
      <p className="mt-6 max-w-md font-sans text-lg text-muted">
        {t.notFound.body}
      </p>
      <div className="mt-10">
        <Link href="/" className="btn-primary">
          {t.notFound.button}
        </Link>
      </div>
    </section>
  );
}
