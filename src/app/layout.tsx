import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from '@clerk/nextjs'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material/styles";

import { themeOptions } from './theme';

import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";


import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme(themeOptions);


  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body style={{ margin: 0, height: '100vh' }}>
          <ThemeProviderWrapper>
            <Navbar />
            <main>
              {children}
            </main>
          </ThemeProviderWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
