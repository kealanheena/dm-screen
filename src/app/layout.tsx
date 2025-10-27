// import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'

import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";


import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const theme = createTheme(themeOptions);


  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body style={{ margin: 0, height: '100vh' }}>
          <ThemeProviderWrapper>
            <Navbar />
            <main style={{ height: '100%' }}>
              {children}
            </main>
          </ThemeProviderWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
