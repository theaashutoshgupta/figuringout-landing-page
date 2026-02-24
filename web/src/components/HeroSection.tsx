"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const dynamicWords = [
    "entrepreneurship",
    "health",
    "tech",
    "politics",
    "growth",
    "startups",
];

export default function HeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % dynamicWords.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Premium cinematic easing curve
    const easeOutQuart = [0.165, 0.84, 0.44, 1] as const;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: easeOutQuart },
        },
    };

    return (
        <section className="relative flex flex-col items-start justify-end md:justify-center min-h-screen text-left px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden bg-rich-black pb-12 md:pb-0">

            {/* Background Image with Slow Zoom-in Effect */}
            <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: easeOutQuart }}
                className="absolute inset-0 z-0 will-change-transform overflow-hidden bg-rich-black"
            >
                <img
                    src="/founderwithgates.png"
                    alt="Figuring Out Hero"
                    className="absolute inset-0 w-full h-full object-cover object-[80%_center] sm:object-[82%_center] md:object-right"
                />
            </motion.div>

            {/* Gradient overlays for text readability */}
            {/* Bottom gradient - strong on mobile to ensure text is readable over the cropped image */}
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-rich-black via-rich-black/70 to-transparent md:bg-none" />
            {/* Left gradient - desktop style */}
            <div className="absolute inset-0 z-[1] pointer-events-none hidden md:block bg-gradient-to-r from-rich-black/60 via-transparent to-transparent" />

            {/* Staggered Content Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="z-10 flex flex-col items-start max-w-5xl space-y-2 sm:space-y-3 relative"
            >
                {/* Headline Container */}
                <motion.div variants={itemVariants} className="space-y-0 relative overflow-hidden pb-2 text-soft-white leading-none tracking-tighter">
                    <h1 className="font-poppins text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black">
                        Figuring Out
                    </h1>
                </motion.div>

                {/* Dynamic Accent */}
                <motion.div variants={itemVariants} className="h-[1.2em] sm:h-[1.3em] relative overflow-hidden mt-1 sm:mt-2 mb-1 sm:mb-2 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={dynamicWords[index]}
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            transition={{ duration: 0.6, ease: easeOutQuart }}
                            className="block font-playfair font-bold italic text-fo-yellow pb-2 leading-tight will-change-transform"
                        >
                            {dynamicWords[index]}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>

                {/* Subheadline */}
                <motion.p variants={itemVariants} className="font-inter text-base sm:text-lg md:text-xl text-cool-gray max-w-sm sm:max-w-xl leading-relaxed mb-2">
                    Conversations that shape the future.
                </motion.p>

                {/* CTA Button */}
                <motion.div variants={itemVariants} className="pt-2">
                    <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="group relative inline-flex items-center justify-center px-7 py-4 sm:px-10 sm:py-5 font-poppins font-bold text-sm sm:text-base text-rich-black bg-fo-yellow rounded-full overflow-hidden transition-all duration-300 hover:bg-bright-gold hover:scale-105 active:scale-95 shadow-xl shadow-fo-yellow/10 cursor-pointer"
                    >
                        <span className="relative z-10 transition-colors duration-300">Watch Now</span>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
