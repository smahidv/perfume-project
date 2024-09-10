import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components";
import {Noto_Serif_Khitan_Small_Script } from 'next/font/google';

const notoSerifKhitan = Noto_Serif_Khitan_Small_Script({
  weight: "400", // Ensure this weight is available for the font
  subsets: ["latin"], // Specify the subsets you need
});

export const metadata: Metadata = {
  title: "Scent of a Dream | Collection of perfumes",
  description: "Scent of a Dream is dedicated to crafting fragrances that inspire and captivate. ",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSerifKhitan.className}>
      <body>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
