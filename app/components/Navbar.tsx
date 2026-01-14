"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-6 text-white"
            >
                <div className="flex justify-between items-center mix-blend-difference">
                    <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white uppercase hover:text-neon-blue transition-colors z-50 relative">
                        Rashed<span className="text-neon-blue">.</span>Khan
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                        <Link href="/academics" className="hover:text-neon-blue transition-colors">ACADEMICS</Link>
                        <Link href="/about" className="hover:text-neon-blue transition-colors">ABOUT</Link>
                        <Link href="/contact" className="hover:text-neon-blue transition-colors">CONTACT</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="hidden md:block px-4 py-2 border border-white/40 rounded-full text-xs font-bold hover:bg-neon-blue hover:border-neon-blue hover:text-black transition-all duration-300 cursor-pointer">
                            BOOK A CLASS
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-white z-50 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-black/90 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        <Link href="/academics" className="text-3xl font-bold text-white hover:text-neon-blue tracking-tight" onClick={() => setIsOpen(false)}>ACADEMICS</Link>
                        <Link href="/about" className="text-3xl font-bold text-white hover:text-neon-blue tracking-tight" onClick={() => setIsOpen(false)}>ABOUT</Link>
                        <Link href="/contact" className="text-3xl font-bold text-white hover:text-neon-blue tracking-tight" onClick={() => setIsOpen(false)}>CONTACT</Link>

                        <div className="pt-8">
                            <Link href="/contact" className="px-8 py-4 border border-white/20 rounded-full text-lg font-bold text-white hover:bg-neon-blue hover:border-neon-blue hover:text-black transition-all" onClick={() => setIsOpen(false)}>
                                BOOK A CLASS
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
