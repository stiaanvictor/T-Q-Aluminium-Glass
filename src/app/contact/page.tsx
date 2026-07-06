"use client";

import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
import { useLang } from "@/components/LanguageProvider";

export default function KontakPage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        intro={t.contact.intro}
      />

      <section className="shell pb-28 md:pb-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          {/* Direct contact details */}
          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="lg:border-l lg:border-[color:var(--hairline)] lg:pl-12">
              <p className="eyebrow">{t.contact.directEyebrow}</p>

              <ul className="mt-8 space-y-8">
                <ContactItem
                  icon={<Phone strokeWidth={1.5} className="h-5 w-5" />}
                  label={t.contact.callLabel}
                  value={site.phoneDisplay}
                  href={`tel:+${site.phoneIntl}`}
                />
                <ContactItem
                  icon={<Mail strokeWidth={1.5} className="h-5 w-5" />}
                  label={t.contact.emailLabel}
                  value={site.email}
                  href={`mailto:${site.email}`}
                  compact
                />
                <ContactItem
                  icon={<MapPin strokeWidth={1.5} className="h-5 w-5" />}
                  label={t.contact.areaLabel}
                  value={t.location}
                />
                <ContactItem
                  icon={<Facebook strokeWidth={1.5} className="h-5 w-5" />}
                  label={t.contact.facebookLabel}
                  value={t.contact.followUs}
                  href={site.facebook}
                  external
                />
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
  compact,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  // Smaller value type so long strings (the email) stay on one line on mobile.
  compact?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="mt-1 flex-none text-brand">{icon}</span>
      <div className="min-w-0">
        <p className="eyebrow">{label}</p>
        <p
          className={[
            "mt-1 [overflow-wrap:anywhere] font-display font-medium tracking-tightest text-ink",
            compact ? "text-base sm:text-lg" : "text-xl",
          ].join(" ")}
        >
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) return <li>{content}</li>;

  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group block transition-opacity hover:opacity-70"
      >
        {content}
      </a>
    </li>
  );
}
