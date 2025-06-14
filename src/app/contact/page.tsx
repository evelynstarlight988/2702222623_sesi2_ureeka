"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import Navbar from "@/component/ui/navbar";

export default function ContactPage() {
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
          <h2 className="text-4xl font-bold mb-10 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                I'm currently open to new opportunities and collaborations. Feel
                free to reach out if you'd like to work together or just say
                hello!
              </p>
              <div className="space-y-4">
                <a
                  href="michelle.lumanto@binus.ac.id"
                  className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors"
                >
                  <Mail className="h-5 w-5" /> michelle.lumanto@binus.ac.id
                </a>
                <a
                  href="https://github.com/evelynstarlight988"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors"
                >
                  <Github className="h-5 w-5" /> https://github.com/evelynstarlight988
                </a>
                <a
                  href="https://www.linkedin.com/in/michelle-angelique-lumanto-02b659292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" /> https://www.linkedin.com/in/michelle-angelique-lumanto-02b659292/
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-purple-400 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-purple-400 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-purple-400 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
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