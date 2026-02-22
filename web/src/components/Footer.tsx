import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-[#111111] text-white pt-20 pb-10">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                {/* Top Section - 5 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    {/* Column 1 - Brand Info */}
                    <div className="lg:col-span-1 flex flex-col items-start gap-2">
                        <div className="flex items-center gap-3">
                            <img src="/logo.ico" alt="Figuring Out Logo" className="w-10 h-10 object-contain invert brightness-0" />
                            <h2 className="text-2xl font-poppins font-bold tracking-widest uppercase">Figuring Out</h2>
                        </div>
                    </div>

                    {/* Column 2 - Links */}
                    <div className="flex flex-col gap-3">
                        <Link href="/podcast" className="text-xs font-inter tracking-widest text-gray-300 hover:text-white uppercase transition-colors">PODCAST</Link>
                        <Link href="/search" className="text-xs font-inter tracking-widest text-gray-300 hover:text-white uppercase transition-colors">SEARCH</Link>
                        <Link href="/contact" className="text-xs font-inter tracking-widest text-gray-300 hover:text-white uppercase transition-colors">GUEST SUGGESTION</Link>
                    </div>

                    {/* Column 3 - Links */}
                    <div className="flex flex-col gap-3">
                        <Link href="/about" className="text-xs font-inter tracking-widest text-gray-300 hover:text-white uppercase transition-colors">ABOUT</Link>
                        <Link href="/about#team" className="text-xs font-inter tracking-widest text-gray-300 hover:text-white uppercase transition-colors">TEAM</Link>
                        <Link href="/careers" className="text-xs font-inter tracking-widest text-gray-300 hover:text-white uppercase transition-colors">CAREERS</Link>
                    </div>

                    {/* Column 4 - Links */}
                    <div className="flex flex-col gap-3">
                        <Link href="/sponsors" className="text-xs font-inter tracking-widest text-gray-300 hover:text-white uppercase transition-colors">SPONSORS</Link>
                        <Link href="/faq" className="text-xs font-inter tracking-widest text-gray-300 hover:text-white uppercase transition-colors">FAQ</Link>
                        <Link href="/contact" className="text-xs font-inter tracking-widest text-gray-300 hover:text-white uppercase transition-colors">CONTACT US</Link>
                    </div>

                    {/* Column 5 - Links */}
                    <div className="flex flex-col gap-3">
                        <Link href="/legal/privacy" className="text-xs font-inter tracking-widest text-gray-300 hover:text-white uppercase transition-colors">PRIVACY POLICY</Link>
                        <Link href="/legal/terms" className="text-xs font-inter tracking-widest text-gray-300 hover:text-white uppercase transition-colors">TERMS OF SERVICE</Link>
                        <Link href="/legal/cookies" className="text-xs font-inter tracking-widest text-gray-300 hover:text-white uppercase transition-colors">COOKIE POLICY</Link>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-white/20 mb-12"></div>

                {/* Bottom Section - Social Icons & Copyright */}
                <div className="flex flex-col items-center justify-center gap-6">
                    {/* Social Icons inside circles */}
                    <div className="flex items-center gap-4">
                        <a href="https://www.youtube.com/@rajshamani" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><polygon points="10 15 15 12 10 9 10 15" /></svg>
                        </a>
                        <a href="https://x.com/rajshamani" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/figuringout.co" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </a>
                        <a href="https://in.linkedin.com/company/figuringoutmedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                        <a href="https://open.spotify.com/show/736rhmW7vilNgkFFo8aDz4" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                        </a>
                    </div>

                    <p className="text-gray-400 text-xs font-inter tracking-wide">
                        &copy; Copyright. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
