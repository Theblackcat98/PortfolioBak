import '../styles/globals.css' // Assuming you'll have a globals.css for base styles
import React from 'react';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
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