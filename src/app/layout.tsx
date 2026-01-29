import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VOIDBLOOM — Where Emptiness Becomes Art",
  description: "Avant-garde digital art & immersive experience studio crafting environments that respond, evolve, and resonate.",
  keywords: ["digital art", "immersive experience", "avant-garde", "voidbloom", "interactive art"],
  openGraph: {
    title: "VOIDBLOOM — Where Emptiness Becomes Art",
    description: "Avant-garde digital art & immersive experience studio",
    url: "https://voidbloom.art", // Placeholder, will be updated by Netlify if configured
    siteName: "VOIDBLOOM",
    images: [
      {
        url: "/og-image.jpg", // Suggested image path
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOIDBLOOM",
    description: "Avant-garde digital art & immersive experience studio",
    images: ["/og-image.jpg"],
  },
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
