"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
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
            <p className="subheading text-sm mb-4">About Us</p>
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] mb-6">
              Our <span className="text-[var(--primary-gold)]">Story</span>
            </h1>
            <p className="text-[var(--text-cream)]/80 text-lg leading-relaxed">
              Founded with a passion for holistic wellness, our studio has been a
              sanctuary for seekers of peace and practitioners of yoga since 2020.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-[var(--background-light)]/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] mb-6">
                Our <span className="text-[var(--primary-gold)]">Mission</span>
              </h2>
              <div className="space-y-4 text-[var(--text-cream)]/80">
                <p>
                  We believe that yoga is more than just physical exercise—it&apos;s a
                  pathway to self-discovery and inner peace. Our mission is to make
                  this ancient practice accessible to everyone.
                </p>
                <p>
                  Through expert instruction, a welcoming environment, and a
                  supportive community, we help our students develop strength,
                  flexibility, and mindfulness that extends far beyond the mat.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-[var(--background-light)] to-[var(--background-dark)] rounded-2xl border border-[var(--primary-gold)]/20 flex items-center justify-center"
            >
              <div className="text-center text-[var(--text-cream)]/40">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Studio Image</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="subheading text-sm mb-4">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)]">
              Our <span className="text-[var(--primary-gold)]">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Inclusivity",
                description: "Yoga is for everyone. We welcome practitioners of all ages, abilities, and backgrounds.",
              },
              {
                title: "Authenticity",
                description: "We honor the traditional roots of yoga while making it relevant for modern life.",
              },
              {
                title: "Community",
                description: "We foster meaningful connections and support each other&apos;s growth on and off the mat.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-[var(--primary-gold)]/20 rounded-xl"
              >
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[var(--primary-gold)] mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--text-cream)]/70 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
