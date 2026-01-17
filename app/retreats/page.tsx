"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Event {
  title: string;
  type: "retreat" | "workshop";
  dates: string;
  location: string;
  price: string;
  description: string;
  image?: string;
  highlights: string[];
}

const events: Event[] = [
  {
    title: "Desert Wellness Retreat",
    type: "retreat",
    dates: "March 14-16, 2026",
    location: "Mitzpe Ramon",
    price: "₪1,800",
    description:
      "Escape to the desert for a transformative weekend of yoga, meditation, and stargazing. Connect with nature and yourself in the stunning Ramon Crater landscape.",
    highlights: [
      "Daily sunrise & sunset yoga",
      "Desert hiking & meditation",
      "Organic vegetarian meals",
      "Private accommodation",
    ],
  },
  {
    title: "Introduction to Meditation",
    type: "workshop",
    dates: "February 8, 2026",
    location: "Tel Aviv Studio",
    price: "₪350",
    description:
      "A full-day workshop designed for beginners who want to establish a meditation practice. Learn various techniques and find what works best for you.",
    highlights: [
      "Multiple meditation styles",
      "Breathing techniques",
      "Creating a home practice",
      "Light refreshments included",
    ],
  },
  {
    title: "Greece Yoga Retreat",
    type: "retreat",
    dates: "May 20-27, 2026",
    location: "Santorini, Greece",
    price: "€1,200",
    description:
      "A week-long journey combining daily yoga practice with the magic of the Greek islands. Experience sunrise yoga overlooking the caldera and sunset meditation on volcanic beaches.",
    highlights: [
      "Twice daily yoga sessions",
      "Island excursions",
      "Healthy Greek cuisine",
      "Boutique hotel accommodation",
    ],
  },
];

export default function RetreatsPage() {
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
            <p className="subheading text-sm mb-4">Immersive Experiences</p>
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] mb-6">
              Retreats &{" "}
              <span className="text-[var(--primary-gold)]">Workshops</span>
            </h1>
            <p className="text-[var(--text-cream)]/80 text-lg leading-relaxed">
              Deepen your practice with immersive experiences. From day workshops
              to week-long retreats, discover transformative journeys for mind,
              body, and soul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-[var(--background-light)]/30">
        <div className="container">
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--background-dark)] border border-[var(--primary-gold)]/20 rounded-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Image Placeholder */}
                  <div className="lg:col-span-2 relative min-h-[300px] bg-gradient-to-br from-[var(--teal-dark)] to-[var(--background-dark)]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="subheading text-xs text-[var(--primary-gold)]/60">
                          {event.type === "retreat" ? "Retreat" : "Workshop"}
                        </span>
                        <p className="text-[var(--text-cream)]/40 mt-2 text-sm">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    {/* Badge */}
                    <span
                      className={`inline-block px-3 py-1 text-xs rounded-full mb-4 ${
                        event.type === "retreat"
                          ? "bg-[var(--teal-dark)]/30 text-[var(--teal-bright)]"
                          : "bg-[var(--primary-gold)]/20 text-[var(--primary-gold)]"
                      }`}
                    >
                      {event.type === "retreat" ? "Retreat" : "Workshop"}
                    </span>

                    {/* Title */}
                    <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[var(--text-cream)] mb-4">
                      {event.title}
                    </h2>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[var(--primary-gold)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-[var(--text-cream)]/70">
                          {event.dates}
                        </span>
                      </div>
                      <span className="text-[var(--primary-gold)]/30">•</span>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[var(--primary-gold)]"
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
                        <span className="text-[var(--text-cream)]/70">
                          {event.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[var(--text-cream)]/60 leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h4 className="text-sm text-[var(--primary-gold)] mb-3">
                        Includes:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {event.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-2 text-sm text-[var(--text-cream)]/70"
                          >
                            <svg
                              className="w-4 h-4 text-[var(--teal-bright)]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div>
                        <span className="text-[var(--text-cream)]/50 text-sm">
                          From
                        </span>
                        <p className="text-2xl font-[family-name:var(--font-cormorant)] text-[var(--primary-gold)]">
                          {event.price}
                        </p>
                      </div>
                      <button className="btn-primary px-8 py-3">
                        Learn More & Register
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] mb-6">
              Stay Updated
            </h2>
            <p className="text-[var(--text-cream)]/70 mb-8">
              Be the first to know about upcoming retreats and workshops.
              Subscribe to receive updates directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-[var(--background-dark)] border border-[var(--primary-gold)]/30 rounded-lg text-[var(--text-cream)] focus:outline-none focus:border-[var(--primary-gold)] transition-colors"
              />
              <button type="submit" className="btn-primary px-6 py-3">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
