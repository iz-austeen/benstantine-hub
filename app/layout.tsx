import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Benstanthub Ventures | Errands, handled.",
  description:
    "Send us the task, we'll get it done. Package pickups, airport and courier drop-offs, and buy-for-me errands, all arranged over WhatsApp.",
  openGraph: {
    title: "Benstanthub Ventures | Errands, handled.",
    description:
      "Package pickups, airport and courier drop-offs, and buy-for-me errands, arranged over WhatsApp.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0C0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
