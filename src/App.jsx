import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GuestArea from './components/GuestArea';
import RoomsGrid from './components/RoomsGrid';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Spaces from './pages/Spaces';

function App() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans text-forest selection:bg-terracotta selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <GuestArea />
            <RoomsGrid />
            <CTA />
          </main>
        } />
        <Route path="/spaces" element={
          <main>
            <Spaces />
          </main>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
