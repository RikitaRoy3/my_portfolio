"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Web Development Internship",
        company: "MERN Stack + AI Integration", // Using this as the 'company' line for visual hierarchy
        duration: "Present",
        location: "Remote",
        description: "Integrated AI-based features with delivered, optimized end-to-end solution within a remote Agile team.",
    },
    {
        company: "ACM Students Chapter",
        role: "Working Committee",
        duration: "Nov 2024 - Present",
        location: "Kolkata, West Bengal, India",
        description: "Contributing to the technical student chapter activities and events."
    },
    {
        company: "Xplorica (Technical Club of FIEM)",
        role: "Internship",
        duration: "Aug 2024 - Apr 2025",
        location: "Kolkata, West Bengal, India",
        description: "Served as a Working Committee (WC)."
    }
];

export default function Experience() {
    return (
        <section className="relative py-24 px-4 md:px-20 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter text-black"
                >
                    Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative pl-8 border-l-2 border-gray-200 hover:border-black transition-colors duration-300"
                        >
                            <div className="mb-2">
                                <h3 className="text-2xl font-bold text-black">{exp.role}</h3>
                                <div className="text-lg font-medium text-gray-600 mb-1">
                                    {exp.company && <span>{exp.company}</span>}
                                </div>
                                <div className="text-sm text-gray-400 font-mono uppercase tracking-wide mb-4">
                                    {exp.duration} <span className="mx-2">•</span> {exp.location}
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
