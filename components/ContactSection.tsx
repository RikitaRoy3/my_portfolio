"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section className="relative py-24 px-4 md:px-20 bg-background text-foreground border-y border-neutral-100 z-20">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-12"
                >
                    Get in Touch
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left md:text-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div>
                            <h3 className="text-sm uppercase tracking-widest opacity-50 mb-1">Phone</h3>
                            <p className="text-xl md:text-2xl font-light">90073-58520</p>
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-widest opacity-50 mb-1">Email</h3>
                            <a href="mailto:rikitaroy2005@gmail.com" className="text-xl md:text-2xl font-light hover:underline">rikitaroy2005@gmail.com</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div>
                            <h3 className="text-sm uppercase tracking-widest opacity-50 mb-1">LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/rikita-roy-147817299/" target="_blank" className="text-xl md:text-2xl font-light hover:underline">linkedin.com/in/rikita-roy</a>
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-widest opacity-50 mb-1">GitHub</h3>
                            <a href="https://github.com/RikitaRoy3" target="_blank" className="text-xl md:text-2xl font-light hover:underline">github.com/RikitaRoy3</a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
