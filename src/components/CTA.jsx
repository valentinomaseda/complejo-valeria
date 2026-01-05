import React from 'react';

const CTA = () => {
  return (
    <section className="py-32 bg-charcoal text-white text-center px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
          "La pausa que tu historia merece."
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light mb-12 leading-relaxed">
          Descubre la serenidad del Complejo Valeria. Una experiencia diseñada para los que aprecian el silencio y el confort absoluto.
        </p>
        <button className="bg-beige-100 text-charcoal px-10 py-4 text-sm tracking-widest hover:bg-moss hover:text-white transition-all duration-300 uppercase font-medium">
          Reservar mi Estancia
        </button>
      </div>
    </section>
  );
};

export default CTA;
