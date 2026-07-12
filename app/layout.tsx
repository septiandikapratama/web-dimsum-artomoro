import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
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
    <html lang="id" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`}>
      <body className="overflow-x-hidden bg-cream font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
