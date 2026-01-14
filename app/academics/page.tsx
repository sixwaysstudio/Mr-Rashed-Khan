"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GraduationCap, BookOpen, Scroll } from "lucide-react";

export default function Academics() {
    return (
        <main className="min-h-screen bg-[#0b0b1f] text-white flex flex-col font-sans selection:bg-neon-blue selection:text-black relative overflow-hidden">
            <Navbar />

            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[130px] mix-blend-screen" />
                <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[130px] mix-blend-screen" />
            </div>

            <div className="flex-grow pt-32 pb-20 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-neon-blue mb-4 drop-shadow-sm"
                    >
                        Academic Journey
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-gray-300 max-w-xl mx-auto text-sm md:text-base font-light"
                    >
                        A timeline of educational milestones and achievements in the field of Science and Physics.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Card 1: Honours */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-teal-500/40 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">M.Sc in Physics</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                National University, 2017
                            </p>
                            <p className="text-gray-400 text-xs mb-8 flex-grow leading-relaxed">
                                Achieved First Class with distinction. Specialized in advanced particle physics and quantum mechanics.
                            </p>
                            <div className="bg-white/10 border border-white/5 px-6 py-3 rounded-lg text-sm font-medium text-teal-400 w-full">
                                CGPA 2.61
                            </div>
                        </motion.div>

                        {/* Card 2: HSC */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">H.S.C (Science)</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Dhaka Board, 2012
                            </p>
                            <p className="text-gray-400 text-xs mb-8 flex-grow leading-relaxed">
                                Higher Secondary Certificate with focus on Physics, Chemistry, and Mathematics.
                            </p>
                            <div className="bg-white/10 border border-white/5 px-6 py-3 rounded-lg text-sm font-medium text-blue-400 w-full">
                                GPA 3.80
                            </div>
                        </motion.div>

                        {/* Card 3: SSC */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                                <Scroll size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">S.S.C (Science)</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Dhaka Board, 2009
                            </p>
                            <p className="text-gray-400 text-xs mb-8 flex-grow leading-relaxed">
                                Secondary School Certificate. Established a strong foundation in general sciences.
                            </p>
                            <div className="bg-white/10 border border-white/5 px-6 py-3 rounded-lg text-sm font-medium text-purple-400 w-full">
                                GPA 4.19
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
