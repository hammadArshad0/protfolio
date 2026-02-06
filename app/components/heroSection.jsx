"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Code2, Database, Sparkles } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const colorShift = {
    animate: {
      color: ["#ff0055", "#00dfd8", "#7000ff", "#ff0055"],
      transition: { duration: 8, repeat: Infinity, ease: "linear" }
    }
  };

  const glowShift = {
    animate: {
      boxShadow: [
        "0 0 25px rgba(255, 0, 85, 0.4)",
        "0 0 50px rgba(0, 223, 216, 0.5)",
        "0 0 25px rgba(112, 0, 255, 0.4)",
        "0 0 25px rgba(255, 0, 85, 0.4)"
      ],
      borderColor: ["#ff0055", "#00dfd8", "#7000ff", "#ff0055"],
      transition: { duration: 8, repeat: Infinity, ease: "linear" }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center px-6 pt-40 lg:pt-32 pb-20 overflow-hidden select-none">
      
      {/* Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: Math.random() * 5 + 2,
              height: Math.random() * 5 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.8, 1],
            }}
            transition={{ duration: Math.random() * 7 + 5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Grid adjustment: lg:grid-cols-[1.2fr_0.8fr] gives text more space */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
        
        {/* --- LEFT CONTENT (MORE SPACE) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          <motion.div 
            variants={colorShift}
            animate="animate"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-current bg-white/5 mb-8 w-fit mx-auto lg:mx-0"
          >
            <Sparkles size={16} />
            <span className="text-[11px] uppercase tracking-[0.5em] font-black">Full-Stack Architect</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-[5rem] font-black text-white leading-[0.85] tracking-tighter">
            HAMMAD <br /> ARSHAD
            <motion.span 
              variants={colorShift}
              animate="animate"
              className="block italic text-2xl md:text-5xl lg:text-[4rem] mt-4"
            >
              Full Stack Developer
            </motion.span>
          </h1>

          <div className="mt-10 space-y-4">
            <p className="text-gray-400 text-xl md:text-x1 lg:text-1xl max-w-2xl leading-tight font-medium tracking-tight mx-auto lg:mx-0">
              Crafting <span className="text-white font-black">High-End Digital Solutions</span> with a focus on 
              performance and architectural integrity.
            </p>
            
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 w-fit mx-auto lg:mx-0">
              <p className="text-gray-500 text-lg md:text-1xl font-bold uppercase tracking-[0.2em] leading-relaxed">
                Scalable <span className="text-white">Ecosystems</span> & 
                Modern <span className="text-white">Web Apps</span>.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-black rounded-full text-xs uppercase tracking-[0.3em] transition-all w-full sm:w-auto"
            >
              Hire Me
            </motion.button>
            <button className="group flex items-center gap-4 text-white font-black tracking-[0.3em] text-xs hover:opacity-70 transition-opacity uppercase">
              View Projects 
              <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* --- RIGHT CONTENT (SLIGHTLY SMALLER IMAGE) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center items-center mt-12 lg:mt-0"
        >
          <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
             transition={{ duration: 6, repeat: Infinity }}
             className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#00dfd8] rounded-full blur-[80px] md:blur-[120px]"
          />

          <div className="relative">
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 md:-inset-12 border border-dashed border-white/10 rounded-full"
            />
            
            <motion.div 
              variants={glowShift}
              animate="animate"
              // Image size adjusted from 480/520px down to 420/450px for better balance
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[450px] lg:h-[450px] rounded-full p-2 border-2 overflow-hidden bg-black grayscale-0 shadow-2xl"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="/h2.jpeg" 
                  alt="Hammad Arshad" 
                  fill 
                  priority
                  className="object-cover object-top scale-105"
                />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -25, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 md:-top-6 md:-right-6 p-4 md:p-6 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl z-20"
            >
              <Code2 className="text-cyan-400 w-7 h-7 md:w-10 md:h-10" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 25, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 p-4 md:p-6 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl z-20"
            >
              <Database className="text-purple-500 w-7 h-7 md:w-10 md:h-10" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;