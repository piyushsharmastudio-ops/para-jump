import React from "react";
import Image from "next/image";
import Link from "next/link";
import ChatInterface from "./ChatInterface";
import Booking from "./Booking";
import Footer from "./Footer";

export default function BungeeDetail() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/laurynas-me-Z2h10lcXXfU-unsplash.jpg"
                        alt="Bungee Jumping"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                            <span className="text-2xl">←</span>
                            <span className="text-sm uppercase tracking-wider">Back to Adventures</span>
                        </Link>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in">
                        Bungee Jumping
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-200 mb-8 fade-in">
                        Leap from platforms with elastic thrill.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-300 fade-in">
                        <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                            ⚡ Extreme
                        </span>
                        <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                            ⭐ Premium
                        </span>
                        <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                            🛡️ Safe
                        </span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="flex-1">
                {/* Chat Interface */}
                <ChatInterface />

                {/* Jump Types */}
                <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-white text-center mb-12">
                            🪢 Jump Experiences
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass-card card-glow rounded-2xl p-6">
                                <div className="text-4xl mb-4">🌉</div>
                                <h3 className="text-xl font-bold text-white mb-3">Bridge Jump</h3>
                                <p className="text-zinc-300 mb-4">Classic bungee from 150-foot bridge platform</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• 150 ft (45m) height</li>
                                    <li>• River gorge views</li>
                                    <li>• 3-4 second freefall</li>
                                    <li>• Perfect for first-timers</li>
                                </ul>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 border-2 border-blue-400/50">
                                <div className="text-4xl mb-4">🏗️</div>
                                <h3 className="text-xl font-bold text-white mb-3">Platform Jump</h3>
                                <p className="text-zinc-300 mb-4">Extreme 300-foot tower jump experience</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• 300 ft (90m) height</li>
                                    <li>• 6-7 second freefall</li>
                                    <li>• Multiple bounce rebounds</li>
                                    <li>• Ultimate adrenaline rush</li>
                                </ul>
                                <span className="inline-block mt-4 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                    MOST POPULAR
                                </span>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6">
                                <div className="text-4xl mb-4">💦</div>
                                <h3 className="text-xl font-bold text-white mb-3">Water Touch</h3>
                                <p className="text-zinc-300 mb-4">Special jump where you touch the water surface</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• 200 ft (60m) height</li>
                                    <li>• Touch water surface</li>
                                    <li>• Unique sensation</li>
                                    <li>• Weather dependent</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Requirements & Safety */}
                <section className="py-16 bg-gradient-to-b from-black/20 to-transparent">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-white text-center mb-12">
                            📜 Requirements & Safety
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass-card card-glow rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    ✅ Basic Requirements
                                </h3>
                                <ul className="space-y-3 text-zinc-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Age:</strong> Minimum 18 years old (16-17 with parental consent)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Weight:</strong> 45-120 kg (100-265 lbs)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Health:</strong> No heart conditions, pregnancy, or recent injuries</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Briefing:</strong> 20-minute safety instruction mandatory</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    🛡️ Safety Equipment
                                </h3>
                                <ul className="space-y-3 text-zinc-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Bungee Cord:</strong> Military-grade elastic with backup</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Harness:</strong> Full-body or ankle attachment system</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Carabiners:</strong> Triple-lock safety connections</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Inspection:</strong> Equipment checked before every jump</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Photo/Video Packages */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-white text-center mb-12">
                            📸 Photo / Video Packages
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass-card card-glow rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">📷</div>
                                <h3 className="text-xl font-bold text-white mb-3">Platform Cam</h3>
                                <p className="text-zinc-300 mb-4">Fixed camera captures your leap</p>
                                <p className="text-2xl font-bold text-blue-400">+$29</p>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 text-center border-2 border-blue-400/50">
                                <div className="text-4xl mb-4">🎥</div>
                                <h3 className="text-xl font-bold text-white mb-3">Full Jump Video</h3>
                                <p className="text-zinc-300 mb-4">Multiple angles of your entire jump</p>
                                <p className="text-2xl font-bold text-blue-400">+$69</p>
                                <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                    MOST POPULAR
                                </span>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">📸</div>
                                <h3 className="text-xl font-bold text-white mb-3">Photo Package</h3>
                                <p className="text-zinc-300 mb-4">Action shots of your jump</p>
                                <p className="text-2xl font-bold text-blue-400">+$19</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-white text-center mb-12">
                            💵 Pricing
                        </h2>

                        <div className="glass-card card-glow rounded-2xl p-8">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Platform Bungee Jump</h3>
                                <p className="text-zinc-300">Includes safety briefing, equipment, and jump certificate</p>
                            </div>

                            <div className="text-center mb-8">
                                <div className="text-6xl font-bold text-white mb-2">$89</div>
                                <p className="text-zinc-400">per person</p>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>20-minute safety briefing</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>150-300 ft jump options</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Professional jump master</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>All safety equipment included</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Multiple rebounds included</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Jump certificate</span>
                                </div>
                            </div>

                            <div className="text-center">
                                <a href="#booking" className="btn-neon inline-block">
                                    Book Your Jump Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Booking Section */}
                <Booking />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
