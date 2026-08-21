import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./home.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jake — Home",
  description: "Things built, things played, things written.",
};

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${sans.variable} ${serif.variable}`} style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
      {children}
    </div>
  );
}
