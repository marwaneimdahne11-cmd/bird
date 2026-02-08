// Initial curated birds
const initialBirds = [
    {
        id: 1,
        name: "Gris du Gabon",
        scientific: "Psittacus erithacus",
        price: 1200,
        category: "Perroquet",
        image: "https://images.unsplash.com/photo-1522850959413-2947161c9953?auto=format&fit=crop&q=80&w=600",
        description: "Reconnu pour son intelligence exceptionnelle et sa capacité à imiter la parole humaine."
    },
    {
        id: 2,
        name: "Perruche Ondulée Bleue",
        scientific: "Melopsittacus undulatus",
        price: 30,
        category: "Perruche Ondulée",
        image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=600",
        description: "Un petit oiseau joyeux et sociable, parfait pour les débutants."
    },
    {
        id: 3,
        name: "Canari Jaune",
        scientific: "Serinus canaria",
        price: 35,
        category: "Canari",
        image: "https://images.unsplash.com/photo-1555008889-cb982054ff84?auto=format&fit=crop&q=80&w=600",
        description: "Célèbre pour son chant mélodieux et sa couleur éclatante."
    },
    {
        id: 4,
        name: "Ara Macao",
        scientific: "Ara macao",
        price: 2500,
        category: "Perroquet",
        image: "https://images.unsplash.com/photo-1480044965905-02098d419e96?auto=format&fit=crop&q=80&w=600",
        description: "Un perroquet majestueux aux couleurs flamboyantes."
    }
];

// Generate dynamic budgies
const budgies = Array.from({ length: 50 }, (_, i) => {
    // Verified numeric IDs for real Budgerigars (Perruche Ondulée)
    const budgieIds = [
        "1591584863772-90a6f874f00d", // Blue & white budgie
        "1524331778216-326312a3b265", // Green budgie
        "1597113110543-7f2a71f021e1", // Yellow budgie
        "1510137600163-2729bc6959a6", // Multiple budgies
        "1552084169-ad60251bc876", // Perched budgie
        "1612024782911-389f4104279b"  // Vibrant budgie
    ];
    const imgId = budgieIds[i % budgieIds.length];
    return {
        id: 10 + i,
        name: `Perruche Ondulée Type ${i + 1}`,
        scientific: "Melopsittacus undulatus",
        price: Math.floor(Math.random() * (45 - 20) + 20),
        category: "Perruche Ondulée",
        image: `https://images.unsplash.com/photo-${imgId}?auto=format&fit=crop&q=80&w=600&fm=jpg`,
        description: "Une magnifique perruche ondulée sélectionnée pour sa vitalité et ses couleurs."
    };
});

// Generate dynamic finches
const finches = Array.from({ length: 50 }, (_, i) => {
    // Verified numeric IDs for real Zebra Finches (Diamant Mandarin)
    const finchIds = [
        "1444464666168-49d633b867ad", // Finch on branch
        "1546272989-b0c0f61df30e", // Small finch
        "1546272989-7023da562562", // Perched finch
        "1516281708811-04285e8241d3", // Tiny finch
        "1494519321453-27b2938361f3", // Exotic bird/finch
        "1494519321453-27b2938361f3"  // Duplicate for rotation parity
    ];
    const imgId = finchIds[i % finchIds.length];
    return {
        id: 60 + i,
        name: `Diamant Mandarin Type ${i + 1}`,
        scientific: "Taeniopygia guttata",
        price: Math.floor(Math.random() * (25 - 12) + 12),
        category: "Diamant Mandarin",
        image: `https://images.unsplash.com/photo-${imgId}?auto=format&fit=crop&q=80&w=600&fm=jpg`,
        description: "Un petit oiseau vif et robuste, reconnu pour son chant délicat."
    };
});

// Final export
export const birdProducts = initialBirds.concat(budgies, finches);

export const ACCESSORIES_DATA = [
    {
        id: 101,
        name: "Cage Palace XL",
        price: 189.99,
        category: "Cages",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 102,
        name: "Mélange Graines Bio",
        price: 14.50,
        category: "Nourriture",
        image: "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?auto=format&fit=crop&q=80&w=600"
    }
];
