import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/ThemeProvider"

import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body style={{ margin: 0 }}
        >
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
            <div>
              <Navbar />
              <main>
                {children}
              </main>
            </div>
            <Toaster />
          {/* </ThemeProvider> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
