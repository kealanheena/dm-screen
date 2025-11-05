// import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "react-hot-toast";
import { APP_BAR_HEIGHT } from '@/constants';

import ThemeProvider from "@/components/Wrappers/ThemeProvider";
import Redirect from "@/components/Redirect";
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
    height: `calc(100% - ${APP_BAR_HEIGHT})`
  };
  
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body style={bodyStyle}>
          
          <ThemeProvider>
            <Navbar />

            <main style={mainStyle}>
              {children}
            </main>
            
            <Toaster />
          </ThemeProvider>
        
        </body>
      </html>
    </ClerkProvider>
  );
}
