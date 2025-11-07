import React from 'react';
import { Instagram, Send, AtSign, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#060914] py-14 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_200px_at_80%_0%,rgba(137,207,240,0.15),transparent),radial-gradient(600px_200px_at_10%_100%,rgba(63,0,255,0.15),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold"><span className="text-[#89CFF0]">Blue</span>Flame <span className="text-[#9aa8ff]">Stay</span></h3>
          <p className="mt-3 text-white/70">123 Neon Ave, Skytown, ST 90000</p>
          <p className="text-white/60">hello@blueflamestay.com</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow</h4>
          <div className="mt-3 flex items-center gap-3">
            <a href="#" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20" aria-label="TikTok">
              <Music size={18} />
            </a>
            <a href="#" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20" aria-label="Threads">
              <AtSign size={18} />
            </a>
          </div>
        </div>
        <div id="booking">
          <h4 className="text-lg font-semibold">Newsletter</h4>
          <p className="mt-2 text-white/70">Drop your email. No spam, just juicy deals.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Subscribed! Welcome to the Blue side.');
            }}
            className="mt-4 flex overflow-hidden rounded-full border border-white/10 bg-white/5"
          >
            <input
              type="email"
              required
              placeholder="you@coolmail.com"
              className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 outline-none"
            />
            <button className="bg-gradient-to-r from-[#0F52BA] to-[#3F00FF] px-5 text-sm font-semibold">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="relative mx-auto mt-10 max-w-6xl px-6 text-xs text-white/50">
        © {new Date().getFullYear()} BlueFlame Stay. All vibes reserved.
      </div>
    </footer>
  );
}
