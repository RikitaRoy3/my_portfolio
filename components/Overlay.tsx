"use client";

import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Define opacity and y-offset for each section based on scroll progress (0 to 1)
    // Sequence is 500vh, so scroll range is long.
    // 0-0.2: First section
    // 0.3-0.5: Second section
    // 0.6-0.8: Third section

    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.55], [50, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.85], [0, 1, 0]); // Fade out before end
    const y3 = useTransform(scrollYProgress, [0.55, 0.85], [50, 0]);

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
                        | Departmental Topper <span className="text-sm opacity-70">CSE (Data Science)</span>
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

            {/* Section 2: Left */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start px-8 md:px-32"
            >
                <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl text-black/90">
                    Crafting high-performance <br /> <span className="text-black/40">digital experiences</span>
                </h2>
            </motion.div>

            {/* Section 3: Right */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end px-8 md:px-32 text-right"
            >
                <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl text-black/90">
                    Where design meets <br /> <span className="text-black/40">engineering</span>
                </h2>
            </motion.div>

        </div>
    );
}
