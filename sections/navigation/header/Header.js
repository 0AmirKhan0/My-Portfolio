"use client";
import FancyButton from "@/components/ui/FancyButton";
import Profile from "@/components/ui/Profile";
import MagneticWrapper from "@/components/visualEffects/MagneticWrapper";
import { FaArrowRight } from "react-icons/fa";
import FullScreenMenu from "./fullScreenMenu/FullScreenMenu";
import { useEffect, useState } from "react";
import ToggleButton from "./fullScreenMenu/ToggleButton";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <FancyButton text="Let's talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {/* toggle button */}
      {showToggle && <ToggleButton open={open} setOpen={setOpen} />}

      {/* full screen menu */}
      <AnimatePresence mode="wait">
        {open && <FullScreenMenu />}
      </AnimatePresence>
    </div>
  );
}
