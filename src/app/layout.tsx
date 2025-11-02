// import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { APPBARHEIGHT } from '@/constants';

import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import Navbar from "@/components/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyStyle = {
    margin: 0,
    height: '100vh',
  };

  const mainStyle = {
    height: `calc(100% - ${APPBARHEIGHT})`
  };
  
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body style={bodyStyle}>
          <ThemeProviderWrapper>
            <Navbar />
            <main style={mainStyle}>
              {children}
            </main>
          </ThemeProviderWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
