// Centralised image sources. These are PLACEHOLDERS pulled from Unsplash so the
// layout reads correctly; replace each with a local /public file later by
// editing only this object (e.g. hero: "/img/hero.jpg").
//
// Unsplash direct URLs are used with next/image (see next.config.mjs remotePatterns).

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Blue-hour home with aluminium sliding glass doors (local asset)
  hero: "/img/hero.jpg",
  // Interior with large glazing (Why T&Q — local asset)
  aboutPrimary: "/img/why-tq.jpg",
  aboutSecondary: u("photo-1600607687939-ce8a6c25118c", 1000),
  // Contact / CTA supporting image
  contact: u("photo-1600566753086-00f18fb6b3ea", 1400),

  // Service imagery (local assets)
  doors: "/img/service-doors.jpg",
  renovation: "/img/service-renovation.jpg",
  windows: "/img/service-windows.jpg",
  sliding: "/img/service-sliding.jpg",
  roofing: "/img/service-roofing.jpg",
};

// Map service slug -> image so components can look them up.
export const serviceImage: Record<string, string> = {
  deure: images.doors,
  opknapping: images.renovation,
  vensters: images.windows,
  "palace-skuifdeure": images.sliding,
  "dakke-plafonne-afskortings": images.roofing,
};
