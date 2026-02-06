"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { Menu, X, Home, User, Mail, Send, Laptop, FolderKanban, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();

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

  useEffect(() => { setIsClient(true); }, []);

  useEffect(() => {
    if (!isClient) return;
    const paths = { "/": "Home", "/about": "About", "/projects": "Projects", "/contact": "Contact" };
    const currentPath = Object.keys(paths).find(p => pathname === p || pathname?.startsWith(p + "/"));
    setActive(paths[currentPath] || "Home");
  }, [pathname, isClient]);

  // Fixed scroll logic: Sirf background change hoga, nav gayab nahi hoga
  const handleScroll = useCallback(() => {
    if (!isClient) return;
    setScrolled(window.scrollY > 20);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, isClient]);

  if (!isClient) return null;

  const links = [
    { name: "Home", icon: <Home size={16} />, href: "/" },
    { name: "About", icon: <User size={16} />, href: "/about" },
    { name: "Projects", icon: <FolderKanban size={16} />, href: "/projects" },
    { name: "Contact", icon: <Mail size={16} />, href: "/contact" },
  ];

  const handleLinkClick = (linkName, href) => {
    setActive(linkName);
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>
      
      {/* Navbar Fixed at Top */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-6">
        <div className={`max-w-full mx-auto flex justify-between items-center px-6 py-4 rounded-2xl transition-all duration-500 border ${
          scrolled 
            ? "bg-black/60 backdrop-blur-2xl border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] scale-[0.98]" 
            : "bg-transparent border-transparent"
        }`}>
          
          {/* Logo Section */}
          <div onClick={() => router.push("/")} className="group flex items-center gap-3 cursor-pointer">
            <motion.div 
              variants={colorShift}
              animate="bg"
              className="p-2.5 rounded-xl text-black shadow-xl transition-transform group-hover:rotate-[15deg] group-hover:scale-110"
            >
              <Laptop size={20} strokeWidth={3} />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-1xl font-black tracking-tighter text-white leading-none">
                HAMMAD<motion.span variants={colorShift} animate="animate">.</motion.span>
              </span>
              <span className="text-[12px] uppercase tracking-[0.4em] font-black text-gray-500">FullStack Devolper</span>
            </div>
          </div>

          {/* Desktop Nav - Floating Pill */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 p-1 rounded-full backdrop-blur-xl">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.name, link.href); }}
                className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                  active === link.name ? "text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                {active === link.name && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact")}
              className="hidden md:flex items-center gap-3 px-6 py-2.5 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl hover:shadow-white/10"
            >
              Hire Me
              <Zap size={14} className="fill-black" />
            </motion.button>

            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[85%] sm:w-[400px] bg-black/90 backdrop-blur-2xl z-[70] border-l border-white/10 lg:hidden"
          >
            <div className="p-10 flex flex-col h-full">
              <div className="flex justify-between items-center mb-16">
                <span className="font-black text-xs text-gray-500 tracking-[0.5em] uppercase">Navigation</span>
                <button onClick={() => setIsOpen(false)} className="p-3 bg-white/5 rounded-full text-white">
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-4">
                {links.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.name, link.href)}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl text-xl font-black transition-all ${
                      active === link.name 
                      ? "bg-white text-black shadow-2xl" 
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-5">
                       {link.icon}
                       <span className="uppercase tracking-tighter">{link.name}</span>
                    </div>
                    {active === link.name && <Sparkles size={18} />}
                  </button>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <div className="flex justify-center py-6">
                   <ThemeToggle />
                </div>
                <button 
                  onClick={() => { router.push("/contact"); setIsOpen(false); }}
                  className="w-full py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 shadow-2xl shadow-white/5"
                >
                  Let's Connect
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;