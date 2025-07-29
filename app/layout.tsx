import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans } from 'next/font/google'


export const font = Josefin_Sans({
  weight: ['400'],
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Paulyn",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
  <body className={font.className}>
    {children}
  </body>
</html>

  );
}
