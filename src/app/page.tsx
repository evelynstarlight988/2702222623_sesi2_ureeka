"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Navbar from "@/component/ui/navbar";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
     <Navbar />

      {/* Hero Section */}
      <section className="flex min-h-screen w-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-bold mb-6">Hello</h1>
        <p className="text-xl mb-8 max-w-2xl text-gray-300">
          I'm a developer passionate about creating beautiful and functional
          websites.
        </p>
        <Link
          href="/about"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          Learn more about me <ArrowDown className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}