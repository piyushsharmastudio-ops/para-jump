import React from "react";

const jumpTypes = [
    {
        id: "tandem",
        icon: "🪂",
        name: "Tandem Skydiving",
        description: "Perfect for first-timers. Jump attached to an experienced instructor who handles all the technical aspects."
    },
    {
        id: "solo",
        icon: "🎯",
        name: "Solo Para Jump",
        description: "Experience the thrill of jumping alone after completing required training and certification."
    },
    {
        id: "wingsuit",
        icon: "🦅",
        name: "Wingsuit Flying",
        description: "Glide through the air like a bird with a specialized wingsuit. Requires advanced skydiving experience."
    },
    {
        id: "freefall",
        icon: "⚡",
        name: "Freefall Jump",
        description: "Pure adrenaline rush with extended freefall time before deploying your parachute."
    },
    {
        id: "halo",
        icon: "🚀",
        name: "HALO Jump",
        description: "High Altitude, Low Opening - Jump from extreme altitudes and freefall for extended periods."
    },
    {
        id: "static",
        icon: "📐",
        name: "Static Line Jump",
        description: "Your parachute deploys automatically as you exit the aircraft. Great for beginner solo jumpers."
    }
];

export default function JumpTypes() {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="section-title text-3xl md:text-4xl font-bold text-white text-center mb-4">
                    🪂 Types of Jumps
                </h2>
                <p className="text-center text-zinc-300 mb-12 max-w-2xl mx-auto">
                    Choose your adventure level — from beginner-friendly tandem jumps to extreme high-altitude experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jumpTypes.map((jump) => (
                        <div
                            key={jump.id}
                            className="glass-card card-glow rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="text-5xl mb-4">{jump.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{jump.name}</h3>
                            <p className="text-zinc-300 text-sm leading-relaxed">{jump.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
