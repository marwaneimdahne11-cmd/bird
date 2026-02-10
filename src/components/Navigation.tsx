'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bird, Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
    { name: 'The Takeoff', href: '#hero' },
    { name: 'The Gallery', href: '#gallery' },
    { name: 'The Wingspan', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 backdrop-blur-lg bg-deep-obsidian/80 border-b border-white/5' : 'py-6 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="flex items-center gap-2 group">
                        <Bird className="w-8 h-8 text-electric-blue transition-transform group-hover:rotate-12" />
                        <span className="font-bold text-xl tracking-tight">BIRD</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-300 hover:text-electric-blue transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all group-hover:w-full" />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-5 py-2 bg-electric-blue/10 border border-electric-blue/50 text-electric-blue rounded-full text-sm font-medium hover:bg-electric-blue hover:text-black transition-all flex items-center gap-2"
                        >
                            Let's Fly <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white hover:text-electric-blue"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-deep-obsidian/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-light text-white hover:text-electric-blue"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
