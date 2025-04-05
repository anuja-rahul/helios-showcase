import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { siteConfig } from "@/config/site";
import SmoothScrollContext from "@/components/ui/SmoothScrollContext";
import Header from "@/components/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL(siteConfig.url),
  twitter: {
    card: "summary",
    site: siteConfig.url,
    creator: siteConfig.creator,
    title: siteConfig.longName,
    description: siteConfig.description,
    images: [{ url: "img/opengraph-image.jpg" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.longName,
    description: siteConfig.description,
    images: [{ url: "img/opengraph-image.jpg" }],
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <SmoothScrollContext>
            <div>
              <Header />
              {children}
            </div>
          </SmoothScrollContext>
        </body>
      </html>
    </ViewTransitions>
  );
}
