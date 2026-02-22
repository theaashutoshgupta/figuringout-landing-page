"use client";

import { motion } from "framer-motion";
import { Particles } from "./ui/particles";

export default function AboutIntro() {
    return (
        <section className="relative w-full min-h-screen bg-rich-black flex justify-center border-t border-white/10 overflow-hidden">

            {/* Fullscreen Image Background with Glow & Particles */}
            <div className="absolute inset-0 w-full h-full z-0 flex justify-center items-end">
                {/* Interactive Particle Background (from Carousel context) */}
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-auto">
                    <Particles quantity={150} staticity={30} ease={50} color="#ffffff" className="w-full h-full" />
                </div>

                {/* Brand Yellow Premium Glow */}
                <div className="absolute bottom-0 w-[80vw] md:w-[50vw] h-[60vh] bg-fo-yellow opacity-15 blur-[120px] md:blur-[160px] rounded-full pointer-events-none z-0"></div>

                <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    src="/foundernobg.png"
                    alt="Raj Shamani"
                    className="w-full h-full object-cover object-center select-none relative z-10 pointer-events-none"
                />
                {/* Subtle gradient overlay to ensure text readability */}
                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-rich-black/100 via-rich-black/50 to-transparent z-20 pointer-events-none"></div>
            </div>

            {/* Content Container */}
            <div className="w-full max-w-[1400px] mx-auto px-6 xl:px-0 relative z-20 min-h-screen flex flex-col justify-between pt-24 pb-16 md:py-24 pointer-events-none">

                {/* Absolute Top Left - Paragraph (Moved from right, scaled down) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute top-12 md:top-32 left-6 xl:left-0 max-w-xs md:max-w-sm pointer-events-auto z-30"
                >
                    <p className="font-inter text-cool-gray/90 text-[10px] md:text-xs leading-relaxed md:leading-loose tracking-widest uppercase drop-shadow-md">
                        Figuring Out is an entrepreneur, content creator, and motivational speaker known for the popular podcast where inspiring conversations with successful entrepreneurs, business leaders, and industry experts are shared.
                        <br /><br />
                        Through this content, practical insights on entrepreneurship, business strategies, personal development, and career growth are provided, helping millions build their path to success.
                    </p>
                </motion.div>

                {/* Absolute Bottom Right - "About Figuring Out" Title */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="absolute bottom-12 md:bottom-24 right-6 xl:right-0 text-right pointer-events-none z-30"
                >
                    <h2 className="font-poppins text-soft-white text-3xl md:text-4xl lg:text-5xl font-normal uppercase tracking-[0.2em] mb-2 drop-shadow-lg">
                        About
                    </h2>
                    <h3 className="font-playfair text-fo-yellow text-5xl md:text-6xl lg:text-7xl font-bold italic drop-shadow-xl">
                        Figuring Out
                    </h3>
                </motion.div>

            </div>
        </section>
    );
}
