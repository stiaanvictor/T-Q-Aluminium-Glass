import { site } from "./site";
import { translations, type Locale } from "./i18n";

// Build a wa.me link with a pre-filled message. No email is sent and nothing is
// stored — submitting the contact form simply opens WhatsApp with this text.
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export function quoteMessage(
  locale: Locale,
  fields: {
    naam?: string;
    telefoon?: string;
    diens?: string;
    boodskap?: string;
  }
): string {
  const w = translations[locale].whatsapp;
  const lines = [
    w.greeting,
    "",
    fields.naam ? `${w.fName}: ${fields.naam}` : "",
    fields.telefoon ? `${w.fPhone}: ${fields.telefoon}` : "",
    fields.diens ? `${w.fService}: ${fields.diens}` : "",
    fields.boodskap ? `${w.fDetails}: ${fields.boodskap}` : "",
  ].filter(Boolean);
  return lines.join("\n");
}
