import Head from 'next/head';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode; // Corrected ReactNode to React.ReactNode
  pageTitle?: string;
}

// RootLayout component provides a consistent layout for all pages
export default function RootLayout({ children, pageTitle = 'My Portfolio' }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Welcome to my professional portfolio website" />
      </Head>
      <main>{children}</main>
    </>
  );
}
