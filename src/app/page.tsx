import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Gallery />
            <Skills />
            <Contact />

            <footer className="py-8 text-center text-gray-500 text-sm bg-black border-t border-white/5">
                <p>© {new Date().getFullYear()} BIRD. All Systems Operational.</p>
                <div className="flex justify-center gap-4 mt-2 opacity-50">
                    <a href="#" className="hover:text-electric-blue">Privacy</a>
                    <a href="#" className="hover:text-electric-blue">Terms</a>
                    <a href="#" className="hover:text-electric-blue">Signal</a>
                </div>
            </footer>
        </div>
    );
}
