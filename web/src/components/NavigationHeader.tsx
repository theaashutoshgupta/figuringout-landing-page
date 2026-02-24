"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Podcast", href: "/podcast" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export default function NavigationHeader() {
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const shouldExpand = scrollY > 20;
            if (shouldExpand !== isExpanded) {
                setIsExpanded(shouldExpand);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isExpanded]);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    return (
        <header className="fixed top-4 sm:top-8 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 md:px-12 pointer-events-none w-full">
            <div className="w-full max-w-6xl flex justify-start">
                <motion.div
                    layout
                    transition={{
                        layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className={clsx(
                        "pointer-events-auto relative flex items-center justify-between px-6 sm:px-8 h-14 sm:h-16 border rounded-[40px] sm:rounded-full transition-colors duration-500 will-change-transform",
                        isExpanded
                            ? "w-full bg-[#111]/80 backdrop-blur-[40px] border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]"
                            : "w-full lg:w-fit bg-[#111]/30 backdrop-blur-[20px] border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] gap-x-4 sm:gap-x-6 mr-auto"
                    )}
                >
                    {/* Brand & Main Nav Combined on Left */}
                    <div className="flex items-center h-full space-x-4 sm:space-x-6 shrink-0 z-10 lg:justify-start">
                        <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center space-x-2 sm:space-x-3 group min-w-max">
                            <img src="/logo.ico" alt="Logo" className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-poppins text-base sm:text-lg font-bold text-soft-white tracking-tight whitespace-nowrap drop-shadow-md">
                                Figuring Out
                            </span>
                        </a>

                        {/* Vertical Divider - Desktop only */}
                        <div className="w-px h-6 bg-white/20 shrink-0 hidden md:block"></div>

                        {/* Navigation Links - Desktop only */}
                        <nav className="hidden md:flex items-center h-full space-x-6 xl:space-x-8 shrink-0">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className={clsx(
                                        "text-sm font-medium transition-colors duration-300 relative group whitespace-nowrap flex items-center",
                                        pathname === item.href
                                            ? "text-fo-yellow"
                                            : "text-soft-white/80 hover:text-white"
                                    )}
                                >
                                    {item.name}
                                    <span className={clsx(
                                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-fo-yellow transition-all duration-300 group-hover:w-full",
                                        pathname === item.href ? "w-full" : "w-0"
                                    )} />
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden flex flex-col items-center justify-center w-8 h-8 gap-[5px] cursor-pointer relative z-50 ml-auto"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={{
                                rotate: mobileMenuOpen ? 45 : 0,
                                y: mobileMenuOpen ? 7 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="block w-5 h-[2px] bg-soft-white origin-center"
                        />
                        <motion.span
                            animate={{
                                opacity: mobileMenuOpen ? 0 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                            className="block w-5 h-[2px] bg-soft-white"
                        />
                        <motion.span
                            animate={{
                                rotate: mobileMenuOpen ? -45 : 0,
                                y: mobileMenuOpen ? -7 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="block w-5 h-[2px] bg-soft-white origin-center"
                        />
                    </button>
                </motion.div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-rich-black/95 backdrop-blur-xl pointer-events-auto lg:hidden flex flex-col items-center justify-center"
                    >
                        {/* Mobile Menu Back Button */}
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-soft-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <nav className="flex flex-col items-center space-y-8">
                            {navLinks.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setMobileMenuOpen(false);
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                    className={clsx(
                                        "text-2xl font-poppins font-semibold tracking-wide transition-colors duration-300",
                                        pathname === item.href
                                            ? "text-fo-yellow"
                                            : "text-soft-white/80"
                                    )}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
