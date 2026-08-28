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
  title: "AI Visibility for Local Experts | Brandform Studio",
  description:
    "Evidence-based AI visibility and local discovery audits for independent professionals and owner-led service businesses.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Visibility for Local Experts | Brandform Studio",
    description:
      "Build a clear, credible presence across search, maps and AI-assisted discovery.",
    url: "/",
    siteName: "Brandform Studio",
    type: "website",
    locale: "en_SE",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Visibility for Local Experts | Brandform Studio",
    description:
      "Build a clear, credible presence across search, maps and AI-assisted discovery.",
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
