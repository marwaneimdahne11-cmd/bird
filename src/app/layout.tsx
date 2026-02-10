import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers'; // Need framer-motion provider if necessary, or just direct
import Navigation from '@/components/Navigation';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Bird | Elevation & Precision',
    description: 'The personal brand ecosystem of a Senior Software Architect. Speed, elevation, and precision.',
    metadataBase: new URL('https://bird.dev'), // Example TLD as requested
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${outfit.variable} ${jetbrains.variable}`}>
            <body className="antialiased selection:bg-electric-blue selection:text-black bg-deep-obsidian">
                <Navigation />
                <main className="min-h-screen flex flex-col relative overflow-hidden">
                    {children}
                </main>
            </body>
        </html>
    );
}
