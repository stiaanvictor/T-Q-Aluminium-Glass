import { Reveal } from "@/components/Reveal";

// Editorial page header — sits below the fixed nav, hairline underline, no box.
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="shell pt-36 pb-14 md:pt-44 md:pb-20">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h1 className="mt-6 max-w-4xl font-display text-6xl font-semibold leading-[0.95] tracking-tightest md:text-8xl">
          {title}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            {intro}
          </p>
        </Reveal>
      )}
    </section>
  );
}
