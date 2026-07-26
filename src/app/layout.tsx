import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";

import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
} from "next/font/google";

import Navbar from "@/components/Navbar";

import "./style/globals.css";
import "./style/haiku.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: {
    default: "Haiku | Naturaleza para el cuerpo",
    template: "%s | Haiku",
  },

  description:
    "Cabañas y experiencias diseñadas para descansar, reconectar con la naturaleza y volver a lo esencial.",

  keywords: [
    "Haiku",
    "cabañas",
    "alojamiento",
    "naturaleza",
    "turismo",
    "descanso",
    "experiencias",
    "Chile",
  ],

  authors: [
    {
      name: "Haiku",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${cormorant.variable}
          antialiased
        `}
      >
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}