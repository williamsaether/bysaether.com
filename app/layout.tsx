import type { Metadata } from "next";
import Header from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import {ThemeProvider} from "@/context/ThemeContext";
import { Analytics } from '@vercel/analytics/next';
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BySaether",
  description: "Developing software products - William Sæther",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode; }>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <meta name="facebook-domain-verification" content="o9yuzf407ggfdsxjbx0z40i7iwd9r1" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header/>
          {children}
          <Footer/>
          <Analytics/>
        </body>
      </html>
    </ThemeProvider>
  );
}
