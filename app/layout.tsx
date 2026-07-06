import type { Metadata } from "next";
import { Titan_One, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const titanOne = Titan_One({
  variable: "--font-titan-one",
  weight: "400",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
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
    <html lang="id" className={`${titanOne.variable} ${plusJakartaSans.variable}`}>
      <body className="overflow-x-hidden bg-krem font-sans text-coklat">
        {children}
      </body>
    </html>
  );
}
