import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-beige-50 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-6 tracking-widest">VALERIA</h3>
            <p className="text-gray-500 max-w-xs font-light">
              Un refugio de lujo donde la naturaleza y la arquitectura se encuentran para crear momentos inolvidables.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-charcoal uppercase tracking-widest mb-6">Contacto</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-light">
              <li>info@complejovaleria.com</li>
              <li>+54 11 1234 5678</li>
              <li>Av. del Lago 123, Valeria del Mar</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-charcoal uppercase tracking-widest mb-6">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-charcoal transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-charcoal transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-charcoal transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
          <p>&copy; 2024 Complejo Valeria. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-charcoal">Privacidad</a>
            <a href="#" className="hover:text-charcoal">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
