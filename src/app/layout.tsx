import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VOIDBLOOM — Where Emptiness Becomes Art",
  description: "Avant-garde digital art & immersive experience studio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
