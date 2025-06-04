"use client";

import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import Testmonial from "./_components/Testmonial";
import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { ContextImageProvider } from "@/context/ImageContext";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobilemenu, setMobileMenu] = useState(false);

  const pathName = usePathname();
  return (
    <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up">
      <ContextImageProvider>
        <html lang="en">
          <body cz-shortcut-listen="true">
            {pathName.includes("/admin") ||
            pathName === "/sign-in" ||
            pathName === "/sign-up" ? (
              <> {children}</>
            ) : (
              <>
                <Navbar mobileMenu={mobilemenu} setMobileMenu={setMobileMenu} />
                <div>{children}</div>
                <Testmonial />
                <Footer />

                {mobilemenu && (
                  <div
                    onClick={() => setMobileMenu(!mobilemenu)}
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm top-0 left-0 bottom-0 right-0 z-40 "
                    aria-hidden="true"
                  ></div>
                )}
              </>
            )}
          </body>
        </html>
      </ContextImageProvider>
    </ClerkProvider>
  );
}
