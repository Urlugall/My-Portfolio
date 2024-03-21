import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

// RootLayout component provides a consistent layout for all pages
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my professional portfolio website" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
