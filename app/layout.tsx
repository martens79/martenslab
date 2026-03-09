import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MartensLab | Studio web indipendente",
  description:
    "MartensLab realizza siti web moderni, chiari e veloci per professionisti, attività e progetti che vogliono presentarsi in modo credibile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#07111f] text-white`}
      >
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}