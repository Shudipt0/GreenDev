"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import Testmonial from "./_components/Testmonial";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        {pathName.includes("/admin") ? (
          <> {children}</>
        ) : (
          <>
            <Navbar />
            {children}
            <Testmonial />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
