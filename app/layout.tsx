import type { Metadata } from "next";
import Image from 'next/image';
import Header from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./Layout.module.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        <Image
          src="/images/banner.webp"
          alt="Background banner"
          className={styles.background}
          width={3000}
          height={1344}
          priority
        />
        {children}
      </body>
    </html>
  );
}
