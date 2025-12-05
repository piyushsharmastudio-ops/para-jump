import React from "react";
import Image from "next/image";
import Link from "next/link";
import ChatInterface from "./ChatInterface";
import Booking from "./Booking";
import Footer from "./Footer";

export default function BalloonDetail() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/balloon.jpg"
                        alt="Hot Air Balloon Adventure"
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
                        Hot Air Balloon Adventure
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-200 mb-8 fade-in">
                        Serene sunrise flights with panoramic landscapes.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-300 fade-in">
                        <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                            🌅 Peaceful
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

                {/* Flight Types */}
                <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-white text-center mb-12">
                            🎈 Flight Experiences
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass-card card-glow rounded-2xl p-6">
                                <div className="text-4xl mb-4">🌄</div>
                                <h3 className="text-xl font-bold text-white mb-3">Sunrise Flight</h3>
                                <p className="text-zinc-300 mb-4">Classic dawn experience with champagne landing</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• 60-90 minute flight</li>
                                    <li>• Golden hour views</li>
                                    <li>• Champagne toast</li>
                                    <li>• Light breakfast included</li>
                                </ul>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 border-2 border-blue-400/50">
                                <div className="text-4xl mb-4">💑</div>
                                <h3 className="text-xl font-bold text-white mb-3">Private Romance Flight</h3>
                                <p className="text-zinc-300 mb-4">Exclusive basket for couples with premium service</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• Private 2-person basket</li>
                                    <li>• 90-120 minute flight</li>
                                    <li>• Champagne & chocolates</li>
                                    <li>• Perfect for proposals</li>
                                </ul>
                                <span className="inline-block mt-4 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                    MOST POPULAR
                                </span>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6">
                                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                                <h3 className="text-xl font-bold text-white mb-3">Group Adventure</h3>
                                <p className="text-zinc-300 mb-4">Shared basket experience for families and friends</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• Up to 12 passengers</li>
                                    <li>• 60 minute flight</li>
                                    <li>• Family-friendly</li>
                                    <li>• Group discounts available</li>
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
                                        <span><strong>Age:</strong> All ages welcome (children under 12 with adult)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Height:</strong> Minimum 4 feet tall to see over basket</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Health:</strong> Able to stand for 60-90 minutes</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Briefing:</strong> 15-minute safety and flight overview</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    🛡️ Safety Features
                                </h3>
                                <ul className="space-y-3 text-zinc-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Balloon:</strong> FAA-certified envelope and basket</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Pilot:</strong> Licensed commercial balloon pilot</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Weather:</strong> Flights only in optimal conditions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Chase Crew:</strong> Ground support follows entire flight</span>
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
                                <h3 className="text-xl font-bold text-white mb-3">Basket Cam</h3>
                                <p className="text-zinc-300 mb-4">Mounted camera captures your journey</p>
                                <p className="text-2xl font-bold text-blue-400">+$39</p>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 text-center border-2 border-blue-400/50">
                                <div className="text-4xl mb-4">🎥</div>
                                <h3 className="text-xl font-bold text-white mb-3">Professional Video</h3>
                                <p className="text-zinc-300 mb-4">Edited highlight reel of your flight</p>
                                <p className="text-2xl font-bold text-blue-400">+$79</p>
                                <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                    MOST POPULAR
                                </span>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">📸</div>
                                <h3 className="text-xl font-bold text-white mb-3">Photo Package</h3>
                                <p className="text-zinc-300 mb-4">Professional sunrise photos</p>
                                <p className="text-2xl font-bold text-blue-400">+$29</p>
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
                                <h3 className="text-2xl font-bold text-white mb-2">Sunrise Balloon Flight</h3>
                                <p className="text-zinc-300">Includes champagne toast, breakfast, and flight certificate</p>
                            </div>

                            <div className="text-center mb-8">
                                <div className="text-6xl font-bold text-white mb-2">$149</div>
                                <p className="text-zinc-400">per person</p>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>60-90 minute flight time</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Sunrise launch experience</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Licensed commercial pilot</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Champagne landing celebration</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Light breakfast provided</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Flight certificate</span>
                                </div>
                            </div>

                            <div className="text-center">
                                <a href="#booking" className="btn-neon inline-block">
                                    Book Your Flight Now
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
