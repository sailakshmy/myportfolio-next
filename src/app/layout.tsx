import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sai Lakshmy | Frontend Developer Portfolio",
  description: "Experienced Frontend Developer with 9+ years of expertise in React, Next.js, and modern web technologies. Specializing in creating responsive, performant, and user-friendly web applications.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "UI Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio",
    "Web Development",
    "React Portfolio"
  ],
  authors: [{ name: "Sai Lakshmy" }],
  creator: "Sai Lakshmy",
  openGraph: {
    title: "Sai Lakshmy | Frontend Developer Portfolio",
    description: "Experienced Frontend Developer with 9+ years of expertise in React, Next.js, and modern web technologies. Specializing in creating responsive, performant, and user-friendly web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Sai Lakshmy's Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
