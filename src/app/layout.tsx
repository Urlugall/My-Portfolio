import { ReactNode } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

// RootLayout component provides a consistent layout for all pages
export default function RootLayout({ children, pageTitle = 'My Portfolio' }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Welcome to my professional portfolio website" />
      </Head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}