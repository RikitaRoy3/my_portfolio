"use client";

import { motion } from "framer-motion";

export default function Education() {
    return (
        <section className="relative py-24 px-4 md:px-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter text-black"
                >
                    Education
                </motion.h2>

                <div className="space-y-12">
                    {/* B.Tech */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-black mb-2">Bachelor of Technology</h3>
                            <p className="text-xl text-gray-700">Computer Science and Engineering (Data Science)</p>
                            <p className="text-gray-500 mb-4">Future Institute of Engineering and Management</p>
                            <div className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
                                Ranked 1st in Department
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-gray-600">
                                <thead className="border-b border-gray-100 bg-gray-50/50">
                                    <tr>
                                        <th className="py-3 px-4 font-semibold">Semester</th>
                                        <th className="py-3 px-4 font-semibold">SGPA</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {[
                                        { sem: "Semester 5", gpa: "9.00" },
                                        { sem: "Semester 4", gpa: "8.20" },
                                        { sem: "Semester 3", gpa: "8.76" },
                                        { sem: "Semester 2", gpa: "7.88" },
                                        { sem: "Semester 1", gpa: "8.40" },
                                    ].map((row) => (
                                        <tr key={row.sem} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-3 px-4">{row.sem}</td>
                                            <td className="py-3 px-4 font-mono font-medium text-black">{row.gpa}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Schools */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                        >
                            <h3 className="text-xl font-bold text-black mb-2">Class 12 (CBSE)</h3>
                            <p className="text-gray-700 mb-1">BDM International School</p>
                            <p className="text-sm text-gray-500 mb-4">Science with Computer Science</p>
                            <p className="text-3xl font-bold text-black">79%</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                        >
                            <h3 className="text-xl font-bold text-black mb-2">Class 10 (ICSE)</h3>
                            <p className="text-gray-700 mb-1">Lions Calcutta (Greater) Vidya Mandir</p>
                            <p className="text-sm text-gray-500 mb-4">Science with Computer Application</p>
                            <p className="text-3xl font-bold text-black">93.60%</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
