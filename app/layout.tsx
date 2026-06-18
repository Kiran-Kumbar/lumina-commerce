import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata = {
  title: "Lumina | We preserve memories",
  description: "Premium customized gifts and preserved memories.",
  icons: {
    icon: "/image1.png",
    apple: "/image1.png",
  },
};

import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import PageTransition from "@/components/layout/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col selection:bg-rose-gold selection:text-white">
        <SmoothScrollProvider>
          <Navbar />
          <PageTransition>
            <main className="flex-1">
              {children}
            </main>
          </PageTransition>
          <Footer />
          <WhatsAppFloat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
