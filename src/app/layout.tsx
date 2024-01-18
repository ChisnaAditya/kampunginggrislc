import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import { Suspense } from "react";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kampung Inggris LC",
  description: "Kursus Bahasa Inggris Terfavorit di Kampung Inggris",
  verification: {
    google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense>
        <Analytics />
      </Suspense>
      <body className={inter.className}>
        <div className="flex flex-col justify-between h-screen">
          {/* <NavBar /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
