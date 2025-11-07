import React from 'react';
import { motion } from 'framer-motion';

const rooms = [
  {
    name: 'Standard',
    price: 79,
    img: 'https://images.unsplash.com/photo-1560448075-bb4caa6c8dfb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Deluxe',
    price: 119,
    img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Suite',
    price: 189,
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="bg-[#070b17] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold"
        >
          Room Showcase
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={room.img} alt={room.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b17] via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{room.name}</h3>
                <p className="mt-2 text-white/70">From ${room.price}/night</p>
                <button className="mt-4 rounded-full bg-gradient-to-r from-[#0F52BA] to-[#3F00FF] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_#3F00FF80] transition hover:shadow-[0_0_40px_#3F00FFB3]">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
