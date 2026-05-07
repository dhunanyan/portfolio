import type { Metadata, Viewport } from 'next';
import { HtmlMeta } from '@data';

import { Footer, Header } from '@components';
import './globals.scss';

export const metadata: Metadata = {
  title: HtmlMeta.index.title,
  description: HtmlMeta.index.description,
  keywords: HtmlMeta.index.keywords,
  icons: {
    icon: '/svg/i_logo-bold-bg.svg',
    shortcut: '/svg/i_logo-bold-bg.svg',
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
