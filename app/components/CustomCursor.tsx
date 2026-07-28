"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  // Position trackers
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the outer trailing circle
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Show cursor only when mouse enters window
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Setup hover listeners for interactive elements
    const addHoverListeners = () => {
      const targets = document.querySelectorAll(
        "a, button, input, textarea, [role='button'], .cursor-pointer"
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    // Run initial listeners and attach observer to handle dynamically loaded page items
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* 1. Inner Pointer Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 2. Outer Trailing Circle */}
      <motion.div
        className="fixed top-0 left-0 border border-white rounded-full pointer-events-none z-[99998] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? 44 : 24,
          height: hovered ? 44 : 24,
          backgroundColor: hovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.25 }}
      />
    </>
  );
}
