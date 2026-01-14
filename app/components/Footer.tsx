"use client";

import { Facebook, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#02020a] border-t border-white/5 pt-16 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tighter uppercase">
                            Rashed<span className="text-neon-blue">.</span>Khan
                        </h2>
                        <p className="text-gray-400 max-w-sm leading-relaxed font-light">
                            Simplifying the complex laws of nature for the next generation of thinkers and innovators.
                        </p>
                    </div>

                    {/* Explore Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Explore</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/academics" className="hover:text-neon-blue transition-colors py-1 block">Academics</Link></li>
                            <li><Link href="/about" className="hover:text-neon-blue transition-colors py-1 block">About</Link></li>
                            <li><Link href="/contact" className="hover:text-neon-blue transition-colors py-1 block">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Connect Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Connect</h3>
                        <div className="flex gap-6 md:gap-4">
                            <a
                                href="https://web.facebook.com/rashed.khn.98"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-blue hover:border-neon-blue transition-all duration-300"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://wa.me/8801710856409"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-500 hover:border-green-500 transition-all duration-300"
                            >
                                <Phone size={20} />
                            </a>
                            <a
                                href="mailto:9392rk9292@gmail.com"
                                className="w-12 h-12 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest text-center md:text-left">
                    <span>&copy; {new Date().getFullYear()} Md. Rashed Khan. All rights reserved.</span>
                    <span>Vill-Bawkopalia, Mymensingh</span>
                </div>
            </div>
        </footer>
    );
}
