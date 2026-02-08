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
    const budgieImages = [
        "tJzEw-8Y_Hk", "xP7v0rK7E4w", "7vJgQ_k9lQ8", "SgD40x4X_Uo", "_y8Y5A3s-oE", "l0I_l9mZk_E"
    ];
    const imgId = budgieImages[i % budgieImages.length];
    return {
        id: 10 + i,
        name: `Perruche Ondulée Type ${i + 1}`,
        scientific: "Melopsittacus undulatus",
        price: Math.floor(Math.random() * (45 - 20) + 20),
        category: "Perruche Ondulée",
        image: `https://images.unsplash.com/photo-${imgId}?auto=format&fit=crop&q=80&w=600`,
        description: "Une magnifique perruche ondulée sélectionnée pour sa vitalité et ses couleurs."
    };
});

// Generate dynamic finches
const finches = Array.from({ length: 50 }, (_, i) => {
    const finchImages = [
        "nDV6ahWLvEg"
    ];
    const imgId = finchImages[i % finchImages.length];
    return {
        id: 60 + i,
        name: `Diamant Mandarin Type ${i + 1}`,
        scientific: "Taeniopygia guttata",
        price: Math.floor(Math.random() * (25 - 12) + 12),
        category: "Diamant Mandarin",
        image: `https://images.unsplash.com/photo-${imgId}?auto=format&fit=crop&q=80&w=600`,
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
