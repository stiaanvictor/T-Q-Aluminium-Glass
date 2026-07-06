import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const png = readFileSync(join(process.cwd(), "public", "og-banner.png"));
  return new Response(png, { headers: { "Content-Type": "image/png" } });
}
