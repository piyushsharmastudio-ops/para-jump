import React from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/adventures";

export default function AdventureGrid() {
  return (
    <section id="adventures" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-white">Adventure Categories</h2>
        <p className="mt-4 text-zinc-300 max-w-2xl">
          Choose from sky-high thrills, speed, and gravity-defying experiences.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div key={c.id} className="glass-card card-glow rounded-2xl p-5 text-white">
              <div className="relative h-40 w-full overflow-hidden rounded-xl">
                <Image src={c.image} alt={c.name} fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{c.name}</h3>
              <p className="mt-2 text-zinc-300 text-sm">{c.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <Link href={`/adventures/${c.id}`} className="btn-neon">Explore</Link>
                <span className="text-xs text-zinc-400">Extreme • Premium • Safe</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
