import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Ava M.',
    text: 'Legit the coolest hotel. Neon vibes, comfy bed, and the rooftop is a whole mood.',
    avatar: 'https://i.pravatar.cc/100?img=65',
  },
  {
    name: 'Jay K.',
    text: 'Fast WiFi + smart lock = perfection. Booked with friends, had the best weekend.',
    avatar: 'https://i.pravatar.cc/100?img=15',
  },
  {
    name: 'Lia P.',
    text: 'VR lounge blew my mind. 10/10 would crash here again.',
    avatar: 'https://i.pravatar.cc/100?img=32',
  },
  {
    name: 'Noah S.',
    text: 'Smart room + neon aesthetic = chef’s kiss. Also…the photos slap.',
    avatar: 'https://i.pravatar.cc/100?img=21',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 3500);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="bg-[#070b17] py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold"
        >
          What guests say
        </motion.h2>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <img src={testimonials[index].avatar} alt={testimonials[index].name} className="h-12 w-12 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">{testimonials[index].name}</p>
                  <p className="text-xs text-white/60">Verified Guest</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-white/90">“{testimonials[index].text}”</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <button onClick={prev} className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20">Prev</button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-[#89CFF0]' : 'bg-white/30'}`} />)
              )}
            </div>
            <button onClick={next} className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}
