import React from 'react';
import { motion } from 'framer-motion';

const GuestArea = () => {
  return (
    <section className="py-24 bg-cream-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center relative">
          
          {/* Text Content - Left/Top */}
          <div className="lg:w-1/2 z-10 lg:pr-12 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-forest mb-6 leading-tight">
                ÁREAS <br /> <span className="italic text-terracotta">COMUNES</span>
              </h2>
              <p className="text-gray-600 mb-8 max-w-md leading-relaxed font-light">
                Diseñado para inspirar calma y conexión. Nuestros espacios comunes son una extensión de la naturaleza que nos rodea, con arquitectura que respeta el silencio y la luz.
              </p>
              <a href="/spaces" className="inline-block border-b border-forest pb-1 text-forest hover:text-terracotta hover:border-terracotta transition-colors tracking-widest text-sm uppercase">
                Explorar Espacios
              </a>
            </motion.div>
          </div>

          {/* Image - Right/Bottom */}
          <div className="lg:w-2/3 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1722767912373-8f9942a4cc83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Lobby Area" 
                className="w-full h-[500px] object-cover shadow-xl"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cream-200 -z-10"></div>
            </motion.div>
          </div>

        </div>
        
        {/* Spacer for the absolute positioning on desktop */}
        <div className="hidden lg:block h-32"></div>
      </div>
    </section>
  );
};

export default GuestArea;
