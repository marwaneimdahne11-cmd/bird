'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Eye, Layers } from 'lucide-react';

const projects = [
    {
        title: "Project Falcon",
        category: "Design System",
        description: "A centralized flight control layout system built for scale.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        image: "/images/bird2.jpg",
        link: "#",
        github: "#"
    },
    {
        title: "Echo Flight",
        category: "Real-time Dashboard",
        description: "High-latency data visualization for aerial logistics.",
        tech: ["WebSockets", "D3.js", "React"],
        image: "/images/bird3.jpg",
        link: "#",
        github: "#"
    },
    {
        title: "Nimbus API",
        category: "Backend Architecture",
        description: "Cloud-native services deployed on the edge for max velocity.",
        tech: ["Node.js", "GraphQL", "Redis"],
        image: "/images/bird5.jpg",
        link: "#",
        github: "#"
    },
    {
        title: "Aero Identity",
        category: "Brand Platform",
        description: "Complete visual overhaul for a leading aviation startup.",
        tech: ["Three.js", "WebGL", "GSAP"],
        image: "/images/bird6.jpg",
        link: "#",
        github: "#"
    }
];

export default function Gallery() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });

    return (
        <section id="gallery" ref={ref} className="py-24 relative overflow-hidden bg-deep-obsidian">
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center max-w-3xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-2 mb-4 text-electric-blue">
                        <Layers className="w-5 h-5" />
                        <span className="uppercase tracking-widest text-sm font-medium">The Gallery</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Selected Work
                    </h2>
                    <p className="text-gray-400 font-light text-lg">
                        A curation of high-impact digital experiences designed with precision.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative h-[400px] overflow-hidden rounded-2xl glass-panel border border-white/5 hover:border-electric-blue/30 transition-all duration-500"
                        >
                            {/* Image Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-300">
                                <span className="text-electric-blue text-xs font-mono uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 delay-100">
                                    {project.category}
                                </span>

                                <h3 className="text-3xl font-bold bg-clip-text text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-electric-blue transition-all">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                                    {project.description}
                                </p>

                                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 delay-200">
                                    <a href={project.link} className="flex items-center gap-2 text-sm font-medium hover:text-electric-blue transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                    <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors text-gray-400">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                </div>

                                {/* Tags */}
                                <div className="absolute top-6 right-6 flex gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] bg-black/50 backdrop-blur border border-white/10 px-2 py-1 rounded text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
