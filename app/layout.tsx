import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
});

export const metadata: Metadata = {
  title: {
    default: "Interior Design in London",
    template: "%s - Lara et al",
  },
  description:
    "London based design studio lara et al has been creating warm, elegant, beautiful homes since 2016.",
  metadataBase: new URL("https://laraetal.com"),
  openGraph: {
    images: {
      url: "/opengraph-image.png",
      width: 1920,
      height: 960,
    },
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
