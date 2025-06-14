"use client";

import { useEffect, useState } from "react";
import Navbar from "@/component/ui/navbar";
import Image from "next/image";

export default function AboutPage() {
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

      <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-square bg-gray-800 rounded-xl overflow-hidden">
              <img
                src="/FotoBinus.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                I am a computer science student with a strong interest in AI, web development, and digital innovation. I enjoy solving real-world problems through clean and intuitive technology solutions. Outside of the tech world, I like to spend my free time creating digital projects like Canva, exploring new content on TikTok, and keeping up with the latest developments.
              </p>
              <p className="text-lg text-gray-300">
                My skills include C++, Python, JavaScript, TypeScript, React, Next.js,
                Node.js, and more. I'm always learning and exploring new
                technologies to improve my craft.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "C++",
                    "Python",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "CSS",
                    "Tailwind",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}