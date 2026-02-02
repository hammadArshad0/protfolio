"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { Download, Linkedin, Github } from "lucide-react";
import {
  FaReact,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFramer,
} from "react-icons/si";

// RadialRevealCard: minimal monochrome, smooth radial reveal from cursor
const RadialRevealCard = () => {
  const containerRef = useRef(null);

  const BASE_RADIUS = 0;
  const MAX_RADIUS = 160;

  // Motion values
  const radius = useMotionValue(BASE_RADIUS);
  const springRadius = useSpring(radius, {
    stiffness: 260,
    damping: 28,
  });

  const [circle, setCircle] = useState({ x: 50, y: 50 });
  const [textVisible, setTextVisible] = useState(false);

  // ✅ SAFE transform (NO .to())
  const clipPath = useTransform(
    springRadius,
    (r) => `circle(${r}% at ${circle.x}% ${circle.y}%)`
  );

  function updateMousePosition(e) {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCircle({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  }

  function handleMouseEnter(e) {
    updateMousePosition(e);
    setTextVisible(false);

    animate(radius, MAX_RADIUS, {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => setTextVisible(true),
    });
  }

  function handleMouseLeave() {
    setTextVisible(false);
    animate(radius, BASE_RADIUS, {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    });
  }

  return (
    <div
      ref={containerRef}
      className="relative w-72 sm:w-80 h-96"
      onMouseMove={updateMousePosition}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Front Image */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-xl">
        <img
          src="/hammad-without-bg.png"
          alt="Hammad Arshad"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Radial Reveal */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-[var(--color-border)] flex flex-col items-center justify-center p-6"
        style={{
          clipPath,
          background: "var(--color-bg-surface)",
          color: "var(--color-text-primary)",
          // Remove pointerEvents: "none" so inner links are clickable
        }}
      >
        <motion.div
          className="w-28 h-28 rounded-full overflow-hidden border border-[var(--color-border)] mb-3"
          animate={{
            opacity: textVisible ? 1 : 0,
            y: textVisible ? 0 : 18,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/hammad.jpeg"
            className="w-full h-full object-cover object-top"
            draggable={false}
          />
        </motion.div>

        <motion.h3
          className="text-2xl font-bold"
          animate={{
            opacity: textVisible ? 1 : 0,
            y: textVisible ? 0 : 16,
          }}
          transition={{ delay: 0.05, duration: 0.3 }}
        >
          Hammad Arshad
        </motion.h3>

        <motion.p
          className="text-sm font-semibold mt-1"
          animate={{
            opacity: textVisible ? 1 : 0,
            y: textVisible ? 0 : 14,
          }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          className="text-xs text-[var(--color-text-muted)] mt-3 text-center"
          animate={{
            opacity: textVisible ? 1 : 0,
            y: textVisible ? 0 : 12,
          }}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          MERN • Next.js • Tailwind • Framer Motion
        </motion.p>

        <motion.div
          className="flex gap-4 mt-5"
          animate={{
            opacity: textVisible ? 1 : 0,
            y: textVisible ? 0 : 10,
          }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/in/hammadarshad48"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[var(--color-border)] hover:scale-110 transition"
            tabIndex={textVisible ? 0 : -1}
            aria-hidden={!textVisible}
            style={{ pointerEvents: textVisible ? 'auto' : 'none' }}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/hammadArshad0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[var(--color-border)] hover:scale-110 transition"
            tabIndex={textVisible ? 0 : -1}
            aria-hidden={!textVisible}
            style={{ pointerEvents: textVisible ? 'auto' : 'none' }}
          >
            <Github size={18} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

// OrbitingProfileImage: Circular profile image with orbiting skills icons for mobile
const OrbitingProfileImage = () => {
  const skills = [
    { name: "React", icon: <FaReact size={28} className="text-[var(--color-accent)]" /> },
    { name: "Next.js", icon: <SiNextdotjs size={28} className="text-[var(--color-accent)]" /> },
    { name: "Node.js", icon: <FaNodeJs size={28} className="text-[var(--color-accent)]" /> },
    { name: "MongoDB", icon: <SiMongodb size={28} className="text-[var(--color-accent)]" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={28} className="text-[var(--color-accent)]" /> },
    { name: "JavaScript", icon: <FaJs size={28} className="text-[var(--color-accent)]" /> },
    { name: "Express", icon: <SiExpress size={28} className="text-[var(--color-accent)]" /> },
    { name: "Framer", icon: <SiFramer size={28} className="text-[var(--color-accent)]" /> },
  ];

  const radius = 100; // Distance from center in pixels

  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Center Profile Image */}
      <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden border-2 border-[var(--color-border)] shadow-lg">
        <img
          src="/hammad-without-bg.png"
          alt="Hammad Arshad"
          className="w-full h-full object-cover object-top"
          draggable={false}
        />
      </div>

      {/* Orbiting Skills Container */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index;
          const radian = (angle * Math.PI) / 180;
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;

          return (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] shadow-md flex items-center justify-center"
              style={{
                x: x - 24, // Center the icon (half of w-12)
                y: y - 24, // Center the icon (half of h-12)
              }}
              whileHover={{ scale: 1.2, zIndex: 20 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-[var(--color-bg-secondary)] flex justify-center px-8 lg:px-16 py-24 sm:py-32"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Side - About Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] relative inline-block">
            About Me
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-[var(--color-accent)] rounded"></span>
          </h2>

          <p className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed">
            I’m{" "}
            <span className="text-[var(--color-accent)] font-semibold">Hammad Arshad</span>, an
            aspiring
            <span className="text-[var(--color-accent)]"> MERN Stack Developer</span> with experience in developing full-stack web applications using React, Node.js, Express, and MongoDB. Passionate about learning new technologies and contributing to real-world projects in a collaborative environment.
          </p>

          <p className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed">
            I’m currently pursuing a{" "}
            <span className="text-[var(--color-accent)] font-semibold">
              Bachelors in Computer Sciences (BSCS)
            </span>{" "}
            at Barani Institute of Information Technology. My expertise includes the{" "}
            <span className="text-[var(--color-accent)]">MERN Stack</span>,
            <span className="text-[var(--color-accent)]"> Next.js</span>,
            <span className="text-[var(--color-accent)]"> Tailwind CSS</span>, and
            <span className="text-[var(--color-accent)]"> Framer Motion</span>. I love
            creating sleek, responsive interfaces combined with powerful backend
            logic, always exploring new tools to deliver production-ready,
            future-proof solutions.
          </p>

          {/* Download CV Button */}
          <motion.a
            href="/mycv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-semibold shadow-md hover:shadow-lg transition"
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Right Side - Card (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-max hidden lg:block"
        >
          <RadialRevealCard />
        </motion.div>

        {/* Right Side - Orbiting Profile (Mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-max block lg:hidden"
        >
          <OrbitingProfileImage />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
