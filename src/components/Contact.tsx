'use client';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative bg-deep-obsidian">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-electric-purple/10 blur-[200px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <span className="text-electric-blue text-sm uppercase tracking-widest font-mono">
                            Secure Channel
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                            Ready for <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-white">
                                Liftoff?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 font-light max-w-md">
                            Your project deserves the altitude. Let's engineer the future of your digital identity.
                        </p>

                        <div className="space-y-6 pt-8">
                            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-electric-blue">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                                    <p className="font-medium">contact@bird.dev</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-electric-purple">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Base</p>
                                    <p className="font-medium">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/20 blur-[60px] rounded-full pointer-events-none" />

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-electric-blue transition-colors resize-none"
                                placeholder="Tell me about your vision..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-electric-blue text-black font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 group"
                        >
                            Send Transmission
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
