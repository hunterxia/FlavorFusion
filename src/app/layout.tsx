import type { Metadata } from "next";

import { outfit } from "./fonts";
import "./globals.css";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "Flavor Fusion",
  description:
    "A dynamic recipe suggestion app designed to help users craft meals based on the ingredients they have at home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} max-w-[1440px] px-[3.5%]  mx-auto`}>
        <main> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
