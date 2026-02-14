"use client";

import { motion } from "framer-motion";

const achievements = [
    "Secured top ranks (1st or 2nd positions) in multiple state-level and inter-college painting and creative competitions amongst 60,000+ participants.",
    "Awarded Best Artist recognition for consistent excellence in fine arts and creative representation.",
    "Recognized for academic merit and leadership in technical and cultural college events."
];

export default function Achievements() {
    return (
        <section className="relative py-24 px-4 md:px-20 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter text-black"
                >
                    Achievements
                </motion.h2>

                <div className="grid gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="mt-1 min-w-[24px] h-6 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">
                                {index + 1}
                            </div>
                            <p className="text-lg text-gray-800 leading-relaxed font-medium">{item}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:text-left">
                    <a
                        href="https://drive.google.com/drive/u/4/folders/1b7kxAGaItQOWWZgVFZx1QUoJXDn61iwJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                    >
                        View All Achievements <span className="ml-2">↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
