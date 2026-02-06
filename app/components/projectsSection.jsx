"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Rocket, Layout, Database, Layers, ArrowRight, Sparkles, Info } from "lucide-react";
import ProjectCard from "./projectCard";

// --- UPDATED PROJECTS DATA ---
export const projectsData = [
  {
    id: 1,
    title: "E-BooksShelf (E-Library)",
    description: "E-BooksShelf is a responsive React.js web app that lets users search, browse, and preview books using the Google Books API.",
    techStack: ["React Js", "CSS", "Google Books API"],
    developer: "Hammad Arshad",
    image: "/project1.png",
    githubLink: "https://github.com/hammadArshad0",
    liveLink: "https://ebooksshelf.netlify.app/",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Safe Mart",
    description: "Safe is an online shopping platform crafted to provide customers with a smooth and enjoyable shopping experience.",
    techStack: ["React Js", "CSS"],
    developer: "Hammad Arshad",
    image: "/project3.png",
    githubLink: "https://github.com/hammadArshad0",
    liveLink: "https://alimart.netlify.app/",
    category: "Frontend",
  },
  {
    id: 3,
    title: "EvoChat",
    description: "EvoChat is a full-stack real-time chat application built using the MERN stack with Socket.io for live messaging.",
    techStack: ["React Js", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "Socket.io"],
    developer: "Hammad Arshad",
    image: "/project4.png",
    githubLink: "https://github.com/hammadArshad0",
    liveLink: "https://evochat1.netlify.app/",
    category: "Fullstack",
  },
  {
    id: 4,
    title: "Emer Visa Center",
    description: "A professional portal for Emer Visa Center office, helping people secure visas for different countries and manage international travel documentation.",
    techStack: ["Next Js", "Tailwind CSS", "MongoDB"],
    developer: "Hammad Arshad",
    image: "/emar.png",
    githubLink: "https://github.com/hammadArshad0",
    liveLink: "#",
    category: "Fullstack",
  },
  {
    id: 5,
    title: "My Portfolio",
    description: "Personal portfolio to showcase projects and skills, built with Next Js and Framer Motion.",
    techStack: ["Next Js", "Tailwind CSS", "Framer Motion"],
    developer: "Hammad Arshad",
    image: "/profile.png",
    githubLink: "https://github.com/hammadArshad0/portfolio",
    liveLink: "#",
    category: "Frontend",
  },
  {
    id: 6,
    title: "Movies App",
    description: "A modern movie discovery application built with Next.js that fetches real-time data from the TMDB API.",
    techStack: ["Next Js", "Tailwind CSS", "TMDB API"],
    developer: "Hammad Arshad",
    image: "/project8.png",
    githubLink: "https://github.com/hammadArshad0",
    liveLink: "https://ghost-movies-app.vercel.app",
    category: "Frontend",
  },
];

const categories = [
  { name: "All", icon: <Layers size={14} /> },
  { name: "Frontend", icon: <Layout size={14} /> },
  { name: "Fullstack", icon: <Database size={14} /> },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const router = useRouter();

  // Signature Brand Color Shift
  const colorShift = {
    animate: {
      color: ["#ff0055", "#00dfd8", "#7000ff", "#ff0055"],
      transition: { duration: 8, repeat: Infinity, ease: "linear" }
    }
  };

  const filteredProjects =
    activeCategory === "All"
      ? projectsData.slice(0, 6)
      : projectsData.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <section id="projects" className="relative bg-[#050505] py-24 lg:py-32 px-6 overflow-hidden select-none">
      
      {/* Balloon-Type Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-20 blur-[1px]"
            style={{
              width: Math.random() * 12 + 4,
              height: Math.random() * 12 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 110}%`,
            }}
            animate={{
              y: ["0vh", "-110vh"],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0, 0.3, 0.3, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
               variants={colorShift}
               animate="animate"
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current bg-white/5 mb-6 shadow-[0_0_15px_rgba(255,0,85,0.05)]"
            >
              <Sparkles size={14} />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black">Innovative Solutions</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter">
              MY LATEST  <br />
              <motion.span 
                variants={colorShift}
                animate="animate"
                className="italic text-transparent bg-clip-text bg-gradient-to-r from-current to-white/30"
              >
                Project WORKS.
              </motion.span>
            </h2>
          </motion.div>

          {/* Category Selector */}
          <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-2xl">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all z-10 ${
                  activeCategory === cat.name ? "text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                {activeCategory === cat.name && (
                  <motion.div
                    layoutId="active-pill-projects"
                    className="absolute inset-0 bg-white rounded-xl -z-10 shadow-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -12, rotateX: 2, rotateY: -2 }}
                className="group relative perspective-1000"
              >
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(255, 0, 85, 0.1)",
                      "0 0 40px rgba(0, 223, 216, 0.2)",
                      "0 0 20px rgba(112, 0, 255, 0.1)",
                      "0 0 20px rgba(255, 0, 85, 0.1)"
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -inset-1 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500"
                />
                
                <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden p-3 h-full flex flex-col hover:border-white/30 transition-all duration-500 shadow-2xl">
                  {/* Title and Button Theme integration is inside the Card component */}
                  <ProjectCard project={project} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-28 flex flex-col items-center gap-6">
          <motion.button
            onClick={() => router.push("/projects")}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 px-8 py-4 bg-white text-black font-black rounded-full text-xs uppercase tracking-[0.3em] overflow-hidden shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-all"
          >
            Explore Full Archive
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight size={20} />
            </div>
          </motion.button>
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.5em]">Developed by Hammad Arshad</p>
        </div>

      </div>

      {/* Decorative Watermark */}
      <div className="absolute top-1/2 left-[-8%] opacity-[0.01] select-none pointer-events-none -rotate-90">
        <h3 className="text-[18rem] font-black leading-none">HAMMAD</h3>
      </div>
    </section>
  );
};

export default ProjectsSection;