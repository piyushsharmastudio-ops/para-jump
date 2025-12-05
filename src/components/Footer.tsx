import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 text-white grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-semibold">Para Jump Adventure</h3>
          <p className="mt-2 text-sm text-zinc-300">Premium adrenaline experiences. Safety-first. Cinematic visuals.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-zinc-300">
            <li><a href="#adventures">Adventures</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm text-zinc-300">
            <li>Email: support@parajump.example</li>
            <li>Phone: +1 (555) 011-2233</li>
            <li>24/7 Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <form className="mt-2 flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 rounded-lg bg-black/40 border border-white/10 p-3 text-white" />
            <button className="btn-neon">Sign Up</button>
          </form>
          <div className="mt-3 text-sm text-zinc-300">Follow us: IG • YT • X</div>
        </div>
      </div>
      <div className="text-center text-xs text-zinc-500 pb-6">© {new Date().getFullYear()} Para Jump Adventure. All rights reserved.</div>
    </footer>
  );
}
