"use client";

import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Define opacity and y-offset for each section based on scroll progress (0 to 1)
    // Sequence is 500vh, so scroll range is long.
    // 0-0.2: First section
    // 0.3-0.5: Second section
    // 0.6-0.8: Third section

    // Sequence is 1000vh, so scroll range is very long.
    // 0-0.2: First section (Hero)
    // 0.3-0.5: Second section (Thoughtful solutions)
    // 0.6-0.8: Third section (Turning ideas)

    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

    // Section 2: Building thoughtful solutions... (Right aligned)
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);

    // Section 3: Turning ideas... (Center aligned, Finale)
    const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.65, 0.95], [50, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center text-foreground px-4 md:px-20">

            {/* Section 1: Center - Hero */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-start pl-8 md:pl-32 text-left"
            >
                <div className="p-4 max-w-2xl group cursor-default">
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 text-neutral-200 drop-shadow-lg transition-all duration-500 group-hover:text-white group-hover:drop-shadow-2xl">Rikita Roy</h1>
                    <div className="h-px w-[600px] max-w-full bg-white/30 mr-auto mb-6 transition-all duration-500 group-hover:w-[620px] group-hover:bg-white/50" />
                    <p className="text-xl md:text-2xl font-medium tracking-wide text-neutral-300 drop-shadow-md transition-colors duration-300 group-hover:text-neutral-100">
                        | <a href="https://drive.google.com/drive/u/4/folders/1ZH3mtIcXwl1WRyFoU_mdKmcZU1DjWfAs" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors decoration-white/50 underline-offset-4">Departmental Topper</a> <span className="text-sm opacity-70">CSE (Data Science)</span>
                        <span className="mx-2 opacity-50">|</span>
                        Problem Solver (DSA)
                        <span className="mx-2 opacity-50">|</span>
                        MERN Stack
                        <span className="mx-2 opacity-50">|</span>
                        Java
                        <span className="mx-2 opacity-50">|</span>
                        C
                        <span className="mx-2 opacity-50">|</span>
                    </p>

                </div>
            </motion.div>

            {/* Section 2: Left - Thoughtful solutions */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start px-8 md:px-32 text-left"
            >
                <h2 className="text-2xl md:text-3xl font-bold leading-tight max-w-3xl text-black/90">
                    Building thoughtful solutions <br /> <span className="text-black/40">through code and design</span>
                </h2>
            </motion.div>

            {/* Section 3: Center - Turning ideas */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-center text-center px-4"
            >
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-neutral-600">
                    Turning ideas into <br /> <span className="text-black">efficient digital solutions.</span>
                </h2>
            </motion.div>

        </div>
    );
}
