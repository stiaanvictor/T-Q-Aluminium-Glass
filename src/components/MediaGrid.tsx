"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { MediaType } from "@/lib/gallery";

export type GridItem = { src: string; type: MediaType };

// Square grid with a click-to-view lightbox. Works for both the full gallery
// and the 4-up home preview.
export function MediaGrid({
  items,
  gridClassName = "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4",
}: {
  items: GridItem[];
  gridClassName?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );

  // Lock scroll + wire keyboard controls while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, prev, next]);

  const active = openIndex === null ? null : items[openIndex];

  return (
    <>
      <ul className={gridClassName}>
        {items.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block aspect-square w-full overflow-hidden bg-ink/5"
              aria-label={`View item ${i + 1}`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={`Gallery item ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <>
                  <video
                    src={`${item.src}#t=0.1`}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-ink/60 text-paper ring-1 ring-white/30">
                      <Play strokeWidth={1.5} className="h-5 w-5 translate-x-0.5" />
                    </span>
                  </span>
                </>
              )}
            </button>
          </li>
        ))}
      </ul>

      {active && openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center text-paper/80 hover:text-paper"
          >
            <X strokeWidth={1.5} className="h-7 w-7" />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous"
                className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center text-paper/80 hover:text-paper sm:left-4"
              >
                <ChevronLeft strokeWidth={1.5} className="h-8 w-8" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next"
                className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center text-paper/80 hover:text-paper sm:right-4"
              >
                <ChevronRight strokeWidth={1.5} className="h-8 w-8" />
              </button>
            </>
          )}

          <div
            className="relative flex max-h-[85vh] max-w-[92vw] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {active.type === "image" ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={active.src}
                alt={`Gallery item ${openIndex + 1}`}
                className="max-h-[85vh] max-w-[92vw] object-contain"
              />
            ) : (
              <video
                src={active.src}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-[92vw] object-contain"
              />
            )}
            <span className="mt-3 font-sans text-xs text-paper/60">
              {openIndex + 1} / {items.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
