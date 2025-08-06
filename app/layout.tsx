import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google';
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "VCFund.vc - Funding the Future",
  description:
    "We partner with visionary entrepreneurs to build tomorrow's most impactful companies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*  className={inter.className} */}
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
