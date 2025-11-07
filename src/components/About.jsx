import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-[#080c19] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_0%,rgba(63,0,255,0.25),transparent),radial-gradient(600px_200px_at_80%_100%,rgba(15,82,186,0.25),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold"
        >
          Your vibes, our space
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-white/80"
        >
          BlueFlame Stay is a Gen Z-driven hotel experience with cozy, smart rooms and
          Instagrammable spaces. Think keyless entry, ultra-fast WiFi, VR lounge sessions, and
          a rooftop bar that glows like midnight neon. Smart stay, no boring days.
        </motion.p>
      </div>
    </section>
  );
}
