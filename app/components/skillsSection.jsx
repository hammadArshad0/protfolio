"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFramer,
  SiVercel,
  SiGit,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillData = [
  { name: "HTML", icon: <FaHtml5 size={40} className="text-[var(--color-accent)]" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-[var(--color-accent)]" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-[var(--color-accent)]" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-[var(--color-accent)]" /> },
  { name: "React", icon: <FaReact size={40} className="text-[var(--color-accent)]" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-[var(--color-accent)]" /> },
  { name: "Framer Motion", icon: <SiFramer size={40} className="text-[var(--color-accent)]" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-[var(--color-accent)]" /> },
  { name: "Express", icon: <SiExpress size={40} className="text-[var(--color-accent)]" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-[var(--color-accent)]" /> },
  { name: "Git", icon: <SiGit size={40} className="text-[var(--color-accent)]" /> },
  { name: "GitHub", icon: <FaGithub size={40} className="text-[var(--color-accent)]" /> },
  { name: "VS Code", icon: <VscCode size={40} className="text-[var(--color-accent)]" /> },
  { name: "Vercel", icon: <SiVercel size={40} className="text-[var(--color-accent)]" /> },
];

const SkillCard = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg shadow-md bg-[var(--color-bg-card)] border border-[var(--color-border)] w-28 sm:w-32`}
  >
    {skill.icon}
    <span className="text-sm font-medium text-[var(--color-text-primary)]">{skill.name}</span>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="relative bg-[var(--color-bg-primary)] px-8 lg:px-16 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text-primary)] inline-block relative mb-16"
        >
          Skills
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-[var(--color-accent)] rounded"></span>
        </motion.h2>

        {/* Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {skillData.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
