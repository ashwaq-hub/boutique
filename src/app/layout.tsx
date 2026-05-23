import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Boutique — Premium Personal Styling",
  description:
    "Elevate your wardrobe with curated personal styling, expert consultations, and bespoke fashion advice tailored exclusively to you.",
  keywords: ["personal styling", "boutique", "fashion", "wardrobe curation"],
  openGraph: {
    title: "Boutique — Premium Personal Styling",
    description: "Elevate your wardrobe with curated personal styling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
