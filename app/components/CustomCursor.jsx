"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const followerX = useMotionValue(-100);
  const followerY = useMotionValue(-100);

  // Spring animations for smooth following
  const springConfig = { damping: 20, stiffness: 300 };
  const followerSpringX = useSpring(followerX, springConfig);
  const followerSpringY = useSpring(followerY, springConfig);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      setIsMobile(isTouchDevice);
      return isTouchDevice;
    };

    const isMobileDevice = checkMobile();
    if (isMobileDevice) return;

    window.addEventListener("resize", checkMobile);

    // Track mouse movement
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      followerX.set(e.clientX);
      followerY.set(e.clientY);
      setIsVisible(true);
    };

    // Hide cursor when mouse leaves window
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Show cursor when mouse enters window
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect hover on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest('[type="button"]') ||
        target.closest('[type="submit"]') ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(isInteractive);
    };

    const handleMouseOut = (e) => {
      // Only set hovering to false if we're not moving to another interactive element
      const relatedTarget = e.relatedTarget;
      if (
        !relatedTarget ||
        (relatedTarget.tagName !== "A" &&
          relatedTarget.tagName !== "BUTTON" &&
          relatedTarget.getAttribute("role") !== "button" &&
          !relatedTarget.closest("a") &&
          !relatedTarget.closest("button") &&
          !relatedTarget.closest('[role="button"]'))
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", checkMobile);
    };
  }, [cursorX, cursorY, followerX, followerY]);

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--color-accent)] pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { duration: 0.15 },
        }}
      />

      {/* Follower circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--color-accent)] pointer-events-none z-[9998]"
        style={{
          x: followerSpringX,
          y: followerSpringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: 0.5,
        }}
        animate={{
          opacity: isVisible ? 0.5 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { duration: 0.15 },
        }}
      />
    </>
  );
};

export default CustomCursor;
