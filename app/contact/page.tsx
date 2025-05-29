{/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20"
      >
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
