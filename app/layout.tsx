import type { Metadata, Viewport } from 'next';
import { HtmlMeta } from '@data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BfcacheRestoreGuard, Footer, Header } from '@components';
import './globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://dhunanyan.com'),
  title: {
    default: HtmlMeta.index.title,
    template: '%s · Davit Hunanyan',
  },
  description: HtmlMeta.index.description,
  applicationName: 'Davit Hunanyan Portfolio',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Davit Hunanyan', url: 'https://dhunanyan.com' }],
  creator: 'Davit Hunanyan',
  publisher: 'Davit Hunanyan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  keywords: HtmlMeta.index.keywords,
  openGraph: {
    type: 'website',
    url: '/',
    title: HtmlMeta.index.title,
    description: HtmlMeta.index.description,
    siteName: 'Davit Hunanyan Portfolio',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio of Davit Hunanyan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: HtmlMeta.index.title,
    description: HtmlMeta.index.description,
    images: ['/twitter-image-1200x600.png', '/twitter-image-800x418.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#0a192f',
    'msapplication-TileColor': '#0a192f',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a192f',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BfcacheRestoreGuard />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
