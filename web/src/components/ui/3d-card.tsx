"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Your utility for merging class names

/**
 * Props for the InteractiveTravelCard component.
 */
export interface InteractiveTravelCardProps {
  /** The main title for the card, e.g., "Sapa Valley" */
  title: string;
  /** A subtitle or location, e.g., "Vietnam" */
  subtitle: string;
  /** The URL for the background image. */
  imageUrl: string;
  /** The text for the primary action button, e.g., "Book your trip" */
  actionText: string;
  /** The destination URL for the top-right link. */
  href: string;
  /** Callback function when the primary action button is clicked. */
  onActionClick: () => void;
  /** Optional additional class names for custom styling. */
  className?: string;
}

/**
 * A responsive and theme-adaptive travel card with a 3D tilt effect on hover.
 */
export const InteractiveTravelCard = React.forwardRef<
  HTMLDivElement,
  InteractiveTravelCardProps
>(
  (
    { title, subtitle, imageUrl, actionText, href, onActionClick, className },
    ref
  ) => {
    // --- 3D Tilt Animation Logic ---
    const [isHovered, setIsHovered] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], ["10.5deg", "-10.5deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-10.5deg", "10.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      setIsHovered(true);
      const rect = e.currentTarget.getBoundingClientRect();
      const { width, height, left, top } = rect;
      const mouseXVal = e.clientX - left;
      const mouseYVal = e.clientY - top;
      const xPct = mouseXVal / width - 0.5;
      const yPct = mouseYVal / height - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          // Base styles for the card container, using theme variables for border
          "group relative h-[26rem] w-80 rounded-2xl bg-transparent shadow-2xl border border-white/10",
          className
        )}
      >
        <div
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-2 sm:inset-4 grid h-[calc(100%-1rem)] sm:h-[calc(100%-2rem)] w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] grid-rows-[1fr_auto] rounded-xl shadow-lg"
        >
          {/* Background Image */}
          <img
            src={imageUrl}
            alt={`${title}, ${subtitle}`}
            className="absolute inset-0 h-full w-full rounded-xl object-cover"
          />

          {/* Darkening overlay for better text contrast over the image */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-b from-black/20 via-transparent to-black/80" />

          {/* Card Content (Header & Footer) */}
          <div className="relative flex flex-col justify-between rounded-xl p-2 sm:p-4 text-white">

            {/* Header section with text and link */}
            <div className="flex items-start justify-between">
              <div>
                <motion.h2
                  style={{ transform: "translateZ(30px)" }}
                  className="text-base sm:text-lg md:text-2xl font-bold font-poppins"
                >
                  {title}
                </motion.h2>
                <motion.p
                  style={{ transform: "translateZ(20px)" }}
                  className="text-[10px] sm:text-xs md:text-sm font-light text-white/80 font-inter tracking-wide uppercase"
                >
                  {subtitle}
                </motion.p>
              </div>
              {/* Removed top-right ArrowUpRight button as requested */}
            </div>

            {/* Footer Button (Appears on Hover via Framer Motion state) */}
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 15,
                pointerEvents: isHovered ? "auto" : "none"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ transform: "translateZ(20px)" }}
            >
              <motion.button
                onClick={onActionClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "w-full rounded-lg py-2 sm:py-3 text-center text-xs sm:text-sm font-bold text-rich-black uppercase tracking-widest",
                  // Glassmorphism styling logic
                  "bg-fo-yellow hover:bg-fo-yellow/90 shadow-lg"
                )}
              >
                {actionText}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }
);
InteractiveTravelCard.displayName = "InteractiveTravelCard";
