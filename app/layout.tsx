
"use client"
// import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import { usePathname } from 'next/navigation';



const font = Josefin_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Paulyn",
//   description: "Portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Paulyn</title>
      </head>


      <body className={font.className}>
        <header>
          <p className=" text-lg font-mono ml-10 mt-10">~{pathname}</p>
        </header>
        {children}
      </body>
    </html>
  );
}
