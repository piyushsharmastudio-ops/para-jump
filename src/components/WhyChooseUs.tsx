import React from "react";

const items = [
  { title: "Safety Certifications", desc: "Internationally certified instructors & strict protocols." },
  { title: "Expert Instructors", desc: "Veterans of the sport with thousands of jumps." },
  { title: "Premium Equipment", desc: "Top-tier gear, inspected and maintained regularly." },
  { title: "24/7 Support", desc: "Friendly team to guide you every step of the way." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-white">Why Choose Us</h2>
        <p className="mt-4 text-zinc-300 max-w-2xl">Safety-first experiences led by certified professionals with premium gear.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="glass-card card-glow rounded-2xl p-5 text-white">
              <h3 className="text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-zinc-300 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
