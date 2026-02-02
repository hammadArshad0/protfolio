"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { Menu, X, Home, User, Mail, Send, Laptop, FolderKanban } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();
  const sidebarRef = useRef(null);
  const timeoutRef = useRef(null);

  // Handle hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update active state based on current pathname
  useEffect(() => {
    if (!isClient) return;
    
    const currentPath = pathname || "/";
    if (currentPath === "/") {
      setActive("Home");
    } else if (currentPath.startsWith("/about")) {
      setActive("About");
    } else if (currentPath.startsWith("/projects")) {
      setActive("Projects");
    } else if (currentPath.startsWith("/contact")) {
      setActive("Contact");
    }
  }, [pathname, isClient]);

  // Enhanced scroll handler with debouncing and hide/show functionality
  const handleScroll = useCallback(() => {
    if (!isClient) return;
    
    const currentScrollY = window.scrollY;
    
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Debounce scroll updates
    timeoutRef.current = setTimeout(() => {
      setScrolled(currentScrollY > 50);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      
      setLastScrollY(currentScrollY);
    }, 10);
  }, [lastScrollY, isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll, isClient]);

  // Close sidebar when clicking outside
  useEffect(() => {
    if (!isClient) return;
    
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isClient]);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isClient) return;
    
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isClient]);

  // Prevent render on server-side to avoid hydration issues
  if (!isClient) {
    return null;
  }

  const links = [
    { name: "Home", icon: <Home size={18} />, href: "/" },
    { name: "About", icon: <User size={18} />, href: "/about" },
    { name: "Projects", icon: <FolderKanban size={18} />, href: "/projects" },
    { name: "Contact", icon: <Mail size={18} />, href: "/contact" },
  ];

  const handleLinkClick = (linkName, href) => {
    setActive(linkName);
    setIsOpen(false);
    
    // Add a small delay to allow for smooth transitions
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  const handleLogoClick = () => {
    setActive("Home");
    router.push("/");
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setActive("Contact");
    setIsOpen(false);
    setTimeout(() => {
      router.push("/contact");
    }, 100);
  };

  return (
    <>
      {/* Backdrop overlay for mobile sidebar */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <nav
        className={`w-full h-16 sm:h-[72px] md:h-20 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 fixed top-0 z-50 transition-all duration-300 ${
          isScrollingDown ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled 
            ? "bg-[var(--color-bg-navbar)] backdrop-blur-md text-[var(--color-text-primary)] shadow-lg" 
            : "bg-[var(--color-bg-navbar)] backdrop-blur-md text-[var(--color-text-primary)]"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-1.5 sm:gap-2 text-[var(--color-accent)] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl cursor-pointer transition-transform hover:scale-105 focus:outline-none rounded-lg p-1"
          tabIndex={0}
          role="button"
          aria-label="Go to homepage"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleLogoClick();
            }
          }}
        >
          <Laptop className="w-6 h-7 sm:w-7 sm:h-8 md:w-8 md:h-10 flex-shrink-0" aria-hidden="true" />
          <span>Hammad Arshad</span>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden lg:flex gap-4 xl:gap-6 2xl:gap-8 items-center px-4 xl:px-6 2xl:px-8 py-1.5 xl:py-2 rounded-2xl xl:rounded-3xl backdrop-blur-md transition bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)]`}
          role="menubar"
          aria-label="Desktop navigation menu"
        >
          {links.map((link) => (
            <li key={link.name} role="none">
              <Link
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.name, link.href);
                }}
                className={`flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3 py-1 rounded-full cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-50 text-sm xl:text-base ${
                  active === link.name
                    ? "bg-[var(--color-accent)] text-[var(--color-bg-primary)] scale-105"
                    : "hover:text-[var(--color-accent)] hover:scale-105"
                }`}
                role="menuitem"
                aria-current={active === link.name ? "page" : undefined}
              >
                <span aria-hidden="true" className="w-4 h-4 xl:w-[18px] xl:h-[18px] flex-shrink-0">{link.icon}</span>
                <span className="whitespace-nowrap">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side - Theme Toggle and CTA Button */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <ThemeToggle />
          <button
            onClick={handleContactClick}
            className="flex items-center gap-1.5 xl:gap-2 px-4 xl:px-5 py-1.5 xl:py-2 rounded-full bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-semibold shadow-lg hover:shadow-[var(--color-accent)]/20 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-30 cursor-pointer text-sm xl:text-base whitespace-nowrap"
            aria-label="Contact me"
          >
            <Send size={16} className="xl:w-[18px] xl:h-[18px] flex-shrink-0" aria-hidden="true" />
            <span>Get in touch</span>
          </button>
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <button
            className="cursor-pointer p-1.5 sm:p-2 rounded-lg transition-colors hover:bg-[var(--color-bg-card-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-30 active:bg-[var(--color-bg-card-hover)]"
            onClick={() => setIsOpen(true)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-sidebar"
          >
            <Menu
              size={24}
              className="sm:w-7 sm:h-7 text-[var(--color-text-primary)]"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <aside
          ref={sidebarRef}
          id="mobile-sidebar"
          className={`fixed top-0 right-0 h-[100vh] w-[280px] sm:w-72 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] transform transition-transform duration-300 z-50 border-l border-[var(--color-border)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 border-b border-[var(--color-border)]">
            <h2 id="mobile-menu-title" className="text-base sm:text-lg font-semibold sr-only">
              Mobile Navigation Menu
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer p-2 rounded-lg transition-colors hover:bg-[var(--color-bg-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-50 active:bg-[var(--color-bg-tertiary)]"
              aria-label="Close menu"
            >
              <X size={24} className="sm:w-7 sm:h-7 text-[var(--color-text-primary)]" aria-hidden="true" />
            </button>
          </div>
          
          <nav role="navigation" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-6 px-4 sm:px-6" role="menu">
              {links.map((link) => (
                <li key={link.name} role="none">
                  <button
                    onClick={() => handleLinkClick(link.name, link.href)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-full cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-30 text-sm sm:text-base active:scale-95 ${
                      active === link.name
                        ? "bg-[var(--color-accent)] text-[var(--color-bg-primary)]"
                        : "hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)]"
                    }`}
                    role="menuitem"
                    aria-current={active === link.name ? "page" : undefined}
                  >
                    <span aria-hidden="true" className="w-5 h-5 sm:w-[18px] sm:h-[18px] flex-shrink-0">{link.icon}</span>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="px-4 sm:px-6 mt-6 sm:mt-8">
            <button
              onClick={handleContactClick}
              className="w-full flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-semibold shadow-lg hover:shadow-[var(--color-accent)]/20 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-30 cursor-pointer text-sm sm:text-base"
              aria-label="Contact me"
            >
              <Send size={18} className="flex-shrink-0" aria-hidden="true" />
              <span>Get in touch</span>
            </button>
          </div>
        </aside>
      </nav>
    </>
  );
};

export default Navbar;