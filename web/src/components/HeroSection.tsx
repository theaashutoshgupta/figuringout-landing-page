"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

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
        }, 2000); // Cycle every 2 seconds
        return () => clearInterval(interval);
    }, []);
    return (
        <section
            className="relative flex flex-col items-start justify-center min-h-screen text-left px-4 md:px-12 lg:px-20 overflow-hidden bg-rich-black bg-cover bg-right bg-no-repeat"
            style={{ backgroundImage: "url('/founderwithgates.png')" }}
        >
            <div className="z-10 flex flex-col items-start max-w-5xl space-y-3 pt-12 relative">

                {/* Headline Container */}
                <div className="space-y-0">
                    <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-black text-soft-white leading-none tracking-tighter">
                        Figuring Out
                    </h1>

                    {/* Dynamic Accent */}
                    <div className="h-[1.3em] relative overflow-hidden mt-2 mb-2 text-4xl md:text-6xl lg:text-7xl">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={dynamicWords[index]}
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "-100%", opacity: 0 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="block font-playfair font-bold italic text-fo-yellow pb-2 leading-tight"
                            >
                                {dynamicWords[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Subheadline */}
                <p className="font-inter text-lg md:text-xl text-cool-gray max-w-xl leading-relaxed mb-2">
                    Conversations that shape the future.
                </p>

                {/* CTA Button */}
                <div className="pt-2">
                    <Link
                        href="/watch"
                        className="group relative inline-flex items-center justify-center px-10 py-5 font-poppins font-bold text-rich-black bg-fo-yellow rounded-full overflow-hidden transition-all duration-300 hover:bg-bright-gold hover:scale-105 active:scale-95 shadow-xl shadow-fo-yellow/10"
                    >
                        <span className="relative z-10 transition-colors duration-300">Watch Now</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
