import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#060914] text-white">
      {/* Neon gradient background wash */}
      <div className="pointer-events-none fixed inset-0 opacity-70 mix-blend-screen bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(15,82,186,0.2),transparent),radial-gradient(900px_400px_at_80%_90%,rgba(63,0,255,0.18),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Facilities />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
