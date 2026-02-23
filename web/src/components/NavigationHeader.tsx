"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Expand whenever we scroll past the top
            const shouldExpand = scrollY > 20;

            if (shouldExpand !== isExpanded) {
                setIsExpanded(shouldExpand);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isExpanded]);

    return (
        <header className="fixed top-8 left-0 right-0 z-50 flex px-6 md:px-12 pointer-events-none">
            <motion.div
                layout
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 30,
                    mass: 0.8
                }}
                className={clsx(
                    "pointer-events-auto relative flex items-center justify-between px-8 py-4 border rounded-full",
                    isExpanded
                        ? "mx-auto w-full max-w-6xl bg-[#111]/80 backdrop-blur-[40px] border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]"
                        : "mr-auto ml-0 w-auto min-w-max bg-[#111]/30 backdrop-blur-[20px] border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] gap-x-6"
                )}
            >
                {/* Brand & Main Nav Combined on Left */}
                <div className="flex items-center space-x-6 shrink-0 z-10">
                    <Link href="/" className="flex items-center space-x-3 group min-w-max">
                        <img src="/logo.ico" alt="Logo" className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-poppins text-lg font-bold text-soft-white tracking-tight whitespace-nowrap drop-shadow-md">
                            Figuring Out
                        </span>
                    </Link>

                    {/* Vertical Divider */}
                    <div className="w-px h-6 bg-white/20 shrink-0"></div>

                    {/* Navigation Links */}
                    <nav className="flex items-center space-x-6 xl:space-x-8 shrink-0">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className={clsx(
                                    "text-sm font-medium transition-colors duration-300 relative group whitespace-nowrap",
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
            </motion.div>
        </header>
    );
}
