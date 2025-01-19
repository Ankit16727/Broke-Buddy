import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="z-20 fixed w-full bg-white"><Navbar/></header>

      {/* Main Content */}
      <main className="flex-grow "><HomePage/></main>

      {/* Footer */}
      <footer className="bg-black h-28 text-white p-4 z-20"><Footer/></footer>
    </div>
  );
}
