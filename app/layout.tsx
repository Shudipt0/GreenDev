"use client";

import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import Testmonial from "./_components/Testmonial";
import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <ClerkProvider>
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
    </ClerkProvider>
  );
}
