'use client';

import { motion } from 'framer-motion';
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
    const radius = 1000;
    const itemWidth = 400; // 16:9 Youtube ratio horizontal format
    const itemHeight = 225;

    return (
        <section className="relative w-full py-32 bg-rich-black overflow-hidden flex flex-col items-center">

            {/* Interactive Particle Background */}
            <Particles
                className="absolute inset-0 z-0 opacity-70"
                quantity={150}
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
                className="w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0 relative z-10"
            >
                <div className="flex flex-col">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.165, 0.84, 0.44, 1] } }
                        }}
                        className="overflow-hidden pb-1"
                    >
                        <h2 className="font-poppins text-5xl md:text-6xl font-black text-soft-white leading-tight tracking-tight">
                            Featured
                        </h2>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.165, 0.84, 0.44, 1] } }
                        }}
                    >
                        <span className="font-playfair text-5xl md:text-6xl font-bold italic text-fo-yellow leading-none -mt-2 block">
                            Episodes
                        </span>
                    </motion.div>
                </div>
                <motion.p
                    variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.165, 0.84, 0.44, 1] } }
                    }}
                    className="font-inter text-cool-gray text-lg max-w-sm md:text-right"
                >
                    Our most popular podcasts with high profile guests
                </motion.p>
            </motion.div>

            {/* 3D Curved Carousel Container */}
            <div
                className="relative w-full py-20 flex justify-center items-center overflow-hidden"
                style={{
                    perspective: '1200px',
                    height: '400px', // Creates vertical space for the 3D perspective distortion (taller on sides)
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}
            >
                {/* Perspective Wrapper pulling the entire cylinder towards the camera to heavily magnify the edges */}
                <div
                    className="relative flex justify-center items-center w-full h-full"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: 'translateZ(850px)'
                    }}
                >
                    <motion.div
                        className="relative flex justify-center items-center w-full h-full"
                        style={{ transformStyle: 'preserve-3d' }}
                        // Rotates the entire 14-item cylinder infinitely
                        animate={{ rotateY: [0, 360] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 60, // Elegant, unhurried pace
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
                                        width: `${itemWidth}px`,
                                        height: `${itemHeight}px`,
                                        // Places items around the rim of the cylinder
                                        // translateZ(-radius) ensures we are looking at the BACK concave wall facing us
                                        transform: `rotateY(${angle}deg) translateZ(${-radius}px)`,
                                        // Hides all items that rotate toward the invisible front-half of the cylinder
                                        backfaceVisibility: 'hidden',
                                    }}
                                >
                                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
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
            <div className="mt-16 flex flex-col items-center space-y-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <span className="font-inter text-sm text-soft-white tracking-widest uppercase">
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
