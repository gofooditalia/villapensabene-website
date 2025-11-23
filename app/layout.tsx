import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { restaurantData } from "@/lib/restaurant-data";

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
    default: `${restaurantData.name} - ${restaurantData.tagline}`,
    template: `%s | ${restaurantData.name}`,
  },
  description: restaurantData.description,
  keywords: ["ristorante", "Sicilia", "cucina siciliana", "tradizione", "Villa Pensabene"],
  authors: [{ name: restaurantData.name }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: restaurantData.name,
    title: `${restaurantData.name} - ${restaurantData.tagline}`,
    description: restaurantData.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurantData.name} - ${restaurantData.tagline}`,
    description: restaurantData.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
