"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="subheading text-sm mb-4">Our Vision</p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] mb-6">
              A Sanctuary for
              <br />
              <span className="text-[var(--primary-gold)]">Mind & Body</span>
            </h2>
            <div className="space-y-4 text-[var(--text-cream)]/80 leading-relaxed">
              <p>
                Our studio is more than just a place to practice yoga. It&apos;s a
                haven where you can disconnect from the chaos of daily life and
                reconnect with your inner self.
              </p>
              <p>
                With experienced instructors and a warm, welcoming atmosphere,
                we guide practitioners of all levels on their journey toward
                physical wellness and mental clarity.
              </p>
              <p>
                Whether you&apos;re a beginner taking your first steps or an advanced
                yogi deepening your practice, you&apos;ll find your place here.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <Image
                src="/Screenshot 2026-01-17 at 13.38.49.png"
                alt="Yoga instructor guiding a student through a pose"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--primary-gold)]/30 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
