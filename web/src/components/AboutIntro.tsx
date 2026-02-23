"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Particles } from "./ui/particles";

export default function AboutIntro() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse tracking for 3D parallax effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 300 };
    const rotateX = useSpring(useTransform(mouseY, [0.5, -0.5], [5, -5]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
    const subjectX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
    const subjectY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full min-h-screen bg-rich-black flex justify-center border-t border-white/10 overflow-hidden perspective-[1000px]"
        >

            {/* Fullscreen Image Background with Glow & Particles */}
            <div className="absolute inset-0 w-full h-full z-0 flex justify-center items-end pointer-events-none">
                {/* Interactive Particle Background */}
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-auto">
                    <Particles quantity={150} staticity={30} ease={50} color="#ffffff" className="w-full h-full" />
                </div>

                {/* Brand Yellow Premium Glow - Intensified */}
                <motion.div
                    style={{ x: subjectX, y: subjectY }}
                    className="absolute bottom-10 w-[80vw] md:w-[60vw] h-[70vh] bg-fo-yellow opacity-25 blur-[160px] md:blur-[200px] rounded-full pointer-events-none z-0"
                ></motion.div>

                <motion.div
                    style={{ rotateX, rotateY, x: subjectX, y: subjectY, transformStyle: "preserve-3d" }}
                    className="w-full h-full flex justify-center items-end relative z-10"
                >
                    <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        src="/foundernobg.png"
                        alt="Raj Shamani"
                        className="w-full h-full object-cover object-center select-none"
                    />
                </motion.div>

                {/* Subtle gradient overlay to ensure text readability */}
                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-rich-black/100 via-rich-black/50 to-transparent z-20 pointer-events-none"></div>
            </div>

            {/* Content Container */}
            <div className="w-full max-w-[1400px] mx-auto px-6 xl:px-0 relative z-20 min-h-screen flex flex-col justify-between pt-24 pb-16 md:py-24 pointer-events-none">

                {/* Absolute Top Left - "About Figuring Out" Title */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="absolute top-12 md:top-32 left-6 xl:left-0 text-left pointer-events-none z-30"
                >
                    <h2 className="font-poppins text-soft-white text-3xl md:text-4xl lg:text-5xl font-normal uppercase tracking-[0.2em] mb-2 drop-shadow-lg text-fo-yellow">
                        About
                    </h2>
                    <h3 className="font-playfair text-fo-yellow text-5xl md:text-6xl lg:text-7xl font-bold italic drop-shadow-xl -mt-2">
                        Figuring Out
                    </h3>
                </motion.div>

                {/* Absolute Bottom Right - Paragraph - Shisted further left for visibility */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="absolute bottom-12 md:bottom-24 right-12 md:right-24 xl:right-16 max-w-xs md:max-w-sm pointer-events-auto z-30 text-right"
                >
                    <p className="font-inter text-cool-gray/90 text-[10px] md:text-xs leading-relaxed md:leading-loose tracking-widest uppercase drop-shadow-md">
                        Figuring Out is an entrepreneur, content creator, and motivational speaker known for the popular podcast where inspiring conversations with successful entrepreneurs, business leaders, and industry experts are shared.
                        <br /><br />
                        Through this content, practical insights on entrepreneurship, business strategies, personal development, and career growth are provided, helping millions build their path to success.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
