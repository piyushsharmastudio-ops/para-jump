import React from "react";
import Image from "next/image";
import Link from "next/link";
import ChatInterface from "./ChatInterface";
import Booking from "./Booking";
import Footer from "./Footer";

export default function ZiplineDetail() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/andy-vult-zANlRVOmnv8-unsplash.jpg"
                        alt="Zip Lining"
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
                        Zip Lining
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-200 mb-8 fade-in">
                        High-speed canopy rides across stunning terrains.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-300 fade-in">
                        <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                            🌲 Scenic
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

                {/* Tour Options */}
                <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-white text-center mb-12">
                            🎢 Tour Options
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass-card card-glow rounded-2xl p-6">
                                <div className="text-4xl mb-4">🌲</div>
                                <h3 className="text-xl font-bold text-white mb-3">Canopy Tour</h3>
                                <p className="text-zinc-300 mb-4">Traverse through treetop platforms and sky bridges</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• 7 different lines</li>
                                    <li>• 2-hour guided tour</li>
                                    <li>• Forest ecology education</li>
                                    <li>• Moderate speed</li>
                                </ul>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 border-2 border-blue-400/50">
                                <div className="text-4xl mb-4">⚡</div>
                                <h3 className="text-xl font-bold text-white mb-3">Super Zip</h3>
                                <p className="text-zinc-300 mb-4">Extreme single line reaching speeds up to 60mph</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• 1 mile long line</li>
                                    <li>• Superman style harness</li>
                                    <li>• breathtaking views</li>
                                    <li>• High adrenaline</li>
                                </ul>
                                <span className="inline-block mt-4 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                    MOST POPULAR
                                </span>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6">
                                <div className="text-4xl mb-4">🌙</div>
                                <h3 className="text-xl font-bold text-white mb-3">Night Zip</h3>
                                <p className="text-zinc-300 mb-4">Experience the course under the stars</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• Headlamps provided</li>
                                    <li>• Unique atmosphere</li>
                                    <li>• Sunset options</li>
                                    <li>• Guided night tour</li>
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
                                        <span><strong>Age:</strong> Minimum 10 years old (with parent)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Weight:</strong> 30-125 kg (65-275 lbs)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Health:</strong> Good physical mobility</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Attire:</strong> Closed-toe shoes required</span>
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
                                        <span><strong>Harness:</strong> Full-body adjustable safety harness</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Braking:</strong> Automatic smooth braking system</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Helmet:</strong> Provided for all riders</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Connection:</strong> Double safety line system</span>
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
                                <h3 className="text-xl font-bold text-white mb-3">Helmet Cam</h3>
                                <p className="text-zinc-300 mb-4">Record your ride from your POV</p>
                                <p className="text-2xl font-bold text-blue-400">+$25</p>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 text-center border-2 border-blue-400/50">
                                <div className="text-4xl mb-4">🎥</div>
                                <h3 className="text-xl font-bold text-white mb-3">Complete Media Pack</h3>
                                <p className="text-zinc-300 mb-4">Helmet cam videos + guide photos</p>
                                <p className="text-2xl font-bold text-blue-400">+$55</p>
                                <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                    MOST POPULAR
                                </span>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">📸</div>
                                <h3 className="text-xl font-bold text-white mb-3">Photo Souvenir</h3>
                                <p className="text-zinc-300 mb-4">Digital download of action shots</p>
                                <p className="text-2xl font-bold text-blue-400">+$15</p>
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
                                <h3 className="text-2xl font-bold text-white mb-2">Canopy Zip Tour</h3>
                                <p className="text-zinc-300">2-hour guided adventure across 7 lines</p>
                            </div>

                            <div className="text-center mb-8">
                                <div className="text-6xl font-bold text-white mb-2">$99</div>
                                <p className="text-zinc-400">per person</p>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>2-hour guided tour</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>7 different ziplines</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Suspension bridges included</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Safety gear and helmet</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Professional guides</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Completion certificate</span>
                                </div>
                            </div>

                            <div className="text-center">
                                <a href="#booking" className="btn-neon inline-block">
                                    Book Your Adventure Now
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
