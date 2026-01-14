"use client";

import ScrollSequence from "./components/ScrollSequence";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  return (
    <main className="bg-black min-h-screen flex flex-col font-sans selection:bg-neon-blue selection:text-black">
      <Navbar />

      {/* Loading Screen */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#0b0b1f] transition-transform duration-1000 ease-in-out ${isLoaded ? '-translate-y-full pointer-events-none' : 'translate-y-0'}`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
          PHYSICS <span className="text-neon-blue">LAB</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-mono">{Math.round(loadProgress)}%</p>
      </div>

      {/* Hero / Scroll Sequence Section */}
      <div ref={containerRef} className="relative h-[600vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollSequence
            frameCount={240}
            progress={scrollYProgress}
            onProgress={setLoadProgress}
            onLoaded={() => setIsLoaded(true)}
            blurAmount={0.7} // CHANGE THIS NUMBER to adjust blur intensity (e.g. 0 for no blur, 10 for heavy blur)
          />
        </div>

        {/* Text Overlays - Positioned relative to total scroll height */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">

          {/* Scene 1: Intro (0-15%) - Left Align */}
          <Section opacity={useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0])} className="items-start pl-8 md:pl-20">
            <div className="text-left font-bold">
              <p className="text-neon-blue text-xs md:text-sm uppercase tracking-[0.2em] mb-4" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>Physics Educator</p>
              <h1 className="text-6xl md:text-9xl tracking-tighter text-white leading-none" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,1)" }}>
                RASHED<br />KHAN
              </h1>
            </div>
          </Section>

          {/* Scene 2: Feature 1 (25-45%) - Left Align */}
          <Section className="items-start pl-8 md:pl-20" opacity={useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0])}>
            <div className="text-left font-bold">
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.2em] mb-4" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>Academic Excellence</p>
              <h2 className="text-5xl md:text-8xl text-white mb-2 leading-none tracking-tight" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,1)" }}>
                M.Sc <br /><span className="text-gray-300">PHYSICS</span>
              </h2>
              <p className="text-neon-blue text-lg font-mono mt-4" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>1st Class Distinction</p>
            </div>
          </Section>

          {/* Scene 3: Feature 2 (60-80%) - Left Align */}
          <Section className="items-start pl-8 md:pl-20" opacity={useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0])}>
            <div className="text-left font-bold">
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.2em] mb-4" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>Mentorship</p>
              <h2 className="text-5xl md:text-8xl text-neon-blue mb-2 leading-none tracking-tight" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,1)" }}>
                5+ YEARS
              </h2>
              <p className="text-white text-2xl md:text-4xl" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>Teaching Experience</p>
            </div>
          </Section>

          {/* Scene 4: Outro (90-100%) - Left Align */}
          <Section opacity={useTransform(scrollYProgress, [0.85, 0.95], [0, 1])} className="items-start pl-8 md:pl-20">
            <div className="text-left font-bold">
              <h2 className="text-4xl md:text-6xl text-white mb-8 tracking-tighter" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,1)" }}>
                UNLOCK THE <br /><span className="text-neon-blue">UNIVERSE</span>
              </h2>
            </div>
          </Section>

        </div>
      </div>

      {/* Services Section - Minimal */}
      <section className="bg-[#0b0b1f] py-32 px-6 border-t border-white/5 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 text-center md:text-left">
            <h3 className="text-4xl font-bold text-white uppercase tracking-tighter md:text-left">Academic<br />Programs</h3>
            <p className="text-gray-400 max-w-sm mt-4 md:mt-0 text-center md:text-right">Comprehensive physics education tailored for high school and university admission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
            <ServiceItem number="01" title="H.S.C Physics" desc="Complete syllabus coverage with practical examples." />
            <ServiceItem number="02" title="Admission Prep" desc="Intensive coaching for Engineering & Varsity exams." />
            <ServiceItem number="03" title="Mentorship" desc="Personalized guidance for academic careers." />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Subcomponents

interface SectionProps {
  children: React.ReactNode;
  opacity: MotionValue<number>;
  className?: string;
}

function Section({ children, opacity, className = "" }: SectionProps) {
  return (
    <motion.div style={{ opacity }} className={`sticky top-0 h-screen w-full flex flex-col justify-center ${className}`}>
      {children}
    </motion.div>
  );
}

function ServiceItem({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="group py-12 px-6 border-b border-white/10 md:border-r last:border-r-0 hover:bg-white/5 transition-colors cursor-default">
      <div className="text-neon-blue font-mono mb-4 text-xs tracking-widest opacity-50">/{number}</div>
      <h4 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
