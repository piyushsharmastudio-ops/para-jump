"use client";
import React, { useState } from "react";

const faqs = [
  { q: "Is skydiving safe?", a: "Yes. We follow strict safety protocols, use premium gear, and certified instructors." },
  { q: "Do you offer photo/video packages?", a: "Yes. Multiple packages available including drone footage." },
  { q: "What should I wear?", a: "Comfortable athletic clothing and closed-toe shoes." },
  { q: "Are there weight or age limits?", a: "Yes. Requirements vary by activity. Contact support for details." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-white">FAQ & Safety Guidelines</h2>
        <p className="mt-4 text-zinc-300 max-w-2xl">Answers to common questions and preparation tips.</p>

        <div className="mt-10 space-y-4">
          {faqs.map((f, idx) => (
            <div key={idx} className="glass-card card-glow rounded-2xl p-5 text-white">
              <button className="w-full text-left flex items-center justify-between" onClick={() => setOpen(open === idx ? null : idx)}>
                <span className="font-semibold">{f.q}</span>
                <span className="text-zinc-400">{open === idx ? "−" : "+"}</span>
              </button>
              {open === idx && (
                <p className="mt-3 text-zinc-300 text-sm">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
