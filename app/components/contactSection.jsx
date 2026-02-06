"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, Send, Sparkles, Coffee, Globe, Calendar, MessageSquare, Rocket, Zap, CheckCircle2
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Synced Color Shifting Animation from Hero/About
  const colorShift = {
    animate: {
      color: ["#ff0055", "#00dfd8", "#7000ff", "#ff0055"],
      transition: { duration: 8, repeat: Infinity, ease: "linear" }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    // Replace these IDs with your actual EmailJS credentials
    emailjs.sendForm(
      "service_41m739e", 
      "template_84s818k", 
      formRef.current, 
      "9Y8vTLv98ctHqio69"
    )
    .then(() => {
        setStatus("success");
        setFormData({ from_name: "", reply_to: "", phone: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
    }, (error) => {
        console.error("Email Error:", error.text);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
    });
  };

  return (
    <section id="contact" className="relative bg-[#050505] px-6 py-24 lg:py-32 overflow-hidden select-none">
      
      {/* --- ENHANCED BALLOON PARTICLES (Synced with Projects) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
              y: ["10vh", "-110vh"],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.4, 0.4, 0],
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
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
             <motion.div variants={colorShift} animate="animate" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-current bg-white/5 mb-6 text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md">
               <Sparkles size={14} /> Available for new collaborations
             </motion.div>
             <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
               LET'S <br />
               <motion.span variants={colorShift} animate="animate" className="italic outline-text">CONNECT.</motion.span>
             </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* --- LEFT SIDE: INFO CARDS --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl h-full shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-10 tracking-tighter uppercase">Direct Contact</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", val: "hammadarshad481@gmail.com", color: "text-blue-400" },
                  { icon: Phone, label: "Phone", val: "+92 343 9319228", color: "text-green-400" },
                  { icon: MapPin, label: "Location", val: "Rawalpindi, Pakistan", color: "text-purple-400" }
                ].map((item, idx) => (
                  <motion.div key={idx} whileHover={{ x: 10 }} className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/5 group transition-all">
                    <div className={`p-4 rounded-xl bg-black border border-white/10 ${item.color} shadow-lg shadow-black/50`}>
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">{item.label}</p>
                      <p className="text-white font-bold text-sm sm:text-base">{item.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Coffee size={60} />
                </div>
                <div className="flex gap-3 mb-4">
                  <Coffee size={20} className="text-amber-500" />
                  <Globe size={20} className="text-blue-500" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  I'm always excited to discuss new opportunities. Whether you have a specific project 
                  in mind or just want to chat about tech, let's build something meaningful together!
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: PREMIUM FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="lg:col-span-7"
          >
            <form 
              ref={formRef} 
              onSubmit={sendEmail} 
              className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[3rem] backdrop-blur-xl h-full space-y-6 shadow-2xl relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <Rocket size={24} className="text-[#00dfd8]" />
                <h4 className="text-xl font-black text-white uppercase tracking-tighter">Initialize Transmission</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-4">Full Name</label>
                  <input required name="from_name" type="text" placeholder="Hammad Arshad" value={formData.from_name} onChange={handleInputChange} className="w-full bg-black/40 border border-white/10 rounded-2xl px-7 py-5 text-white focus:outline-none focus:border-[#ff0055] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-4">Email Address</label>
                  <input required name="reply_to" type="email" placeholder="hammad@example.com" value={formData.reply_to} onChange={handleInputChange} className="w-full bg-black/40 border border-white/10 rounded-2xl px-7 py-5 text-white focus:outline-none focus:border-[#00dfd8] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-4">Contact Number</label>
                  <input required name="phone" type="tel" placeholder="+92 343 9319228" value={formData.phone} onChange={handleInputChange} className="w-full bg-black/40 border border-white/10 rounded-2xl px-7 py-5 text-white focus:outline-none focus:border-[#7000ff] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-4">Project Subject</label>
                  <input required name="subject" type="text" placeholder="MERN Stack Dev" value={formData.subject} onChange={handleInputChange} className="w-full bg-black/40 border border-white/10 rounded-2xl px-7 py-5 text-white focus:outline-none focus:border-[#ff0055] transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-4">Detailed Message</label>
                <textarea required name="message" rows="5" placeholder="Tell me about your vision..." value={formData.message} onChange={handleInputChange} className="w-full bg-black/40 border border-white/10 rounded-3xl px-7 py-5 text-white focus:outline-none focus:border-[#00dfd8] transition-all resize-none"></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "loading"}
                className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-4 transition-all duration-500 ${
                    status === "success" ? "bg-green-600 text-white" : "bg-white text-black hover:bg-[#00dfd8]"
                }`}
              >
                <AnimatePresence mode="wait">
                  {status === "loading" ? (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                      <Zap size={18} className="animate-pulse" /> Processing...
                    </motion.div>
                  ) : status === "success" ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2">
                      <CheckCircle2 size={18} /> Transmission Successful
                    </motion.div>
                  ) : (
                    <motion.div key="idle" className="flex items-center gap-2">
                      Send Message <Send size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* --- BOTTOM STATUS --- */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center mt-20 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Response time: Usually &lt; 24 hours</span>
            <Zap size={14} className="text-[#00dfd8]" />
          </div>
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]">Hammad Arshad • Digital Architect • Rawalpindi</p>
        </motion.div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;