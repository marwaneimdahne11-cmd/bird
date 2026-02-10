'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Rocket, Compass, Zap } from 'lucide-react';

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const transformY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-deep-obsidian">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-blue/10 via-deep-obsidian to-black opacity-30 animate-pulse-glow" />
                <div className="absolute inset-0 bg-[url('/images/bird1.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-obsidian/50 to-deep-obsidian" />
            </div>

            {/* Floating Elements (Antigravity Physics) */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-blue/5 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
                className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-electric-purple/10 rounded-full blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-electric-blue tracking-widest uppercase mb-6 backdrop-blur-sm">
                        Elevation • Precision • Velocity
                    </span>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
                            ASCEND
                        </span>
                        <br />
                        <span className="text-stroke-1 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple opacity-80 filter drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                            BEYOND
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
                        Architecting high-performance digital ecosystems with <span className="text-electric-blue">antigravity design</span> mechanics.
                        Experience the fusion of speed and aesthetics.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#gallery"
                            className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2 group"
                        >
                            Explore Works <Rocket className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-8 py-4 border border-white/20 rounded-lg text-white font-medium hover:border-electric-blue/50 transition-all flex items-center gap-2 backdrop-blur-sm"
                        >
                            Initiate Project <Zap className="w-4 h-4 text-electric-blue" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll to Fly</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
            </motion.div>
        </section>
    );
}
