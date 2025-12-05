import React from "react";

const reviews = [
  { name: "Ava M.", text: "Absolutely electrifying! Felt safe and thrilled from start to finish.", rating: 5 },
  { name: "Leo K.", text: "The hot air balloon sunrise was magical. Team was superb.", rating: 5 },
  { name: "Nora S.", text: "My para jump was flawless. Instructors are top-notch.", rating: 5 },
];

export default function Reviews() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-white">Customer Reviews</h2>
        <p className="mt-4 text-zinc-300 max-w-2xl">Real stories from real adventurers who dared to fly.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="glass-card card-glow rounded-2xl p-5 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{r.name}</h3>
                <div className="text-orange-400">{"★".repeat(r.rating)}</div>
              </div>
              <p className="mt-3 text-zinc-300 text-sm">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
