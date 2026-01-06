import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/wix-madefor-display/400.css";
import "@fontsource/wix-madefor-display/500.css";
import "@fontsource/wix-madefor-display/600.css";
import "@fontsource/wix-madefor-display/700.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Email Magnet | AI-Powered Popup Builder for Shopify",
  description: "Stop losing 97% of your traffic. Email Magnet uses AI to analyze your store and generate high-converting popups that match your brand perfectly.",
  openGraph: {
    title: "Email Magnet | AI-Powered Popup Builder for Shopify",
    description: "Stop losing 97% of your traffic. Email Magnet uses AI to analyze your store and generate high-converting popups that match your brand perfectly.",
    url: "https://email-magnet.vercel.app/",
    siteName: "Email Magnet",
    images: [
      {
        url: "/images/meta/og_twitter.png",
        width: 1200,
        height: 630,
        alt: "Email Magnet - AI Popup Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Magnet | AI-Powered Popup Builder",
    description: "Stop losing 97% of your traffic. Generate high-converting popups with AI.",
    images: ["/images/meta/og_twitter.png"],
  },
  metadataBase: new URL("https://email-magnet-neo.vercel.app/"),
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-light.png?v=3",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-dark.png?v=3",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
