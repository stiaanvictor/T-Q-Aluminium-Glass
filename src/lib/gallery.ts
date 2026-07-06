// Ordered gallery manifest. The number shown on each square is its 1-based
// position in THIS array. To remove an item, delete its line; to reorder,
// move lines around. Everything else (gallery page + home preview) follows
// this order automatically.

export type MediaType = "image" | "video";
export type MediaItem = { src: string; type: MediaType };

export const gallery: MediaItem[] = [
  { src: "/gallery/media-001.jpeg", type: "image" },
  { src: "/gallery/media-002.jpeg", type: "image" },
  { src: "/gallery/media-003.jpeg", type: "image" },
  { src: "/gallery/media-004.jpeg", type: "image" },
  { src: "/gallery/media-007.jpeg", type: "image" },
  { src: "/gallery/media-009.jpeg", type: "image" },
  { src: "/gallery/media-010.jpeg", type: "image" },
  { src: "/gallery/media-011.jpeg", type: "image" },
  { src: "/gallery/media-012.jpeg", type: "image" },
  { src: "/gallery/media-013.jpeg", type: "image" },
  { src: "/gallery/media-014.jpeg", type: "image" },
  { src: "/gallery/media-018.jpeg", type: "image" },
  { src: "/gallery/media-021.jpeg", type: "image" },
  { src: "/gallery/media-022.jpeg", type: "image" },
  { src: "/gallery/media-023.jpeg", type: "image" },
  { src: "/gallery/media-028.jpeg", type: "image" },
  { src: "/gallery/media-029.jpeg", type: "image" },
  { src: "/gallery/media-030.jpeg", type: "image" },
  { src: "/gallery/media-031.jpeg", type: "image" },
  { src: "/gallery/media-032.jpeg", type: "image" },
  { src: "/gallery/media-033.jpeg", type: "image" },
  { src: "/gallery/media-034.jpeg", type: "image" },
  { src: "/gallery/media-035.jpeg", type: "image" },
  { src: "/gallery/media-036.jpeg", type: "image" },
  { src: "/gallery/media-038.jpeg", type: "image" },
  { src: "/gallery/media-039.jpeg", type: "image" },
  { src: "/gallery/media-041.jpeg", type: "image" },
  { src: "/gallery/media-042.jpeg", type: "image" },
  { src: "/gallery/media-043.jpeg", type: "image" },
  { src: "/gallery/media-044.jpeg", type: "image" },
  { src: "/gallery/media-046.mp4", type: "video" },
  { src: "/gallery/media-047.mp4", type: "video" },
  { src: "/gallery/media-048.mp4", type: "video" },
  { src: "/gallery/media-049.mp4", type: "video" },
  { src: "/gallery/media-054.mp4", type: "video" },
  { src: "/gallery/media-055.mp4", type: "video" },
  { src: "/gallery/media-058.mp4", type: "video" },
  { src: "/gallery/media-059.mp4", type: "video" },
];

// Curated selection shown in the home page "Our work" preview, in order.
export const homeGallery: MediaItem[] = [
  { src: "/gallery/media-007.jpeg", type: "image" },
  { src: "/gallery/media-038.jpeg", type: "image" },
  { src: "/gallery/media-044.jpeg", type: "image" },
  { src: "/gallery/media-036.jpeg", type: "image" },
];
