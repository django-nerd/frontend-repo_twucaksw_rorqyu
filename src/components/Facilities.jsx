import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Lock, Gamepad2, Cocktail, Briefcase } from 'lucide-react';

const items = [
  { icon: Wifi, label: 'Fast WiFi' },
  { icon: Lock, label: 'Smart Lock' },
  { icon: Gamepad2, label: 'VR Lounge' },
  { icon: Cocktail, label: 'Rooftop Bar' },
  { icon: Briefcase, label: 'Coworking' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="bg-[#080c19] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold"
        >
          Facilities
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {items.map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[inset_0_0_20px_rgba(63,0,255,0.15)]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F52BA] to-[#3F00FF] text-white shadow-[0_0_30px_#3F00FF66] transition group-hover:shadow-[0_0_50px_#3F00FFAA]">
                <Icon size={22} />
              </div>
              <p className="mt-3 text-sm text-white/80">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
