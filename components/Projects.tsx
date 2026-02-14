"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Java Snake Game",
        description: "A classic Snake Game implementation in Java.",
        tech: ["Java", "OOP", "Swing"],
        link: null, // No deployment URL
        repo: "https://github.com/RikitaRoy3/JAVA_Snake_Game",
    },
    {
        title: "Chatly",
        description: "A real-time chat application using the MERN stack.",
        tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
        link: "https://chatlychatapp.vercel.app/",
        repo: "https://github.com/RikitaRoy3/Chatly",
    },
    {
        title: "Medinova",
        description: "A comprehensive health care platform for booking appointments and management.",
        tech: ["React", "API Integration", "Tailwind"],
        link: "https://mmedinova.vercel.app", // Deployment URL
        repo: "https://github.com/RikitaRoy3/HealthCare-Website",
    },
];

export default function Projects() {
    return (
        <section className="relative min-h-screen py-24 px-4 md:px-20 z-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter text-black"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col justify-between h-[300px] p-8 rounded-2xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 flex gap-4 mt-auto pt-4 border-t border-gray-100">
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-gray-800 hover:text-black border-b border-transparent hover:border-black transition-all"
                                >
                                    GitHub
                                </a>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-blue-600 hover:text-blue-800 border-b border-transparent hover:border-blue-800 transition-all"
                                    >
                                        Visit Site
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <a href="/resume.pdf" target="_blank" className="inline-block px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                        View Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
