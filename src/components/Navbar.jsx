import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`text-2xl font-serif font-bold tracking-widest ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
          VALERIA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#locations" className={`text-sm tracking-widest hover:text-moss transition-colors ${isScrolled ? 'text-charcoal' : 'text-white/90'}`}>UBICACIONES</a>
          <a href="#rooms" className={`text-sm tracking-widest hover:text-moss transition-colors ${isScrolled ? 'text-charcoal' : 'text-white/90'}`}>HABITACIONES</a>
          <button className="bg-charcoal text-white px-6 py-2 text-sm tracking-widest hover:bg-moss transition-colors">
            RESERVAR AHORA
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-charcoal' : 'text-white'} /> : <Menu className={isScrolled ? 'text-charcoal' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col space-y-4">
          <a href="#locations" className="text-charcoal text-sm tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>UBICACIONES</a>
          <a href="#rooms" className="text-charcoal text-sm tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>HABITACIONES</a>
          <button className="bg-charcoal text-white px-6 py-3 text-sm tracking-widest w-full">
            RESERVAR AHORA
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
