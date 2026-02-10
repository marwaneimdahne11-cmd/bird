'use client';
import { motion } from 'framer-motion';
import { Code2, Monitor, Database, Settings } from 'lucide-react';

const skills = [
    {
        category: "Architecture",
        icon: Code2,
        items: ["React & Next.js 14+", "TypeScript", "Node.js", "System Design"],
        color: "text-electric-blue"
    },
    {
        category: "Frontend",
        icon: Monitor,
        items: ["Tailwind CSS", "Framer Motion", "Three.js", "WebGL"],
        color: "text-electric-purple"
    },
    {
        category: "Backend",
        icon: Database,
        items: ["PostgreSQL", "Redis", "GraphQL", "Edge Computing"],
        color: "text-emerald-400"
    },
    {
        category: "DevOps",
        icon: Settings,
        items: ["Docker", "AWS / Vercel", "CI/CD", "Security"],
        color: "text-orange-400"
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative bg-deep-obsidian overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-electric-blue font-mono text-sm uppercase tracking-widest mb-4 block">
                        Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                        The Wingspan
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-electric-blue/30 transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${skill.color}`}>
                                <skill.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors">
                                {skill.category}
                            </h3>

                            <ul className="space-y-2">
                                {skill.items.map((item, i) => (
                                    <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-electric-blue transition-colors" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
