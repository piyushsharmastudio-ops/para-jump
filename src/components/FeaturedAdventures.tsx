import React from "react";
import Image from "next/image";
import { featured } from "@/data/adventures";

export default function FeaturedAdventures() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-white">Featured Adventures</h2>
        <p className="mt-4 text-zinc-300 max-w-2xl">Our most iconic experiences, crafted for unforgettable moments.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((f) => (
            <div key={f.id} className="glass-card card-glow rounded-2xl p-5 text-white">
              <div className="relative h-56 w-full overflow-hidden rounded-xl">
                <Image src={f.image} alt={f.title} fill className="object-cover" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-zinc-300 text-sm">{f.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-zinc-400">Starting at</p>
                  <p className="text-2xl font-bold">${f.price}</p>
                  <a href="#booking" className="btn-neon mt-3 inline-block">Book</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
