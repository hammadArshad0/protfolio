"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Laptop, Linkedin, Mail, ArrowUp, Heart, Zap, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Hammad Arshad Signature Color Shift
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
    <footer className="relative bg-[#050505] pt-24 pb-12 px-6 overflow-hidden border-t border-white/5">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff0055]/5 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00dfd8]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={scrollToTop}>
              <motion.div 
                variants={colorShift}
                animate="bg"
                className="p-3 rounded-2xl text-black shadow-2xl transition-transform group-hover:rotate-12"
              >
                <Laptop size={28} strokeWidth={3} />
              </motion.div>
              <motion.h2 
                variants={colorShift}
                animate="animate"
                className="text-3xl md:text-4xl font-black tracking-tighter uppercase"
              >
                Hammad Arshad
              </motion.h2>
            </div>
            <p className="text-gray-500 text-lg max-w-md leading-relaxed font-medium">
              Digital Architect & Full-Stack Developer specializing in high-performance experiences.
              Let's craft something extraordinary together.
            </p>
            
            {/* LARGE SOCIAL BUTTONS WITH INSTAGRAM */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Github />, link: "https://github.com/hammadArshad0", color: "#333" },
                { icon: <Linkedin />, link: "https://linkedin.com/in/hammadarshad48", color: "#0077b5" },
                { icon: <Instagram />, link: "https://www.instagram.com/h__a_m_i0048", color: "#E4405F" }, // Instagram added
                { icon: <Mail />, link: "mailto:hammadarshad481@gmail.com", color: "#ff0055" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.1, backgroundColor: social.color, color: "#fff" }}
                  className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300 shadow-xl backdrop-blur-md"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* AVAILABILITY STATUS */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.4em]">Status</h4>
            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-xl relative group overflow-hidden shadow-2xl">
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00dfd8]/10 blur-2xl group-hover:bg-[#ff0055]/20 transition-all duration-500" />
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                  <span className="text-xs font-black text-white uppercase tracking-widest">Available for Hire</span>
               </div>
               <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                 Currently taking new freelance projects and full-time opportunities in Rawalpindi & Remote.
               </p>
               <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-[#00dfd8] text-[10px] font-black uppercase tracking-widest"
               >
                 Book a Consultation <Zap size={14} className="fill-current" />
               </motion.button>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} Hammad Arshad. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-[9px] font-bold uppercase tracking-widest">
              Made with <Heart size={12} className="text-[#ff0055] fill-[#ff0055]" /> in Rawalpindi, Pakistan
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-lg">
              <ArrowUp size={20} />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 group-hover:text-white transition-colors">
              Elevate to Top
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;