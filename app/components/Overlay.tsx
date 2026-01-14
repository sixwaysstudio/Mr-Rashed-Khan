"use client";

import { motion } from "framer-motion";

const sections = [
    {
        id: 1,
        title: "MD. RASHED-KHAN",
        subtitle: "Physics Teacher & Mentor",
        align: "center",
        top: "10%",
    },
    {
        id: 2,
        title: "ACADEMIC EXCELLENCE",
        subtitle: "M.Sc in Physics (1st Class)",
        content: "Graduated from National University with distinction.",
        align: "start",
        top: "35%",
    },
    {
        id: 3,
        title: "DEDICATED EDUCATOR",
        subtitle: "Inspiring the next generation",
        content: "Over 5 years of experience in simplify complex theories.",
        align: "end",
        top: "60%",
    },
    {
        id: 4,
        title: "GET IN TOUCH",
        subtitle: "01710856409",
        content: "Vill-Bawkopalia, Mymensingh",
        align: "center",
        top: "85%",
    },
];

export default function Overlay() {
    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
            {sections.map((section) => (
                <div
                    key={section.id}
                    className={`absolute w-full px-8 md:px-20 flex flex-col justify-center`}
                    style={{
                        top: section.top,
                        alignItems: section.align === 'center' ? 'center' : section.align === 'start' ? 'flex-start' : 'flex-end',
                        textAlign: section.align as any
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-10% 0px -10% 0px" }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl md:text-7xl font-bold text-white mb-2 tracking-tighter leading-tight">
                            {section.title}
                        </h2>
                        <h3 className="text-xl md:text-2xl text-accent-cyan font-light mb-4">
                            {section.subtitle}
                        </h3>
                        {section.content && (
                            <p className="text-slate-300 text-lg leading-relaxed">
                                {section.content}
                            </p>
                        )}
                    </motion.div>
                </div>
            ))}
        </div>
    );
}
