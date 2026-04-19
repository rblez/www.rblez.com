import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://rblez.com";
const SITE_NAME = "rblez";
const SITE_DESCRIPTION = "Personal blog by Ray - Solopreneur & Vibecoder. Articles about technology, development, AI agents, and building digital products.";
const TWITTER_HANDLE = "@rblezX";

export const metadata: Metadata = {
  title: {
    default: "rblez | Personal Blog",
    template: "%s | rblez",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
  keywords: [
    "blog",
    "technology",
    "development",
    "AI",
    "artificial intelligence",
    "agents",
    "Next.js",
    "React",
    "TypeScript",
    "solopreneur",
    "vibecoder",
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
    locale: "en_US",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    alternateLocale: ["es_ES"],
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate" type="application/rss+xml" title="rblez Blog RSS" href="/feed.xml" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
