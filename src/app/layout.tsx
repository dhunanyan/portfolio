import type { Metadata } from 'next';
import { HtmlMeta } from '@data';

import './globals.scss';
import { Footer } from '@components';

export const metadata: Metadata = HtmlMeta['index'];

export type RootLayoutPropsType = {
  children: React.JSX.Element;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/svg/i_logo-bold-bg.svg"
        />
        <meta name="theme-color" content="#0a192f" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
