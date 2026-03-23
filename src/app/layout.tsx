import type { Metadata } from "next";
import "./globals.css";
import { EmailButton } from "@/components/email-button";

export const metadata: Metadata = {
  title: "Ray - Blog",
  description: "Personal blog by Ray (rblez) - Vibecoder",
  metadataBase: new URL("https://rblez.com"),
  openGraph: {
    title: "Ray - Blog",
    description: "Personal blog by Ray (rblez) - Vibecoder",
    locale: "en_US",
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <main>{children}</main>
        <EmailButton />
      </body>
    </html>
  );
}
