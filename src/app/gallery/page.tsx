"use client";

import { PageHeader } from "@/components/PageHeader";
import { MediaGrid } from "@/components/MediaGrid";
import { gallery } from "@/lib/gallery";
import { useLang } from "@/components/LanguageProvider";

export default function GalleryPage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        eyebrow={t.gallery_page.eyebrow}
        title={t.gallery_page.title}
        intro={t.gallery_page.intro}
      />

      <section className="shell pb-28 md:pb-36">
        <MediaGrid items={gallery} />
      </section>
    </>
  );
}
