import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { OrganizationSchema, PersonSchema } from "@/components/structured-data";

const SITE_URL = "https://rblez.com";
const SITE_NAME = "rblez";
const SITE_DESCRIPTION = "Blog personal de Ray - Solopreneur. Artículos sobre tecnología, desarrollo, y construcción de productos digitales.";
const TWITTER_HANDLE = "@rblezX";

export const metadata: Metadata = {
  title: {
    default: "rblez | Blog Personal",
    template: "%s | rblez",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
  keywords: [
    "blog",
    "tecnología",
    "desarrollo",
    "productos digitales",
    "Next.js",
    "React",
    "TypeScript",
    "solopreneur",
    "emprendedor",
  ],
  authors: [{ name: "Ray", url: SITE_URL }],
  creator: "Ray",
  publisher: "rblez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate" type="application/rss+xml" title="RSS del Blog de rblez" href="/feed.xml" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased font-sans`}>
        <OrganizationSchema />
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}
