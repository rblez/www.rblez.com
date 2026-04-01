import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ray",
  description: "Personal blog by Ray",
  metadataBase: new URL("https://www.rblez.com"),
  openGraph: {
    title: "Ray",
    description: "Personal blog by Ray",
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="pt-20 antialiased">
        {children}
      </body>
    </html>
  );
}
