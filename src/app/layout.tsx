import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
