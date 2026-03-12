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
    "MartensLab realizza siti web moderni, veloci e curati per professionisti, attività locali e progetti personali. Progettazione siti web, landing page e restyling.",

  keywords: [
    "sviluppo siti web",
    "realizzazione siti web",
    "web designer freelance",
    "creazione siti per professionisti",
    "landing page professionali",
    "sviluppo siti web Italia",
  ],

  authors: [{ name: "Lorenzo Beux" }],
  creator: "Lorenzo Beux",
  publisher: "MartensLab",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "MartensLab | Studio web indipendente",
    description:
      "Siti web eleganti, veloci e progettati per comunicare professionalità. MartensLab realizza siti per professionisti, studi e attività locali.",
    url: "https://martenslab.com",
    siteName: "MartensLab",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MartensLab studio web",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MartensLab | Studio web indipendente",
    description:
      "Siti web eleganti e veloci per professionisti e attività.",
    images: ["/og-image.jpg"],
  },

  metadataBase: new URL("https://martenslab.com"),
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