import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GasSafeBot | Precision Marketing Partners",
  description: "Where Strategy Meets Systematic Execution. Built for Gas Safe Engineers. Premium websites, SEO, and AI-powered customer service.",
  keywords: "Gas Safe, engineers, marketing, websites, SEO, AI customer service, heating engineers",
  openGraph: {
    title: "GasSafeBot | Precision Marketing Partners",
    description: "Where Strategy Meets Systematic Execution. Built for Gas Safe Engineers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0A0A0F] text-[#F8F8F8]`}
      >
        {children}
      </body>
    </html>
  );
}
