"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Rocket, TrendingUp } from 'lucide-react';
import { InteractiveTravelCard } from './ui/3d-card';

export default function BookSection() {
    return (
        <section className="relative w-full min-h-screen bg-rich-black flex items-center justify-center overflow-hidden py-32 border-t border-white/10">

            {/* Contrasting Frosted Right Panel Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-1/4 lg:w-1/3 bg-white/5 backdrop-blur-2xl border-l border-white/10 rounded-l-[50px] md:rounded-l-[100px] z-0 overflow-hidden hidden md:block">
                {/* Vertical Text - Solid and Outlined (-rotate-90 for 180 flip from before, flex-col for stacking) */}
                <div className="absolute inset-y-0 right-10 lg:right-20 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center whitespace-nowrap -rotate-90 origin-center text-soft-white/10 font-poppins font-black uppercase tracking-wider pointer-events-none">
                        <span className="text-[100px] lg:text-[140px] leading-none mb-2">
                            BUILD
                        </span>
                        <span className="text-[100px] lg:text-[140px] text-transparent leading-none" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
                            DON'T TALK
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 xl:px-0 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                {/* Left Content */}
                <div className="flex flex-col gap-5 max-w-xl">
                    <div className="flex flex-col gap-1">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-soft-white font-poppins text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold opacity-80"
                        >
                            IF YOU WASTE ALL YOUR TIME THINKING...
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-black text-soft-white leading-[1.05] uppercase tracking-tight drop-shadow-xl"
                        >
                            WHEN WILL YOU <span className="text-fo-yellow">LIVE?</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-4 border-l-2 border-fo-yellow/50 pl-5"
                    >
                        <h3 className="text-fo-yellow font-inter font-bold tracking-widest text-xs md:text-sm uppercase mb-3 drop-shadow-md">
                            THINGS YOU WISH YOU WERE TAUGHT IN SCHOOL.
                        </h3>
                        <p className="font-inter text-cool-gray leading-relaxed text-xs md:text-sm pr-4 md:pr-12">
                            You don't get a certificate of participation in real life. Your school taught you how to run in the race, but not how to win. Stop seeking external validation, admit your shortcomings, and start creating. This is your practical blueprint for entrepreneurship and survival.
                        </p>
                    </motion.div>

                    {/* Pricing & CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-6 flex flex-col sm:flex-row items-center gap-4"
                    >
                        {/* Tag & Price Badge */}
                        <div className="flex items-center bg-rich-black/50 backdrop-blur-md rounded-full border border-white/10 p-1.5 pr-5 shadow-xl">
                            <span className="text-rich-black text-[10px] sm:text-xs font-bold font-inter tracking-widest uppercase py-1.5 px-3 shadow-sm rounded-full bg-fo-yellow leading-none">
                                NATIONAL BESTSELLER
                            </span>
                            <span className="text-soft-white font-poppins font-black text-xl lg:text-2xl ml-4 drop-shadow-md leading-none">
                                ₹299
                            </span>
                        </div>

                        {/* Button */}
                        <button className="bg-soft-white text-rich-black font-poppins font-bold py-3 px-8 text-xs md:text-sm rounded-full uppercase tracking-widest hover:bg-fo-yellow hover:scale-105 transition-all active:scale-95 shadow-lg whitespace-nowrap">
                            START BUILDING
                        </button>
                    </motion.div>
                </div>

                {/* Right Content / Center 3D Graphic */}
                <div className="relative flex justify-center items-center h-[400px] lg:h-[500px] w-full">
                    {/* Floating Icons (Thematic replacements for coffee beans) */}
                    <motion.div
                        animate={{ y: [-15, 15, -15], rotate: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="absolute top-8 left-12 md:left-4 lg:left-16 z-20 text-fo-yellow backdrop-blur-md bg-rich-black/60 p-3 lg:p-4 rounded-xl border border-white/10 shadow-2xl"
                    >
                        <Mic size={24} strokeWidth={1.5} />
                    </motion.div>

                    <motion.div
                        animate={{ y: [15, -15, 15], rotate: [10, -10, 10] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute bottom-8 left-24 md:left-16 lg:left-28 z-20 text-soft-white backdrop-blur-md bg-rich-black/60 p-3 rounded-full border border-white/10 shadow-2xl"
                    >
                        <Rocket size={20} strokeWidth={1.5} />
                    </motion.div>

                    <motion.div
                        animate={{ y: [-20, 20, -20], rotate: [-5, 5, -5] }}
                        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                        className="absolute top-1/2 -right-2 md:right-8 lg:right-0 z-20 text-fo-yellow backdrop-blur-md bg-rich-black/60 p-3 lg:p-4 rounded-lg border border-white/10 shadow-2xl"
                    >
                        <TrendingUp size={24} strokeWidth={1.5} />
                    </motion.div>

                    {/* 3D Interactive Card (Main Book Asset) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="z-10 relative"
                    >
                        <InteractiveTravelCard
                            title="Build, Don't Talk"
                            subtitle="by Raj Shamani"
                            imageUrl="/bookcover.jpg"
                            actionText="BUY NOW"
                            href="https://rajshamani.com/book"
                            onActionClick={() => window.open('https://rajshamani.com/book', '_blank')}
                            className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] border-fo-yellow/30"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
