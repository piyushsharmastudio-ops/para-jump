"use client";
import React, { useMemo, useState } from "react";
import { categories, featured } from "@/data/adventures";

export default function Booking() {
  const options = useMemo(() => {
    const base = categories.map((c) => ({ id: c.id, name: c.name }));
    const tops = featured.map((f) => ({ id: f.id, name: f.title }));
    return [...tops, ...base];
  }, []);

  const [adventure, setAdventure] = useState(options[0]?.id ?? "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");
  const [slots, setSlots] = useState(1);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Booking requested:
Adventure: ${adventure}
Date: ${date}
Time: ${time}
Slots: ${slots}

Secure payment link will be sent to your email.`);
  }

  return (
    <section id="booking" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-white">Booking</h2>
        <p className="mt-4 text-zinc-300 max-w-2xl">Select your adventure, choose a date and time, and reserve your slots.</p>

        <form onSubmit={submit} className="mt-8 glass-card card-glow rounded-2xl p-6 text-white grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Adventure</label>
            <select value={adventure} onChange={(e) => setAdventure(e.target.value)} className="w-full rounded-lg bg-black/40 border border-white/10 p-3">
              {options.map((o) => (
                <option key={o.id} value={o.id}>{o.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-lg bg-black/40 border border-white/10 p-3" required />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Time</label>
            <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full rounded-lg bg-black/40 border border-white/10 p-3">
              {["07:00","09:00","11:00","13:00","15:00","17:00"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Slots</label>
            <input type="number" min={1} max={8} value={slots} onChange={(e) => setSlots(Number(e.target.value))} className="w-full rounded-lg bg-black/40 border border-white/10 p-3" />
          </div>

          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-zinc-300">Secure payment with encrypted checkout. Confirmation sent via email.</p>
            <button type="submit" className="btn-neon">Reserve</button>
          </div>
        </form>
      </div>
    </section>
  );
}
