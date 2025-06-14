"use client";

import { useEffect, useState } from "react";
import Navbar from "@/component/ui/navbar";

const certificates = [
  {
    title: "Liaison Officer Bina Nusantara Mandarin Club",
    image: "/LO.png", // Ganti dengan path sertifikat kamu",
    year: "12 Oct 2024",
    description: "Sertifikasi sebagai Liaison Officer dalam acara lomba mandarin internasional.",
  },
  {
    title: "AI Fundamentals",
    image: "/cert-ai.jpg", // Ganti juga sesuai file sertifikat kamu
    issuer: "Coursera",
    year: "2023",
    description: "Dasar-dasar AI, machine learning, dan data science.",
  },
];

export default function CertificatePage() {
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
    <main className="flex flex-col min-h-screen items-center bg-black text-white">
      <Navbar />

      <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Certificates</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {certificates.map((cert, index) => (
              <div key={index} className="group [perspective:1000px] w-full aspect-[16/9] max-w-2-1">

                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-gray-800 rounded-xl overflow-hidden shadow-xl [backface-visibility:hidden]">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-center"
                    />
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-purple-700 text-white rounded-xl p-6 transform rotate-y-180 [backface-visibility:hidden]">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-200">{cert.issuer}</p>
                    <p className="text-sm text-gray-300 mb-4">{cert.year}</p>
                    <p className="text-sm text-white">{cert.description}</p>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* Optional Footer */}
      <footer className="w-full py-8 bg-black text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
