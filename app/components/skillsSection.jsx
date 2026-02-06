"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub,
} from "react-icons/fa6";
import {
  SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFramer, SiGit, SiDotnet,
} from "react-icons/si";
import { VscCode, VscDatabase } from "react-icons/vsc";
import { Sparkles, Zap } from "lucide-react";

const skillData = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "ASP.NET", icon: <SiDotnet />, color: "#512BD4" },
  { name: "SQL Server", icon: <VscDatabase />, color: "#CC2927" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express", icon: <SiExpress />, color: "#ffffff" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Framer", icon: <SiFramer />, color: "#0055FF" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "VS Code", icon: <VscCode />, color: "#007ACC" },
];

const SkillsSection = () => {
  const colorShift = {
    animate: {
      color: ["#ff0055", "#00dfd8", "#7000ff", "#ff0055"],
      transition: { duration: 8, repeat: Infinity, ease: "linear" }
    }
  };

  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" },
      },
    },
  };

  return (
    <section id="skills" className="relative bg-[#050505] py-24 lg:py-32 overflow-hidden select-none">
      
      {/* --- ADDED: BALLOON PARTICLES (SYNCED THEME) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background Ambience Shifting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ff0055]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00dfd8]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            variants={colorShift}
            animate="animate"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-current bg-white/5 mb-6 text-[10px] font-black uppercase tracking-[0.4em]"
          >
            <Sparkles size={18} /> My Tech Stack
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-none"
          >
            MY  
            <motion.span variants={colorShift} animate="animate" className="italic outline-text pl-4">Skill Set.</motion.span>
          </motion.h2>
        </div>

        <div className="relative flex overflow-hidden py-12 mask-sides">
          <motion.div variants={marqueeVariants} animate="animate" className="flex flex-nowrap gap-8 whitespace-nowrap">
            {[...skillData, ...skillData].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative flex flex-col items-center justify-center min-w-[150px] h-[150px] rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-300"
              >
                <div className="text-5xl mb-4 transition-all duration-300 group-hover:scale-110" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-[2rem] transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Constantly Evolving</span>
            <Zap size={14} className="text-[#00dfd8] animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-sides {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .outline-text {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;