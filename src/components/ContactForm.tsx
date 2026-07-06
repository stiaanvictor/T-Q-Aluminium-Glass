"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { serviceMeta } from "@/lib/site";
import { quoteMessage, whatsappLink } from "@/lib/whatsapp";
import { useLang } from "@/components/LanguageProvider";

// Underline-style fields (no boxed inputs). On submit we open WhatsApp with a
// pre-filled message — nothing is emailed or stored.
export function ContactForm() {
  const { t, locale } = useLang();
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [diens, setDiens] = useState("");
  const [boodskap, setBoodskap] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const link = whatsappLink(
      quoteMessage(locale, { naam, telefoon, diens, boodskap })
    );
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <Field
        id="naam"
        label={t.form.name}
        required
        value={naam}
        onChange={setNaam}
        autoComplete="name"
        placeholder={t.form.namePlaceholder}
      />

      <Field
        id="telefoon"
        label={t.form.phone}
        type="tel"
        required
        value={telefoon}
        onChange={setTelefoon}
        autoComplete="tel"
        inputMode="tel"
        placeholder={t.form.phonePlaceholder}
      />

      <div>
        <label htmlFor="diens" className="eyebrow mb-3 block">
          {t.form.service}
        </label>
        <select
          id="diens"
          value={diens}
          onChange={(e) => setDiens(e.target.value)}
          className="w-full appearance-none border-0 border-b border-[color:var(--hairline-strong)] bg-transparent pb-3 font-sans text-lg text-ink outline-none transition-colors focus:border-red"
        >
          <option value="">{t.form.servicePlaceholder}</option>
          {serviceMeta.map((s) => (
            <option key={s.slug} value={t.services[s.slug].title}>
              {t.services[s.slug].title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="boodskap" className="eyebrow mb-3 block">
          {t.form.details}
        </label>
        <textarea
          id="boodskap"
          value={boodskap}
          onChange={(e) => setBoodskap(e.target.value)}
          rows={3}
          placeholder={t.form.detailsPlaceholder}
          className="w-full resize-none border-0 border-b border-[color:var(--hairline-strong)] bg-transparent pb-3 font-sans text-lg text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-red"
        />
      </div>

      <div className="pt-2">
        <button type="submit" className="btn-primary group">
          {t.form.submit}
          <ArrowUpRight
            strokeWidth={2}
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
        <p className="mt-4 font-sans text-xs leading-relaxed text-muted">
          {t.form.note}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
  inputMode,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "tel" | "text" | "email";
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-3 block">
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-0 border-b border-[color:var(--hairline-strong)] bg-transparent pb-3 font-sans text-lg text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-red"
      />
    </div>
  );
}
