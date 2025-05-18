import '../styles/globals.css'
import React from 'react';
import { Providers } from './providers';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Providers>
          <main className="text-foreground bg-background flex-grow">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
} 