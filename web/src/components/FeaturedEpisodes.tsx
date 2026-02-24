'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Particles } from '@/components/ui/particles';

const thumbnails = [
    '/thumbnails/beasthumb.jpg',
    '/thumbnails/gatesthumb.jpg',
    '/thumbnails/goyalthumb.jpg',
    '/thumbnails/jayshankarthumb.jpg',
    '/thumbnails/kunalthumb.jpg',
    '/thumbnails/revantthumb.jpg',
    '/thumbnails/vijaythumb.jpg',
];

export default function FeaturedEpisodes() {
    const items = [...thumbnails, ...thumbnails]; // 14 items
    const totalItems = items.length;

    // Responsive carousel dimensions
    const [carouselConfig, setCarouselConfig] = useState({
        radius: 1000,
        itemWidth: 400,
        itemHeight: 225,
        containerHeight: 400,
        translateZ: 850,
        particleCount: 150,
    });

    useEffect(() => {
        const updateConfig = () => {
            const w = window.innerWidth;
            if (w < 480) {
                setCarouselConfig({
                    radius: 400,
                    itemWidth: 200,
                    itemHeight: 112,
                    containerHeight: 220,
                    translateZ: 340,
                    particleCount: 50,
                });
            } else if (w < 768) {
                setCarouselConfig({
                    radius: 600,
                    itemWidth: 280,
                    itemHeight: 158,
                    containerHeight: 280,
                    translateZ: 520,
                    particleCount: 80,
                });
            } else if (w < 1024) {
                setCarouselConfig({
                    radius: 800,
                    itemWidth: 340,
                    itemHeight: 191,
                    containerHeight: 340,
                    translateZ: 700,
                    particleCount: 120,
                });
            } else {
                setCarouselConfig({
                    radius: 1000,
                    itemWidth: 400,
                    itemHeight: 225,
                    containerHeight: 400,
                    translateZ: 850,
                    particleCount: 150,
                });
            }
        };

        updateConfig();
        window.addEventListener('resize', updateConfig);
        return () => window.removeEventListener('resize', updateConfig);
    }, []);

    return (
        <section className="relative w-full py-16 sm:py-24 md:py-32 bg-rich-black overflow-hidden flex flex-col items-center">

            {/* Interactive Particle Background */}
            <Particles
                className="absolute inset-0 z-0 opacity-70"
                quantity={carouselConfig.particleCount}
                ease={80}
                color="#ffffff"
                refresh
            />

            {/* Header Container - Staggered Cinematic Reveal */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.2,
                        }
                    }
                }}
                className="w-full max-w-7xl px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 space-y-4 md:space-y-0 relative z-10"
            >
                <div className="flex flex-col">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.165, 0.84, 0.44, 1] } }
                        }}
                        className="overflow-hidden pb-1"
                    >
                        <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-soft-white leading-tight tracking-tight">
                            Featured
                        </h2>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.165, 0.84, 0.44, 1] } }
                        }}
                    >
                        <span className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic text-fo-yellow leading-none -mt-2 block">
                            Episodes
                        </span>
                    </motion.div>
                </div>
                <motion.p
                    variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.165, 0.84, 0.44, 1] } }
                    }}
                    className="font-inter text-cool-gray text-sm sm:text-base md:text-lg max-w-sm md:text-right"
                >
                    Our most popular podcasts with high profile guests
                </motion.p>
            </motion.div>

            {/* 3D Curved Carousel Container */}
            <div
                className="relative w-full py-8 sm:py-12 md:py-20 flex justify-center items-center overflow-hidden"
                style={{
                    perspective: '1200px',
                    height: `${carouselConfig.containerHeight}px`,
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
            >
                {/* Perspective Wrapper */}
                <div
                    className="relative flex justify-center items-center w-full h-full"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: `translateZ(${carouselConfig.translateZ}px)`
                    }}
                >
                    <motion.div
                        className="relative flex justify-center items-center w-full h-full will-change-transform"
                        style={{ transformStyle: 'preserve-3d' }}
                        animate={{ rotateY: [0, 360] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 60,
                            ease: "linear",
                        }}
                    >
                        {items.map((src, index) => {
                            const angle = index * (360 / totalItems);
                            return (
                                <div
                                    key={index}
                                    className="absolute shrink-0 group cursor-pointer"
                                    style={{
                                        width: `${carouselConfig.itemWidth}px`,
                                        height: `${carouselConfig.itemHeight}px`,
                                        transform: `rotateY(${angle}deg) translateZ(${-carouselConfig.radius}px)`,
                                        backfaceVisibility: 'hidden',
                                    }}
                                >
                                    <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl relative">
                                        <img
                                            src={src}
                                            alt={`Podcast Episode Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col items-center space-y-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <span className="font-inter text-xs sm:text-sm text-soft-white tracking-widest uppercase">
                    Scroll to know more
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fo-yellow">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                </motion.div>
            </div>

        </section>
    );
}
