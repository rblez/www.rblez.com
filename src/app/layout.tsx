import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "rblez - Blog",
  description: "Personal blog by Ray (rblez) - Vibecoder from Cuba",
  metadataBase: new URL("https://rblez.com"),
  openGraph: {
    title: "rblez - Blog",
    description: "Personal blog by Ray (rblez) - Vibecoder from Cuba",
    locale: "en_US",
    type: "website",
    images: ["/banner-seo.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rblezX",
    creator: "@rblezX",
    images: ["/banner-seo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <main>{children}</main>
      </body>
    </html>
  );
}
