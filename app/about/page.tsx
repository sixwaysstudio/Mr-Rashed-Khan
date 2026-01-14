"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { User, Activity, MapPin } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen bg-[#0b0b1f] text-white flex flex-col font-sans selection:bg-neon-blue selection:text-black relative overflow-hidden">
            <Navbar />

            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-blue/20 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="flex-grow pt-32 pb-20 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-neon-blue mb-4 drop-shadow-sm"
                    >
                        About Me
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-gray-300 max-w-xl mx-auto text-sm md:text-base font-light"
                    >
                        A glimpse into the life, background, and personal details of Md. Rashed Khan.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Card 1: Personal Basic */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-pink-500/40 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                                <User size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-6">Personal Bio</h3>
                            <div className="space-y-4 w-full text-left">
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400 text-xs uppercase">Name</span>
                                    <span className="text-sm font-medium text-white/90">MD. Rashed-Khan</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400 text-xs uppercase">Father</span>
                                    <span className="text-sm font-medium text-white/90">Md. Khalilur Rahman</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400 text-xs uppercase">Mother</span>
                                    <span className="text-sm font-medium text-white/90">Rashida Khatun</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Biometrics & Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-neon-blue/40 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-neon-blue mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                                <Activity size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-6">Vital Stats</h3>
                            <div className="space-y-4 w-full text-left">
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400 text-xs uppercase">Birth Date</span>
                                    <span className="text-sm font-medium text-white/90">25 Feb 1994</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400 text-xs uppercase">Blood Group</span>
                                    <span className="text-sm font-medium text-white/90">AB (+)</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400 text-xs uppercase">Marital Status</span>
                                    <span className="text-sm font-medium text-white/90">Unmarried</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400 text-xs uppercase">Nationality</span>
                                    <span className="text-sm font-medium text-white/90">Bangladeshi</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Address */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-6">Address</h3>
                            <div className="text-gray-300 text-sm mb-8 flex-grow leading-relaxed">
                                <p className="mb-4">
                                    <strong className="text-white block mb-1">Permanent & Present:</strong>
                                    Vill-Bawkopalia, Post-Kathbowla,<br />
                                    P.S: Muktagachha, Dist-Mymensingh.
                                </p>
                            </div>
                            <div className="bg-white/10 border border-white/5 px-6 py-3 rounded-lg text-sm font-medium text-white w-full">
                                Mymensingh, BD
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
