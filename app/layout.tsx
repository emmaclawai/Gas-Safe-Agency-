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
  title: "GasSafeBot | Emma — 24/7 AI Receptionist for Gas Engineers",
  description: "Never miss a gas job again. Emma is your AI receptionist who answers every call, books jobs into your calendar, and handles gas emergencies 24/7. Built exclusively for Gas Safe engineers.",
  keywords: "Gas Safe, engineers, AI receptionist, Emma, answering service, gas engineer, boiler repair, emergency calls, 24/7 answering",
  openGraph: {
    title: "GasSafeBot | Emma — 24/7 AI Receptionist for Gas Engineers",
    description: "Never miss a gas job again. Emma answers every call, books jobs into your calendar, and handles gas emergencies 24/7.",
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
