import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brandform.studio"),
  title: "Sales-ready Design for Small Businesses | Brandform Studio",
  description:
    "Brandform turns unclear websites, PDFs and sales materials into tools that make small businesses easier to buy from.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sales-ready Design for Small Businesses | Brandform Studio",
    description:
      "Buyer kits, client-ready online presence and document redesign for small businesses.",
    url: "/",
    siteName: "Brandform Studio",
    type: "website",
    locale: "en_SE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales-ready Design for Small Businesses | Brandform Studio",
    description:
      "Buyer kits, client-ready online presence and document redesign for small businesses.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07110f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#07110f] font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
