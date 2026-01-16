import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif", 
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", 
});

export const metadata: Metadata = {
  title: "HS-Bench: Human Psych Studies with LLMs",
  description: "A benchmark for evaluating LLMs on human psychological studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${merriweather.variable} ${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-white text-black`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
