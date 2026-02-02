"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[var(--color-bg-primary)] flex flex-col justify-center items-center text-center px-6 py-24 sm:py-32">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-[var(--color-text-primary)] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
      >
        Hi, I’m{" "}
        <span className="text-[var(--color-accent)] drop-shadow-md"> Hammad Arshad</span>
        <br />
        A Full-Stack{" "}
        <span className="text-[var(--color-accent)]">Web Developer</span>
      </motion.h1>

      {/* Sub Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-[var(--color-text-muted)] max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed"
      >
        I specialize in building scalable, modern, and user-friendly applications
        using{" "}
        <span className="text-[var(--color-accent)] font-semibold">MERN Stack</span>,{" "}
        <span className="text-[var(--color-accent)] font-semibold">Next.js</span>,{" "}
        <span className="text-[var(--color-accent)] font-semibold">Tailwind CSS</span>, and{" "}
        <span className="text-[var(--color-accent)] font-semibold">Framer Motion</span>.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex gap-4 flex-wrap justify-center"
      >
        <Link href="/projects">
          <button className="cursor-pointer px-6 py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-semibold flex items-center gap-2 hover:scale-105 transition shadow-lg">
            View Projects <ArrowRight size={20} />
          </button>
        </Link>
        <Link href="/contact">
          <button className="cursor-pointer px-6 py-3 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] font-semibold hover:bg-[var(--color-bg-card-hover)] transition">
            Contact Me
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
