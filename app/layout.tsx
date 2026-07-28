import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Geist,
  Geist_Mono,
} from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "equis-nexus.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    title: "Equis Nexus | Real Estate Investment in Japan",
    description:
      "Equis Nexus is a Tokyo-based real-estate investment and asset-management company connecting Japanese assets with long-term international opportunity.",
    metadataBase: baseUrl,
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        ca: "/ca",
        es: "/es",
        ja: "/ja",
        "x-default": "/",
      },
    },
    icons: {
      icon: "/og.png",
      shortcut: "/og.png",
    },
    openGraph: {
      title: "Equis Nexus",
      description: "Where opportunity and connection meet.",
      url: baseUrl,
      siteName: "Equis Nexus",
      type: "website",
      images: [
        {
          url: new URL("/og-multilingual.png", baseUrl).toString(),
          width: 1200,
          height: 630,
          alt: "Equis Nexus — Where opportunity and connection meet.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Equis Nexus",
      description: "Where opportunity and connection meet.",
      images: [new URL("/og-multilingual.png", baseUrl).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
        {children}
      </body>
    </html>
  );
}
