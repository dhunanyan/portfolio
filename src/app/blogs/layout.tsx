import { Header } from '@components';

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header isBlog />
      {children}
    </>
  );
}
