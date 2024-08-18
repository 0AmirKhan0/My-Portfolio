"use client";
import { FeaturedData } from "@/data/Featured";
import FeaturedCard from "../cards/featured/FeaturedCard";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ExpandableFeatured() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  function handleMouseEnter(index) {
    setHoveredIndex(index);
  }
  function handleMouseLeave() {
    setHoveredIndex(null);
  }

  return (
    <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
      {FeaturedData.slice(1).map((f, i) => (
        <div
          key={i}
          className={cn(
            "relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out",
            i === hoveredIndex ? "lg:w-[40%]" : "lg:w-[33.33%]"
          )}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <FeaturedCard
            active={i === hoveredIndex}
            tag={f.tag}
            title={f.title}
            video={f.video}
          />
        </div>
      ))}
    </div>
  );
}
