"use client";
import { motion } from "framer-motion";
import { scale, slide } from "./Animation";
import Link from "next/link";
import { useState } from "react";
export default function NavLink({ data }) {
  const [hoverd, setHoverd] = useState(false);
  const { title, href, index } = data;
  return (
    <motion.div
      className="relative flex items-center z-40"
      variants={slide}
      custom={index}
      initial="initial"
      animate="enter"
      exit="exit"
      onMouseEnter={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
    >
      <motion.div
        variants={scale}
        animate={hoverd ? "open" : "closed"}
        exit="closed"
        className="w-2.5 h-2.5 bg-white rounded-full absolute -left-[30px]"
      ></motion.div>

      <Link
        href={href}
        className="text-[6vw] lg:text-[5vw] uppercase leading-[96%] font-bold"
      >
        {title}
      </Link>
    </motion.div>
  );
}
