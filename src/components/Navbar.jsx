import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolidStyle = isScrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showSolidStyle ? 'bg-cream-50/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          onClick={() => window.scrollTo(0, 0)}
        >
          <img 
            src="/logo-png.png" 
            alt="Complejo Valeria" 
            className={`h-16 w-auto transition-all duration-300 ${
              showSolidStyle ? 'brightness-0' : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/spaces" className={`text-sm tracking-widest hover:text-terracotta transition-colors ${showSolidStyle ? 'text-forest' : 'text-white/90'}`}>ESPACIOS</Link>
          <a href="/#locations" className={`text-sm tracking-widest hover:text-terracotta transition-colors ${showSolidStyle ? 'text-forest' : 'text-white/90'}`}>UBICACIÓN</a>
          <a href="/#rooms" className={`text-sm tracking-widest hover:text-terracotta transition-colors ${showSolidStyle ? 'text-forest' : 'text-white/90'}`}>HABITACIONES</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-forest"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={showSolidStyle ? 'text-forest' : 'text-white'} /> : <Menu className={showSolidStyle ? 'text-forest' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream-50 shadow-lg py-8 px-6 flex flex-col space-y-4">
          <Link to="/spaces" className="text-forest text-sm tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>ESPACIOS</Link>
          <a href="/#locations" className="text-forest text-sm tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>UBICACION</a>
          <a href="/#rooms" className="text-forest text-sm tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>HABITACIONES</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
