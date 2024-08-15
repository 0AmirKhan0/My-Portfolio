"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
export default function MagneticWrapper({ className, children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { x, y } = position;

  function handleMouse(e) {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect();
    if (boundingRect) {
      const { width, height, top, left } = boundingRect;
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  }

  function reset() {
    setPosition({ x: 0, y: 0 });
  }

  return (
    <motion.div
      className={cn("relative", className)}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}
