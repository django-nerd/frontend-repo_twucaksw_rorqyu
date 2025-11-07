import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Booking', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 rounded-2xl border border-white/10 bg-[#0a0f1f]/60 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-[#0F52BA] via-[#3F00FF] to-[#89CFF0] shadow-[0_0_20px_#3F00FF80]"></div>
              <span className="text-lg font-semibold tracking-tight text-white">
                <span className="text-[#89CFF0]">Blue</span>Flame <span className="text-[#9aa8ff]">Stay</span>
              </span>
            </a>
            <ul className="hidden gap-6 md:flex">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/80 transition hover:text-white hover:drop-shadow-[0_0_8px_#89CFF0]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#booking"
              className="rounded-full bg-gradient-to-r from-[#0F52BA] to-[#3F00FF] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_#3F00FF80] transition hover:shadow-[0_0_40px_#3F00FFB3]"
            >
              Book Now
            </a>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
