"use client";

import { useEffect, useState } from "react";
import Navbar from "@/component/ui/navbar";

const experiences = [
  {
    position: "Member",
    company: "UREEKA - BINA NUSANTARA",
    date: "Mar 2025 - Present",
    description:
      "Develop design and programming skills in UI/UX with different programming languages.",
  },
  {
    position: "Activist",
    company: "Bina Nusantara Mandarin Club",
    activity: "Human Resource and Development",
    date: "Mar 2025 - Present",
    descriptionList:[
      "Manage member recruitment",
      "Organize membership administration",
      "develop training programs", 
      "Build positive working relationships among members."
    ]
  },
  {
    position: "Liaison Officer",
    company: "Bina Nusantara Mandarin Club",
    date: "12 Oct 2024",
    descriptionList: [
      "Coordinated communication with international participants to ensure event continuity",
      "Supported cross-functional teams in event logistics and organization",
      "Assisted participants by providing on-site and remote support throughout the event",
    ],
  },
];

export default function Experience() {
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

      {/* Experience Section */}
      <section className="w-full px-6 py-20 bg-black text-left flex flex-col items-center justify-center">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Experience</h2>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-2xl font-semibold text-white">{exp.position}</h3>
                <h4 className="text-lg text-purple-300">{exp.company}</h4>
                <p className="text-sm text-gray-400">{exp.date}</p>

                {exp.activity && (
                  <p className="mt-2 text-purple-200">{exp.activity}</p>
                )}

                {/* Tampilkan sebagai bullet list jika descriptionList ada */}
                {exp.descriptionList ? (
                  <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                    {exp.descriptionList.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-gray-300">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
