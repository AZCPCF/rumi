import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
// import Footer from "@/components/layout/footer";
import { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Rumi Reflections | Timeless Wisdom & Poetry",
  description:
    "Explore the profound teachings and poetic beauty of Jalal al-Din Rumi. Discover quotes, stories, and insights that transcend time.",
  keywords: [
    "Rumi",
    "Jalal al-Din",
    "Sufi poetry",
    "spiritual quotes",
    "love poems",
    "Rumi biography",
    "wisdom",
    "mysticism",
    "Persian poet",
  ],
  authors: [{ name: "CPCF", url: "https://rumi-one.vercel.app" }],
  creator: "CPCF",
  publisher: "CPCF",
  metadataBase: new URL("https://rumi-one.vercel.app"),
  openGraph: {
    title: "Rumi Reflections | Timeless Wisdom & Poetry",
    description:
      "Discover the mystical poetry and teachings of Rumi. A tribute to love, unity, and the soul’s journey.",
    url: "https://rumi-one.vercel.app",
    siteName: "Rumi Reflections",
    images: [
      {
        url: "https://rumi-one.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rumi Reflections Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumi Reflections | Timeless Wisdom & Poetry",
    description:
      "Explore the poetic legacy of Rumi and his timeless spiritual insights.",
    images: ["https://rumi-one.vercel.app/twitter-card.jpg"],
    creator: "@yourTwitterHandle",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    // apple: "/apple-touch-icon.png",
  },

  category: "Literature",
};
export const viewport: Viewport = {
  themeColor: "#fb8c8a",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased max-w-7xl m-auto relative">
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
