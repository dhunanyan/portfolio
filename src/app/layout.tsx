import type { Metadata } from "next";
// import localFont from "next/font/local";
import { HtmlMeta } from "@data";
import "./globals.scss";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = HtmlMeta["index"];

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
          href="/icons/i_logo-bg.svg"
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <body /*className={`${geistSans.variable} ${geistMono.variable}`} */>
        {children}
      </body>
    </html>
  );
}
