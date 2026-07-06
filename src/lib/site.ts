// Non-translatable constants + structural data. Customer-facing copy lives in
// src/lib/i18n.ts (English default, Afrikaans toggle).

import type { ServiceSlug } from "./i18n";

export const site = {
  name: "T&Q Aluminium & Glass",
  shortName: "T&Q",
  tagline: "Aluminium & glass specialists in Cape Town",
  phoneDisplay: "+27 81 651 3353",
  phoneIntl: "27816513353", // used for tel: and wa.me
  email: "tandqaluminiumandglass@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61576158632684",
};

// Navigation: stable hrefs + a dictionary key for the label.
export const nav: { key: "home" | "services" | "about" | "contact"; href: string }[] = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

// Structural service list (order + numbering). Text is resolved per-locale.
export const serviceMeta: { slug: ServiceSlug; index: string }[] = [
  { slug: "deure", index: "01" },
  { slug: "opknapping", index: "02" },
  { slug: "vensters", index: "03" },
  { slug: "palace-skuifdeure", index: "04" },
  { slug: "dakke-plafonne-afskortings", index: "05" },
];
