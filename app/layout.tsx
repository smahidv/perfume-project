import type { Metadata } from "next";
import "./globals.css";
import {Noto_Serif_Khitan_Small_Script,Roboto } from 'next/font/google';

const notoSerifKhitan = Noto_Serif_Khitan_Small_Script({
  weight: "400", // Ensure this weight is available for the font
  subsets: ["latin"], // Specify the subsets you need
  variable: "--font-notoSerifKhitan",
});
const roboto = Roboto({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"],
  variable: "--font-roboto",
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
    <html lang="en" className={`${notoSerifKhitan.variable} ${roboto.variable}`}>
      <body >
        {children}
      </body>
    </html>
  );
}
