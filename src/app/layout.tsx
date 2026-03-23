import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rblez - Blog",
  description: "Blog personal de Ray (rblez) - Vibecoder de Cuba",
  metadataBase: new URL("https://rblez.com"),
  openGraph: {
    title: "rblez - Blog",
    description: "Blog personal de Ray (rblez) - Vibecoder de Cuba",
    locale: "es_ES",
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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
