import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-[#060914]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,20,60,0)_0%,rgba(6,9,20,0.6)_60%,rgba(6,9,20,0.95)_100%)]"></div>
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#89CFF0] via-white to-[#3F00FF] bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl"
        >
          Stay Cool, Stay Blue.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-xl text-white/80"
        >
          Crash here, chill hard. Smart rooms, neon vibes, and Insta-ready corners in every turn.
        </motion.p>
        <motion.a
          href="#booking"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#0F52BA] to-[#3F00FF] px-8 py-3 font-semibold text-white shadow-[0_0_30px_#3F00FF80] transition hover:shadow-[0_0_50px_#3F00FFB3]"
        >
          Book Now
        </motion.a>
      </div>
    </section>
  );
}
