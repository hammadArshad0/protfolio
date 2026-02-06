"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ExternalLink, Github, Info, Sparkles } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const router = useRouter();

  // Hammad Arshad Signature Theme
  const colorShift = {
    animate: {
      color: ["#ff0055", "#00dfd8", "#7000ff", "#ff0055"],
      transition: { duration: 8, repeat: Infinity, ease: "linear" }
    },
    bg: {
      backgroundColor: ["#ff0055", "#00dfd8", "#7000ff", "#ff0055"],
      transition: { duration: 8, repeat: Infinity, ease: "linear" }
    }
  };

  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // FIX: Added margin-top to avoid Navbar overlap
      className="group relative w-full mt-10 bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-white/20 shadow-2xl"
    >
      {/* Top Glow Aura */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* --- IMAGE CONTAINER --- */}
      <div className="relative w-full p-4 aspect-[16/10] overflow-hidden">
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#0a0a0a]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        </div>

        {/* Category Badge */}
        {project.category && (
          <motion.span 
            variants={colorShift}
            animate="bg"
            className="absolute top-8 left-8 px-4 py-1.5 text-[9px] font-black text-black rounded-full uppercase tracking-[0.2em] shadow-2xl"
          >
            {project.category}
          </motion.span>
        )}
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="px-8 pb-10 pt-2 space-y-5">
        <div>
          {/* Shifting Color Title */}
          <motion.h3 
            variants={colorShift}
            animate="animate"
            className="text-2xl font-black uppercase tracking-tighter mb-2"
          >
            {project.title}
          </motion.h3>
          <div className="h-0.5 w-12 bg-white/10 group-hover:w-24 group-hover:bg-[#00dfd8] transition-all duration-500" />
        </div>

        {project.description && (
          <p className="text-gray-400 text-sm font-medium leading-relaxed line-clamp-2">
            {project.description}
          </p>
        )}

        {/* Tech Stack Subtle Pills */}
        <div className="flex flex-wrap gap-2">
          {project.techStack?.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-[8px] font-bold text-gray-500 uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md border border-white/5">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-6 pt-2">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-[#00dfd8] transition-colors"
            >
              <ExternalLink size={14} /> Demo
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors"
            >
              <Github size={14} /> Github
            </Link>
          )}
        </div>

        {/* --- MAIN BUTTON (MATCHED TO THEME) --- */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push(`/projects/${project.id}`)}
          className="relative group/btn mt-6 flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] overflow-hidden transition-all"
        >
          {/* Shifting Background */}
          <motion.div 
            variants={colorShift}
            animate="bg"
            className="absolute inset-0 opacity-10 group-hover/btn:opacity-100 transition-opacity duration-500"
          />
          <span className="relative z-10 text-white group-hover/btn:text-black transition-colors duration-500 flex items-center gap-2">
            <Info size={16} /> Project Details
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;