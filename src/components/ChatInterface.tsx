import React from "react";

export default function ChatInterface() {
    return (
        <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="glass-card card-glow rounded-3xl p-8 md:p-12">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            💬 Skydiving / Para Jump — Help & Info Chat
                        </h2>
                    </div>

                    {/* Welcome Message */}
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 mb-8 border border-blue-400/30">
                        <p className="text-2xl font-semibold text-white mb-2">👋 Welcome Adventurer!</p>
                        <p className="text-zinc-200 text-lg">
                            Ready to jump into the sky? I'm here to help you plan your Skydiving / Para Jump Experience.
                        </p>
                        <p className="text-zinc-300 mt-2">Ask anything — I'll guide you step by step!</p>
                    </div>

                    {/* What I Can Help You With */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            ✨ What I Can Help You With
                        </h3>

                        <div className="space-y-6">
                            {/* Types of Jumps */}
                            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                                <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                    🪂 Types of Jumps
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-zinc-300">
                                    <li className="flex items-center gap-2">• Tandem Skydiving</li>
                                    <li className="flex items-center gap-2">• Solo Para Jump</li>
                                    <li className="flex items-center gap-2">• Wingsuit Flying</li>
                                    <li className="flex items-center gap-2">• Freefall Jump</li>
                                    <li className="flex items-center gap-2">• HALO Jump (High Altitude, Low Opening)</li>
                                    <li className="flex items-center gap-2">• Static Line Jump</li>
                                </ul>
                            </div>

                            {/* Find Jump Locations */}
                            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                                <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                    📍 Find Jump Locations
                                </h4>
                                <p className="text-zinc-300">
                                    Tell me your city and I'll show you the nearest certified skydiving centers.
                                </p>
                            </div>

                            {/* Book Your Adventure */}
                            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                                <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                    📅 Book Your Adventure
                                </h4>
                                <p className="text-zinc-300 mb-2">I can help you choose:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-zinc-300">
                                    <li className="flex items-center gap-2">• Best dates</li>
                                    <li className="flex items-center gap-2">• Weather-friendly time slots</li>
                                    <li className="flex items-center gap-2">• Pricing packages</li>
                                    <li className="flex items-center gap-2">• Beginner or advanced options</li>
                                </ul>
                            </div>

                            {/* Requirements & Safety */}
                            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                                <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                    📜 Requirements & Safety
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-zinc-300">
                                    <li className="flex items-center gap-2">• Age & weight limits</li>
                                    <li className="flex items-center gap-2">• Safety gear info</li>
                                    <li className="flex items-center gap-2">• Training steps</li>
                                    <li className="flex items-center gap-2">• Health guidelines</li>
                                </ul>
                            </div>

                            {/* Photo / Video Packages */}
                            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                                <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                    📸 Photo / Video Packages
                                </h4>
                                <p className="text-zinc-300 mb-2">Get details about:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-zinc-300">
                                    <li className="flex items-center gap-2">• Helmet cam</li>
                                    <li className="flex items-center gap-2">• Hand-cam video</li>
                                    <li className="flex items-center gap-2">• Professional skydiving photos</li>
                                </ul>
                            </div>

                            {/* Price Estimates */}
                            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                                <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                    💵 Price Estimates
                                </h4>
                                <p className="text-zinc-300">
                                    Ask me for cost comparisons across multiple adventure centers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Example Questions */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            👤 Example Questions You Can Ask
                        </h3>
                        <div className="space-y-2">
                            {[
                                "What is the price of tandem skydiving near me?",
                                "Is skydiving safe for beginners?",
                                "What should I wear for a para jump?",
                                "Show me wingsuit options.",
                                "How long is the training before a jump?"
                            ].map((question, idx) => (
                                <div key={idx} className="bg-white/5 rounded-lg p-3 border border-white/10 text-zinc-300 hover:bg-white/10 transition-colors cursor-pointer">
                                    • "{question}"
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                            🪂 Ready to Jump?
                        </h3>
                        <p className="text-zinc-300 mb-6">
                            Just type 'Start My Para Jump' and I'll guide you through everything — easy, fast, and safe.
                        </p>
                        <a href="#booking" className="btn-neon inline-block">
                            Start My Para Jump
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
