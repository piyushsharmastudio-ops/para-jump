import React from "react";
import Image from "next/image";
import Link from "next/link";
import ChatInterface from "./ChatInterface";
import Booking from "./Booking";
import Footer from "./Footer";

export default function BaseJumpDetail() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/istockphoto-594464198-2048x2048.jpg"
                        alt="Base Jumping"
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
                        Base Jumping
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-200 mb-8 fade-in">
                        Pure gravity from cliffs and structures.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-300 fade-in">
                        <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                            💀 Extreme
                        </span>
                        <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                            ⭐ Premium
                        </span>
                        <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                            ⚠️ Expert
                        </span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="flex-1">
                {/* Chat Interface */}
                <ChatInterface />

                {/* Experience Levels */}
                <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-white text-center mb-12">
                            🪂 Experience Levels
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass-card card-glow rounded-2xl p-6">
                                <div className="text-4xl mb-4">🎓</div>
                                <h3 className="text-xl font-bold text-white mb-3">First Jump Course</h3>
                                <p className="text-zinc-300 mb-4">Comprehensive training for experienced skydivers</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• 200+ skydives prerequisite</li>
                                    <li>• 4-day intensive course</li>
                                    <li>• Bridge launch training</li>
                                    <li>• Gear packing instruction</li>
                                </ul>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 border-2 border-blue-400/50">
                                <div className="text-4xl mb-4">🧗</div>
                                <h3 className="text-xl font-bold text-white mb-3">Guided Expedition</h3>
                                <p className="text-zinc-300 mb-4">Access legal exit points with expert guides</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• Legal cliff locations</li>
                                    <li>• Site assessment logistics</li>
                                    <li>• Guided approach & exit</li>
                                    <li>• Radio support</li>
                                </ul>
                                <span className="inline-block mt-4 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                    MOST POPULAR
                                </span>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6">
                                <div className="text-4xl mb-4">🦅</div>
                                <h3 className="text-xl font-bold text-white mb-3">Tandem BASE</h3>
                                <p className="text-zinc-300 mb-4">World's only tandem BASE jumping experience</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• No experience needed</li>
                                    <li>• Jump with master instructor</li>
                                    <li>• 1200ft bridge exit</li>
                                    <li>• Extremely limited availability</li>
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
                                    ✅ Prerequisites
                                </h3>
                                <ul className="space-y-3 text-zinc-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Experience:</strong> Minimum 200 skydives for solo course</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Canopy Control:</strong> Expert level accuracy required</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Tracking:</strong> Proven tracking skills for object separation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Mentality:</strong> Calm under extreme pressure</span>
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
                                        <span><strong>BASE Rig:</strong> Single parachute specific system</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Protection:</strong> Full armor body protection recommended</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Boots:</strong> Ankle support for rough landing areas</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Communication:</strong> Ground-to-air radio system</span>
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
                                <h3 className="text-xl font-bold text-white mb-3">Multi-Cam</h3>
                                <p className="text-zinc-300 mb-4">3-angle video edit of your jump</p>
                                <p className="text-2xl font-bold text-blue-400">+$149</p>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 text-center border-2 border-blue-400/50">
                                <div className="text-4xl mb-4">🎥</div>
                                <h3 className="text-xl font-bold text-white mb-3">Professional Media</h3>
                                <p className="text-zinc-300 mb-4">Film crew documentation of expedition</p>
                                <p className="text-2xl font-bold text-blue-400">+$499</p>
                                <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                    MOST POPULAR
                                </span>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">📸</div>
                                <h3 className="text-xl font-bold text-white mb-3">Drone Footage</h3>
                                <p className="text-zinc-300 mb-4">4K aerial follow of your jump</p>
                                <p className="text-2xl font-bold text-blue-400">+$199</p>
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
                                <h3 className="text-2xl font-bold text-white mb-2">First BASE Course</h3>
                                <p className="text-zinc-300">4-day intensive training for expert skydivers</p>
                            </div>

                            <div className="text-center mb-8">
                                <div className="text-6xl font-bold text-white mb-2">$1,499</div>
                                <p className="text-zinc-400">per person</p>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>4 days of instruction</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Gear rental included</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Minimum 10 jumps included</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Packing classes</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Personalized coaching debriefs</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Graduation certificate/number</span>
                                </div>
                            </div>

                            <div className="text-center">
                                <a href="#booking" className="btn-neon inline-block">
                                    Apply For Course
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
