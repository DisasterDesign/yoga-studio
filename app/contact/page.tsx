"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="subheading text-sm mb-4">Get in Touch</p>
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] mb-6">
              <span className="text-[var(--primary-gold)]">Contact</span> Me
            </h1>
            <p className="text-[var(--text-cream)]/80 text-lg leading-relaxed">
              I&apos;d love to hear from you. Whether you have questions about
              classes, want to book a private session, or just want to say hello.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-[var(--background-light)]/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-[family-name:var(--font-cormorant)] mb-8">
                Send a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-[var(--text-cream)]/70 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-[var(--background-dark)] border border-[var(--primary-gold)]/30 rounded-lg text-[var(--text-cream)] focus:outline-none focus:border-[var(--primary-gold)] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-[var(--text-cream)]/70 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-[var(--background-dark)] border border-[var(--primary-gold)]/30 rounded-lg text-[var(--text-cream)] focus:outline-none focus:border-[var(--primary-gold)] transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-[var(--text-cream)]/70 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-[var(--background-dark)] border border-[var(--primary-gold)]/30 rounded-lg text-[var(--text-cream)] focus:outline-none focus:border-[var(--primary-gold)] transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-[var(--text-cream)]/70 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--background-dark)] border border-[var(--primary-gold)]/30 rounded-lg text-[var(--text-cream)] focus:outline-none focus:border-[var(--primary-gold)] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-[family-name:var(--font-cormorant)] mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent-blue)]/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-[var(--primary-gold)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[var(--primary-gold)] mb-1">Email</h3>
                    <a
                      href="mailto:hello@yogastudio.com"
                      className="text-[var(--text-cream)]/70 hover:text-[var(--text-cream)] transition-colors"
                    >
                      hello@yogastudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent-blue)]/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-[var(--primary-gold)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[var(--primary-gold)] mb-1">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-[var(--text-cream)]/70 hover:text-[var(--text-cream)] transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent-blue)]/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-[var(--primary-gold)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[var(--primary-gold)] mb-1">Location</h3>
                    <p className="text-[var(--text-cream)]/70">
                      123 Serenity Lane
                      <br />
                      Peaceful City, PC 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-[var(--primary-gold)]/20">
                <h3 className="text-[var(--primary-gold)] mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[var(--accent-blue)]/20 rounded-lg flex items-center justify-center text-[var(--text-cream)]/70 hover:text-[var(--primary-gold)] hover:bg-[var(--accent-blue)]/30 transition-all"
                  >
                    <span className="text-sm">IG</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[var(--accent-blue)]/20 rounded-lg flex items-center justify-center text-[var(--text-cream)]/70 hover:text-[var(--primary-gold)] hover:bg-[var(--accent-blue)]/30 transition-all"
                  >
                    <span className="text-sm">FB</span>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[var(--accent-blue)]/20 rounded-lg flex items-center justify-center text-[var(--text-cream)]/70 hover:text-[var(--primary-gold)] hover:bg-[var(--accent-blue)]/30 transition-all"
                  >
                    <span className="text-sm">YT</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
