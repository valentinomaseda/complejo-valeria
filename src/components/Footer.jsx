import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    // Usamos bg-white para "limpiar" la vista al final y border-t para separarlo sutilmente
    <footer className="bg-white pt-20 pb-10 border-t border-forest/5 font-sans">
      <div className="container mx-auto px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand - Izquierda */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-3xl font-serif text-forest tracking-wider font-medium">VALERIA</h3>
            <p className="max-w-xs text-gray-500 font-light leading-relaxed text-sm">
              Arquitectura consciente y naturaleza. Un espacio diseñado para detener el tiempo y despertar los sentidos.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-forest border-b border-forest/30 pb-0.5 hover:border-terracotta hover:text-terracotta transition-all text-xs tracking-widest uppercase font-medium mt-4">
              Reservar Estadía <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Contacto - Derecha */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-bold text-terracotta uppercase tracking-[0.2em] mb-4">Contacto</h4>
            <ul className="space-y-4 text-sm font-light text-gray-600">
              <li>
                <a href="mailto:info@complejovaleria.com" className="flex items-center gap-3 hover:text-terracotta transition-colors group">
                  <span className="p-2 bg-cream-100 rounded-full text-forest group-hover:bg-terracotta group-hover:text-white transition-colors">
                    <Mail size={14} />
                  </span>
                  <span>info@complejovaleria.com</span>
                </a>
              </li>
              <li>
                <a href="tel:2478613307" className="flex items-center gap-3 hover:text-terracotta transition-colors group">
                  <span className="p-2 bg-cream-100 rounded-full text-forest group-hover:bg-terracotta group-hover:text-white transition-colors">
                    <Phone size={14} />
                  </span>
                  <span>2478-613307</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 group">
                  <span className="p-2 bg-cream-100 rounded-full text-forest group-hover:bg-terracotta group-hover:text-white transition-colors mt-1">
                    <MapPin size={14} />
                  </span>
                  <span className="leading-relaxed">Ruta 51 km 72,<br/>Arrecifes</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social - Derecha Extrema */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-xs font-bold text-terracotta uppercase tracking-[0.2em] mb-4">Social</h4>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-sm text-gray-600 hover:text-forest hover:translate-x-1 transition-all flex items-center gap-2">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-forest hover:translate-x-1 transition-all flex items-center gap-2">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-forest hover:translate-x-1 transition-all flex items-center gap-2">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Minimalista */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
          <p>&copy; {new Date().getFullYear()} Complejo Valeria.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-forest transition-colors">Privacidad</a>
            <a href="#" className="hover:text-forest transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;