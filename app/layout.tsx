import type { Metadata } from "next";
import { getSEODefaults } from "@/sanity/sanity-utils";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/AppShell/Header";
import Footer from "./components/AppShell/Footer";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
});

export async function generateMetadata(): Promise<Metadata> {

  const defaults = await getSEODefaults();
  const seo = defaults.seo;

  return {
    title: {
      default: seo.defaultMetaTitle,
      template: `%s ${seo.metaTitleSuffix}`,
    },
    description: seo.defaultMetaDescription,
    metadataBase: new URL(defaults.siteUrl),
    openGraph: {
      images: {
        url: seo.ogImage,
        width: 1920,
        height: 960,
      },
    },
    twitter: {
      card: "summary_large_image",
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.variable} antialiased bg-noise-10`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
