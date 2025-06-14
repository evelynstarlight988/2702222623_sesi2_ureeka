"use client";

import { useEffect, useState } from "react";
import Navbar from "@/component/ui/navbar";

export default function ProjectsPage() {
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

      <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-gray-900 rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <div className="aspect-video bg-gray-800">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=Project ${project}`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of this amazing project and the
                    technologies used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Node.js", "Tailwind"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View Project
                    </a>
                    <a
                      href="#"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}