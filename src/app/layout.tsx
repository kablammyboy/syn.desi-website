import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://syn.desi";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Syndesi IT Solutions — Managed IT, Consultation & Support",
    template: "%s — Syndesi IT Solutions",
  },
  description:
    "Syndesi IT Solutions is your trusted partner in technology consultation, implementation, and management. Proactive IT support for businesses across Florida, Georgia, and beyond.",
  keywords: [
    "IT support",
    "managed IT services",
    "Jacksonville IT",
    "technology consultation",
    "cybersecurity",
    "remote management",
    "Syndesi",
  ],
  openGraph: {
    title: "Syndesi IT Solutions",
    description:
      "Your trusted partner in technology consultation, implementation, and management.",
    url: siteUrl,
    siteName: "Syndesi IT Solutions",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
