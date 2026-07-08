import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dimsum Artomoro — Dimsum Favorit Lampung",
  description:
    "Dimsum Artomoro — dimsum mentai, dimsum bakar, dimsum kuah & wonton chili oil. Fresh setiap hari dari central kitchen. 6 outlet di Lampung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${plusJakartaSans.variable}`}>
      <body className="overflow-x-hidden bg-cream font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
