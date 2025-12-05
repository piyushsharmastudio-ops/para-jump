import React from "react";
import Image from "next/image";
import Link from "next/link";
import ChatInterface from "./ChatInterface";
import Booking from "./Booking";
import Footer from "./Footer";

export default function WingsuitDetail() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/lars-mott-SKpTWM5xWUY-unsplash.jpg"
                        alt="Wingsuit Flying"
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
                        Wingsuit Flying
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-200 mb-8 fade-in">
                        Glide through the air with futuristic flight suits.
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

                {/* Flight Types */}
                <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-white text-center mb-12">
                            🪂 Flight Experiences
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass-card card-glow rounded-2xl p-6">
                                <div className="text-4xl mb-4">🎓</div>
                                <h3 className="text-xl font-bold text-white mb-3">First Flight Course</h3>
                                <p className="text-zinc-300 mb-4">Complete training program for wingsuit beginners with expert instructors</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• 200+ skydives required</li>
                                    <li>• Ground training: 6-8 hours</li>
                                    <li>• First wingsuit jump</li>
                                    <li>• Safety certification</li>
                                </ul>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 border-2 border-blue-400/50">
                                <div className="text-4xl mb-4">🦅</div>
                                <h3 className="text-xl font-bold text-white mb-3">Advanced Flight</h3>
                                <p className="text-zinc-300 mb-4">Extended glide time with performance wingsuits for experienced flyers</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• 3:1 glide ratio</li>
                                    <li>• 120+ mph speeds</li>
                                    <li>• Proximity flying options</li>
                                    <li>• Professional coaching</li>
                                </ul>
                                <span className="inline-block mt-4 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                    MOST POPULAR
                                </span>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6">
                                <div className="text-4xl mb-4">🏔️</div>
                                <h3 className="text-xl font-bold text-white mb-3">BASE Wingsuit</h3>
                                <p className="text-zinc-300 mb-4">Ultimate experience: cliff jumps and mountain proximity flights</p>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• Expert level only</li>
                                    <li>• Cliff/mountain launches</li>
                                    <li>• Terrain proximity flying</li>
                                    <li>• Custom flight paths</li>
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
                                        <span><strong>Experience:</strong> Minimum 200 skydives (USPA A-license)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Age:</strong> Minimum 18 years old</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Health:</strong> Excellent physical condition required</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span><strong>Training:</strong> 6-8 hour first flight course mandatory</span>
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
                                        <span><strong>Wingsuit:</strong> RAM-air inflated wing surfaces</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Parachute System:</strong> Main + reserve with AAD</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Altimeter:</strong> Audible and visual altitude tracking</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span><strong>Helmet & Goggles:</strong> Full-face protection included</span>
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
                                <p className="text-zinc-300 mb-4">POV footage of your wingsuit flight</p>
                                <p className="text-2xl font-bold text-blue-400">+$99</p>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 text-center border-2 border-blue-400/50">
                                <div className="text-4xl mb-4">🎥</div>
                                <h3 className="text-xl font-bold text-white mb-3">Chase Cam Video</h3>
                                <p className="text-zinc-300 mb-4">Professional flyer films your entire flight</p>
                                <p className="text-2xl font-bold text-blue-400">+$199</p>
                                <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                    MOST POPULAR
                                </span>
                            </div>

                            <div className="glass-card card-glow rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">📸</div>
                                <h3 className="text-xl font-bold text-white mb-3">Photo Package</h3>
                                <p className="text-zinc-300 mb-4">High-resolution aerial photos</p>
                                <p className="text-2xl font-bold text-blue-400">+$79</p>
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
                                <h3 className="text-2xl font-bold text-white mb-2">First Flight Course</h3>
                                <p className="text-zinc-300">Includes training, equipment rental, and first wingsuit jump</p>
                            </div>

                            <div className="text-center mb-8">
                                <div className="text-6xl font-bold text-white mb-2">$599</div>
                                <p className="text-zinc-400">per person</p>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>6-8 hour ground training</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Wingsuit rental included</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>First wingsuit jump from 13,000 ft</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>All safety equipment provided</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Expert instructor supervision</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <span className="text-green-400">✓</span>
                                    <span>Wingsuit certification</span>
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
