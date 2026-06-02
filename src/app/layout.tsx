import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderDesktop from "@/components/desktop/HeaderDesktop";
import HeaderMobile from "@/components/mobile/HeaderMobile";
import Footer from "@/components/Footer";
import BottomNavMobile from "@/components/mobile/BottomNavMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabia Contable | Asesoría Contable y Tributaria Premium",
  description: "Servicios de contabilidad integral, remuneraciones, gestión tributaria y auditoría para pymes y profesionales en Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#032030] text-slate-100 selection:bg-[#d80073] selection:text-white">
        <HeaderDesktop />
        <HeaderMobile />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <BottomNavMobile />
      </body>
    </html>
  );
}
