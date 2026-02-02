"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import ProjectCard from "./projectCard";

export const projectsData = [
  {
    id: 1,
    title: "E-BooksShelf (E-Library)",
    description:
      "E-BooksShelf is a responsive React.js web app that lets users search, browse, and preview books using the Google Books API. It features category filters, detailed previews, and external book links, all managed with Context API.",
    techStack: ["React Js", "CSS", "Google Books API"],
    developer: "Hammad Arshad",
    image: "/project1.png",
    githubLink: "https://github.com/hammadArshad0",
    liveLink: "https://ebooksshelf.netlify.app/",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Ali Mart",
    description:
      "Ali Mart is an online shopping platform crafted to provide customers with a smooth and enjoyable shopping experience. The website showcases a diverse range of products, intuitive navigation, and secure payment options, ensuring a hassle-free journey from browsing to checkout.",
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
    description:
      "EvoChat is a full-stack real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.io for live messaging. It allows users to sign up, create conversations, send/receive messages instantly, and manage chats in a clean, responsive UI.",
    techStack: ["React Js", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "Socket.io"],
    developer: "Hammad Arshad",
    image: "/project4.png",
    githubLink: "https://github.com/hammadArshad0",
    liveLink: "https://evochat1.netlify.app/",
    category: "Fullstack",
  },
  {
    id: 4,
    title: "Codask",
    description:
      "Codask is a real-time collaborative code editor with integrated project and task management. Users can create projects, invite team members, chat in groups, and collaboratively edit code using socket.io. Team leads assign tasks and track project progress seamlessly.",
    techStack: ["React Js", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "Socket.io"],
    developer: "Ali Husnain",
    image: "/project5.png",
    githubLink: "https://github.com/hammadArshad0/FitZone_Gym_app",
    liveLink: "https://codask.netlify.app/",
    category: "Fullstack",
  },
  {
    id: 5,
    title: "My Portfolio",
    description:
      "Personal portfolio to showcase projects, skills, and contact info, built with Gatsby and content managed via Contentful.",
    techStack: ["Next Js", "Tailwind CSS", "Framer Motion"],
    developer: "Hammad Arshad",
    image: "/project7.png",
    githubLink: "https://github.com/hammadArshad0/portfolio",
    liveLink: "#",
    category: "Frontend",
  },
  {
    id: 6,
    title: "Movies App",
    description: "A modern movie discovery application built with Next.js that fetches real-time data from the TMDB API. The app allows users to explore trending, latest, and top-rated movies with rich details including posters, ratings, genres, and descriptions. It features a responsive design for seamless use across devices, smooth navigation powered by Next.js routing, and optimized performance with server-side rendering.",
    techStack: ["Next Js", "Tailwind CSS", "TMDB API"],
    developer: "Hammad Arshad",
    image: "/project8.png",
    githubLink: "https://github.com/hammadArshad0",
    liveLink: "https://ghost-movies-app.vercel.app",
    category: "Frontend",
  },
  {
    id: 7,
    title: "VendorBay",
    description: "VendorBay is a responsive multi-vendor e-commerce platform where users can shop and sellers manage their shops. It features lazy loading and React Suspense for performance, image compression with Sharp, and backend pagination. Admins manage users, sellers, and products with full control.",
    techStack: ["React Js", "CSS", "Node Js", "Express Js", "MongoDB"],
    developer: "Hammad Arshad",
    image: "/project6.png",
    githubLink: "https://github.com/hammadArshad0",
    liveLink: "https://vendorbay1.netlify.app/",
    category: "Frontend",
  },
];

const categories = ["All", "Frontend", "Backend", "Fullstack"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData.slice(0, 6)
      : projectsData.filter((p) => p.category === activeCategory).slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const categoryButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      rotateX: -90 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="relative overflow-hidden px-8 lg:px-16 py-24 sm:py-32 bg-[var(--color-bg-secondary)]"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--color-accent)]/5 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 30, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-text-primary)] inline-block relative mb-4"
            whileHover={{
              scale: 1.05,
            }}
          >
            My Projects
            <motion.span
              className="absolute left-0 -bottom-2 h-1 bg-[var(--color-accent)] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          <motion.p
            className="text-lg text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Discover my journey through code, creativity, and innovation
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              variants={categoryButtonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 overflow-hidden group ${
                activeCategory === cat
                  ? "bg-[var(--color-accent)] text-[var(--color-bg-primary)] shadow-lg shadow-[var(--color-accent)]/20"
                  : "bg-[var(--color-bg-card)] backdrop-blur-sm text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)] border border-[var(--color-border)]"
              }`}
            >
              {/* Hover gradient background */}
              <motion.span
                className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Active category background */}
              {activeCategory === cat && (
                <motion.div
                  className="absolute inset-0 bg-[var(--color-accent)]"
                  layoutId="activeCategory"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Category text */}
              <span className="relative z-20">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid with stagger animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="flex flex-wrap justify-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={`${activeCategory}-${project.id}`}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="group"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Show All Projects Button */}
        {projectsData.length > 6 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => router.push("/projects")}
              className="relative px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-bold rounded-full text-lg overflow-hidden group shadow-xl shadow-[var(--color-accent)]/20"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-[var(--color-bg-primary)] opacity-0 group-hover:opacity-10"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="relative z-10 group-hover:text-[var(--color-accent)] transition-colors duration-300"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                View All Projects
              </motion.span>
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                whileHover={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        )}

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 w-6 h-6 bg-[var(--color-accent)] rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-4 h-4 bg-[var(--color-accent)] rounded-full opacity-20"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </motion.section>
  );
};

export default ProjectsSection;