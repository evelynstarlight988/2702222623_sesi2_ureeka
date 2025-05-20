"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"


export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      {/* Floating Navbar */}
      <nav
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
          scrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5",
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={cn(
                  "capitalize transition-colors hover:text-purple-400",
                  activeSection === item ? "text-purple-400" : "text-white",
                )}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex md:hidden">{/* Mobile menu button would go here */}</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex min-h-screen w-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-bold mb-6">Hi!</h1>
        <p className="text-xl mb-8 max-w-2xl text-gray-300">
          I'm a developer passionate about creating beautiful and functional websites.
        </p>
        <Link href="#about" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
          Scroll down <ArrowDown className="h-4 w-4" />
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-square bg-gray-800 rounded-xl overflow-hidden">
              <img src="/placeholder.svg?height=400&width=400" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                I'm a full-stack developer with expertise in modern web technologies. I enjoy building responsive,
                user-friendly applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300">
                My skills include JavaScript, TypeScript, React, Next.js, Node.js, and more. I'm always learning and
                exploring new technologies to improve my craft.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "CSS", "Tailwind"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 bg-black/50"
      >
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
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Node.js", "Tailwind"].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                      View Project
                    </a>
                    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-10 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work
                together or just say hello!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors"
                >
                  <Mail className="h-5 w-5" /> hello@example.com
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors"
                >
                  <Github className="h-5 w-5" /> github.com/username
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" /> linkedin.com/in/username
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
          <p className="text-gray-400">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
