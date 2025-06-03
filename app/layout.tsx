"use client";

import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import Testmonial from "./_components/Testmonial";
import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { ContextImageProvider } from "@/context/ImageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up" >
      <ContextImageProvider>
      <html lang="en">
        <body cz-shortcut-listen="true">
          {pathName.includes("/admin") || pathName === '/sign-in' || pathName === '/sign-up' ? (
            <> {children}</>
          ) : (
            <>
              <Navbar />
              <div>{children}</div>
              <Testmonial />
              <Footer />
            </>
          )}
        </body>
      </html>
      </ContextImageProvider>
    </ClerkProvider>
  );
}
