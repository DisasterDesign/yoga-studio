"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Seed of Life SVG Component
function SeedOfLife() {
  return (
    <svg
      className="w-16 h-16 md:w-20 md:h-20 mb-6"
      viewBox="0 0 100 100"
      style={{ filter: "drop-shadow(0 0 8px rgba(212, 165, 116, 0.4))" }}
    >
      <g fill="none" stroke="var(--primary-gold)" strokeWidth="1">
        <circle cx="50" cy="50" r="20" />
        <circle cx="50" cy="30" r="20" />
        <circle cx="50" cy="70" r="20" />
        <circle cx="67.32" cy="40" r="20" />
        <circle cx="67.32" cy="60" r="20" />
        <circle cx="32.68" cy="40" r="20" />
        <circle cx="32.68" cy="60" r="20" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setTransform({
        x: x * -20,
        y: y * -20,
      });
    };

    const handleMouseLeave = () => {
      setTransform({ x: 0, y: 0 });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute -inset-5 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out will-change-transform"
        style={{
          backgroundImage:
            "url('/Gemini_Generated_Image_ne409bne409bne40.jpeg')",
          transform: `translate(${transform.x}px, ${transform.y}px) scale(1.1)`,
        }}
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,20,16,0.9)] to-[rgba(26,20,16,0.3)]" />

      {/* Content - LEFT ALIGNED */}
      <div className="container relative z-10 text-left pl-[5vw] md:pl-[10vw] pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[600px]"
        >
          {/* Seed of Life Sacred Geometry */}
          <SeedOfLife />

          <p className="subheading text-sm mb-6">Welcome to Your Journey</p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-cormorant)] mb-6 leading-tight">
            Find Your
            <br />
            <span className="text-[var(--primary-gold)]">Inner Balance</span>
          </h1>

          <p className="text-[var(--text-cream)]/80 text-lg md:text-xl mb-10 leading-relaxed">
            Experience the transformative power of yoga. Join our welcoming
            community and discover peace, strength, and harmony in every breath.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link href="/about" className="btn-primary text-lg px-8 py-4">
              About Me
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator - stays centered at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[var(--primary-gold)]/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-[var(--primary-gold)] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
