import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";
import Watermark from "./Watermark";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const description =
  "Op maat aluminium- en glaswerk in Kaapstad: deure, vensters, Palace skuifdeure, opknappings, dakke, plafonne en afskortings.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tqaluminumandglass.co.za"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "aluminium",
    "glass",
    "glaswerk",
    "aluminium deure",
    "vensters",
    "Palace skuifdeure",
    "skuifdeure",
    "opknapping",
    "dakke",
    "plafonne",
    "afskortings",
    "Cape Town",
    "Kaapstad",
    "T&Q Aluminium & Glass",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description,
    url: "https://www.tqaluminumandglass.co.za",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#21231d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-dvh">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
        <Watermark />
        <Analytics />
      </body>
    </html>
  );
}
