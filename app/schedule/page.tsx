"use client";

import { motion } from "framer-motion";

interface ClassCard {
  name: string;
  days: string;
  time: string;
  duration: string;
  description: string;
}

const classes: ClassCard[] = [
  {
    name: "Morning Flow",
    days: "Sun / Tue / Thu",
    time: "07:00",
    duration: "60 min",
    description:
      "Start your day with an energizing flow that awakens the body and clears the mind. Perfect for all levels.",
  },
  {
    name: "Gentle Yoga",
    days: "Mon / Wed",
    time: "09:30",
    duration: "75 min",
    description:
      "A slower-paced practice focusing on stretching and relaxation. Ideal for beginners or those seeking a calming session.",
  },
  {
    name: "Vinyasa",
    days: "Sun / Tue",
    time: "18:00",
    duration: "60 min",
    description:
      "Dynamic, breath-synchronized movement linking poses together in a continuous flow. Builds strength and flexibility.",
  },
  {
    name: "Yin Yoga",
    days: "Wed",
    time: "18:00",
    duration: "75 min",
    description:
      "Deep, passive stretches held for longer periods to target connective tissues and promote relaxation.",
  },
  {
    name: "Meditation",
    days: "Mon / Thu",
    time: "19:30",
    duration: "45 min",
    description:
      "Guided meditation sessions to cultivate mindfulness, reduce stress, and find inner peace.",
  },
];

export default function SchedulePage() {
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
            <p className="subheading text-sm mb-4">Weekly Classes</p>
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] mb-6">
              Class <span className="text-[var(--primary-gold)]">Schedule</span>
            </h1>
            <p className="text-[var(--text-cream)]/80 text-lg leading-relaxed">
              Find the perfect class for your practice. From energizing morning
              flows to calming evening meditations, there&apos;s something for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16 bg-[var(--background-light)]/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <motion.div
                key={classItem.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--background-dark)] border border-[var(--primary-gold)]/20 rounded-2xl p-8 hover:border-[var(--primary-gold)]/40 transition-all group"
              >
                {/* Class Name */}
                <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[var(--text-cream)] mb-4 group-hover:text-[var(--primary-gold)] transition-colors">
                  {classItem.name}
                </h3>

                {/* Schedule Info */}
                <div className="flex items-center gap-4 mb-4 text-sm">
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
                      {classItem.days}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6 text-sm">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-[var(--text-cream)]/70">
                      {classItem.time}
                    </span>
                  </div>
                  <span className="text-[var(--primary-gold)]/50">•</span>
                  <span className="text-[var(--text-cream)]/70">
                    {classItem.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[var(--text-cream)]/60 text-sm leading-relaxed mb-8">
                  {classItem.description}
                </p>

                {/* Book Button */}
                <button className="btn-primary w-full py-3 text-sm">
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
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
              Private Sessions Available
            </h2>
            <p className="text-[var(--text-cream)]/70 mb-8">
              Looking for personalized attention? I offer private one-on-one
              sessions tailored to your specific needs and goals.
            </p>
            <a href="/contact" className="btn-secondary">
              Inquire About Private Sessions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
