import React from 'react';
import { Calendar, Users, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10s] hover:scale-100"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1623068769255-923b5307dd7d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-wider"
        >
          COMPLEJO VALERIA
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/90 text-lg md:text-xl font-light tracking-widest mb-12"
        >
          Descanso y naturaleza en Arrecifes
        </motion.p>

        {/* Booking Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-cream-50 p-4 md:p-6 shadow-2xl max-w-4xl w-full flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <div className="flex items-center gap-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-6">
            <Calendar className="text-terracotta w-5 h-5" />
            <div className="text-left">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Check-in</p>
              <p className="text-forest font-medium">Agregar fecha</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-6">
            <Calendar className="text-terracotta w-5 h-5" />
            <div className="text-left">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Check-out</p>
              <p className="text-forest font-medium">Agregar fecha</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-6">
            <Users className="text-terracotta w-5 h-5" />
            <div className="text-left">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Viajeros</p>
              <div className="flex items-center gap-2">
                <span className="text-forest font-medium">2 Adultos</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          <button className="w-full md:w-auto bg-terracotta text-white px-8 py-3 hover:bg-terracotta-dark transition-colors uppercase tracking-widest text-sm">
            Search
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
