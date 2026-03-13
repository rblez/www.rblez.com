import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rblez - Blog",
  description: "Personal blog by Ray (rblez)",
  metadataBase: new URL("https://rblez.com"),
  openGraph: {
    title: "rblez - Blog",
    description: "Personal blog by Ray (rblez)",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@rblezX",
    creator: "@rblezX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
