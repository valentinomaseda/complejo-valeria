import React from "react";
import { MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="locations"
      className="py-20 bg-forest text-white text-center px-6"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">
          Ubicación
        </h2>

        <div className="flex flex-col items-center gap-12">
          <div className="flex items-center gap-3 text-cream-200 text-sm font-light tracking-wide bg-white/5 py-3 px-5 rounded-full backdrop-blur-sm border border-white/10">
            <MapPin className="text-terracotta w-6 h-6" />
            <span>Arrecifes, Provincia de Buenos Aires</span>
          </div>

          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-2xl border border-white/10">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.947315312646!2d-60.097085524553464!3d-34.04522252821776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b99d005bfe3977%3A0x970f43c8e9b8ac9e!2sComplejo%20Valeria!5e0!3m2!1ses-419!2sar!4v1767747747578!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Complejo Valeria"
              className="filter grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;