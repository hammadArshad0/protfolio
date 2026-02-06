"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { Download, Linkedin, Github, Layout, Database, Server, Instagram } from "lucide-react";

const AboutSection = () => {
  // --- ANIMATION SETTINGS ---
  const colorShift = {
    animate: {
      color: ["#ff0055", "#00dfd8", "#7000ff", "#ff0055"],
      transition: { duration: 8, repeat: Infinity, ease: "linear" }
    }
  };

  const borderShift = {
    animate: {
      borderColor: ["#ff0055", "#00dfd8", "#7000ff", "#ff0055"],
      transition: { duration: 8, repeat: Infinity, ease: "linear" }
    }
  };

  // --- REVEAL CARD LOGIC ---
  const containerRef = useRef(null);
  const radius = useMotionValue(0);
  const springRadius = useSpring(radius, { stiffness: 260, damping: 28 });
  const [circle, setCircle] = useState({ x: 50, y: 50 });
  const clipPath = useTransform(springRadius, (r) => `circle(${r}% at ${circle.x}% ${circle.y}%)`);

  const updateMousePosition = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCircle({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const skills = [
    { name: "Frontend", tools: "React, Next.js, Tailwind CSS", icon: <Layout size={20} /> },
    { name: "Backend", tools: "Node.js, Express, ASP.NET", icon: <Server size={20} /> },
    { name: "Database", tools: "MongoDB, SQL Server, PostgreSQL", icon: <Database size={20} /> },
  ];

  return (
    <section id="about" className="relative bg-[#050505] text-white px-6 py-24 lg:py-32 overflow-hidden select-none">
      
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-black leading-none text-center tracking-tighter">DEVELOPER</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT SIDE: THE DYNAMIC REVEAL CARD --- */}
        <div className="flex justify-center lg:justify-start">
          <div
            ref={containerRef}
            className="relative w-72 sm:w-80 h-[480px] group cursor-none"
            onMouseMove={updateMousePosition}
            onMouseEnter={() => animate(radius, 160)}
            onMouseLeave={() => animate(radius, 0)}
          >
            {/* Shifting Border */}
            <motion.div 
              variants={borderShift}
              animate="animate"
              style={{ rotate: [0, 360] }}
              transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" } }}
              className="absolute -inset-6 border-2 border-dashed rounded-3xl opacity-30"
            />
            
            {/* FRONT IMAGE (Original default view) */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] z-0 shadow-2xl">
              <img src="/h1.jpeg" alt="Hammad" className="w-full h-full object-cover transition-all duration-700" />
              <div className="absolute bottom-6 left-6 z-10">
                 <motion.p variants={colorShift} animate="animate" className="font-black text-2xl tracking-tighter">HAMMAD ARSHAD</motion.p>
                 <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.4em]">Hover to Reveal</p>
              </div>
            </div>

            {/* REVEAL CONTENT (The scan effect) */}
            <motion.div
              className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-8 z-10 overflow-hidden"
              style={{ clipPath, background: "var(--color-bg-surface, #111)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#00dfd8]/10 to-transparent" />
              <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6 border-2 border-[#00dfd8] shadow-2xl">
                <img src="/h2.jpeg" className="w-full h-full object-cover scale-110" />
              </div>
              <h2 className="text-xl font-black text-white">Hammad Arshad</h2>
              <p className="text-[#00dfd8] text-xs font-black uppercase tracking-[0.2em] mt-2">Full Stack Developer</p>
            </motion.div>
          </div>
        </div>

        {/* --- RIGHT SIDE: PROFESSIONAL CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-2">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none uppercase text-white">
              About
            </h2>
            <div className="h-2 w-32 bg-gradient-to-r from-[#ff0055] to-[#7000ff] rounded-full" />
          </div>

          <p className="text-gray-300 text-xl leading-relaxed font-medium">
            My name is <motion.span variants={colorShift} animate="animate" className="font-black uppercase tracking-tight text-2xl">Hammad Arshad</motion.span>. 
            I am a <motion.span variants={colorShift} animate="animate" className="font-black uppercase tracking-tight text-2xl">Full Stack Developer</motion.span>. 
            I build websites that aren't just tools, but digital experiences. By mastering the 
            <span className="text-white font-bold"> MERN Stack</span>, 
            <span className="text-white font-bold"> Next.js</span>, and 
            <span className="text-white font-bold"> ASP.NET</span>, I provide 
            scalable, secure, and user-centric solutions.
          </p>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 transition-all border-b-4 border-b-transparent hover:border-b-[#00dfd8]"
              >
                <div className="text-white mb-4 opacity-80">{skill.icon}</div>
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2">{skill.name}</h4>
                <p className="text-gray-500 text-[11px] font-bold leading-tight">{skill.tools}</p>
              </motion.div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center gap-8 pt-6">
            <motion.a
              href="/Hammad.pdf"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.3em] rounded-full flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <Download size={20} /> Download CV
            </motion.a>
            
            <div className="flex items-center gap-6 border-l border-white/10 pl-8">
              <a href="https://linkedin.com/in/hammadarshad48" target="_blank" className="text-gray-500 hover:text-[#00dfd8] transition-colors"><Linkedin size={26} /></a>
              <a href="https://github.com/hammadArshad0" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Github size={26} /></a>
              <a href="https://instagram.com/h__a_m_i0048" target="_blank" className="text-gray-500 hover:text-[#ff0055] transition-colors"><Instagram size={26} /></a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;