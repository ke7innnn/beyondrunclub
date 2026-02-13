import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import DynamicTitle from "@/components/DynamicTitle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BEYOND RUN CLUB",
  description: "Casually crushing your comfort zone",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicTitle />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
