"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "This studio has completely transformed my approach to wellness. The instructors are incredibly supportive and knowledgeable.",
    role: "Member since 2023",
  },
  {
    id: 2,
    name: "Michael R.",
    text: "I was a complete beginner and felt welcomed from day one. Now yoga is an essential part of my daily routine.",
    role: "Member since 2024",
  },
  {
    id: 3,
    name: "Emma L.",
    text: "The peaceful atmosphere and skilled guidance have helped me find balance I never knew I was missing.",
    role: "Member since 2022",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background-light)]/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="subheading text-sm mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)]">
            What Our <span className="text-[var(--primary-gold)]">Community</span> Says
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[var(--background-dark)] border border-[var(--primary-gold)]/20 rounded-xl p-8"
            >
              {/* Quote Icon */}
              <svg
                className="w-10 h-10 text-[var(--primary-gold)]/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-[var(--text-cream)]/80 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div>
                <p className="font-semibold text-[var(--text-cream)]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[var(--primary-gold)]">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
