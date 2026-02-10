import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "deep-obsidian": "#0A0D14",
                "electric-blue": "#00F0FF",
                "electric-purple": "#7D00FF",
                "glass-surface": "rgba(255, 255, 255, 0.05)",
                "glass-border": "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
                mono: ["var(--font-jetbrains)", "monospace"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "conic-gradient": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "glitch": "glitch 1s linear infinite",
                "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: ".5" },
                }
            },
        },
    },
    plugins: [],
};
export default config;
