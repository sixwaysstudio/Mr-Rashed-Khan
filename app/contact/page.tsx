"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Share2, MapPin, Facebook, Phone } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#0b0b1f] text-white flex flex-col font-sans selection:bg-neon-blue selection:text-black relative overflow-hidden">
            <Navbar />

            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="flex-grow pt-32 pb-20 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-neon-blue mb-4 drop-shadow-sm"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-gray-300 max-w-xl mx-auto text-sm md:text-base font-light"
                    >
                        Have a question, feedback, or just want to say hi? We'd love to hear from you.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Card 1: Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-neon-blue/40 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-neon-blue mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Email Us</h3>
                            <p className="text-gray-300 text-sm mb-8 flex-grow/80">
                                For general inquiries, assignments, or partnership opportunities.
                            </p>
                            <a href="mailto:9392rk9292@gmail.com" className="bg-white/10 border border-white/5 px-6 py-3 rounded-lg text-sm font-medium hover:bg-neon-blue hover:text-black hover:border-neon-blue transition-all w-full break-all">
                                9392rk9292@gmail.com
                            </a>
                        </motion.div>

                        {/* Card 2: Social Media */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                                <Share2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Social Media</h3>
                            <p className="text-gray-300 text-sm mb-8 flex-grow/80">
                                Follow me for updates, educational content, and announcements.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://web.facebook.com/rashed.khn.98" target="_blank" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                    <Facebook size={18} />
                                </a>
                                <a href="https://wa.me/8801710856409" target="_blank" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                                    <Phone size={18} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Card 3: Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-pink-500/40 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Location</h3>
                            <p className="text-gray-300 text-sm mb-8 flex-grow/80">
                                Based in Mymensingh, providing academic care to students locally.
                            </p>
                            <div className="bg-white/10 border border-white/5 px-6 py-3 rounded-lg text-sm font-medium w-full text-white/90">
                                Mymensingh, Bangladesh
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
