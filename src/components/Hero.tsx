"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background media */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src="/Video Project 6.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white fade-in">
        <h1 className="section-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Experience the Ultimate Adrenaline Rush
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-zinc-200">
          Premium, cinematic adventures in the skies and beyond. Para Jump, Hot Air Balloon rides,
          and extreme sports crafted for thrill-seekers.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#booking" className="btn-neon">Book Your Jump</a>
          <a href="#adventures" className="btn-neon" style={{background:"linear-gradient(135deg,#ff3e3e,#00b7ff 60%,#ff9a1f)"}}>See Adventures</a>
        </div>
      </div>
    </section>
  );
}
