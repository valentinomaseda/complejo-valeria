import React from 'react';
import { MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 bg-forest text-white text-center px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
          "La pausa que tu historia merece."
        </h2>
        <p className="text-cream-200 text-lg md:text-xl font-light mb-12 leading-relaxed">
          Descubre la serenidad del Complejo Valeria. Una experiencia diseñada para los que aprecian el silencio y el confort absoluto.
        </p>
        <button className="bg-terracotta text-white px-10 py-4 text-sm tracking-widest hover:bg-terracotta-dark transition-all duration-300 uppercase font-medium inline-flex items-center gap-2">
          <MessageCircle size={20} />
          Reservar por WhatsApp
        </button>
      </div>
    </section>
  );
};

export default CTA;
