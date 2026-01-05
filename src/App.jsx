import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GuestArea from './components/GuestArea';
import RoomsGrid from './components/RoomsGrid';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-beige-100 font-sans text-charcoal selection:bg-moss selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <GuestArea />
        <RoomsGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
