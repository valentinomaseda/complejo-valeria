import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Waves, Trees, Coffee } from 'lucide-react';

const spaces = [
  {
    id: 1,
    title: "Piscina Climatizada",
    description: "Disfrutá de nuestra piscina al aire libre, un oasis de relajación rodeado de naturaleza. Perfecta para refrescarte en verano o disfrutar del sol en nuestras reposeras.",
    icon: <Waves className="w-6 h-6" />,
    images: [
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2069&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Parque y Jardines",
    description: "Más de 5000m² de parque arbolado para conectar con la naturaleza. Caminá por nuestros senderos, leé un libro bajo la sombra de los árboles o simplemente respirá aire puro.",
    icon: <Trees className="w-6 h-6" />,
    images: [
      "https://images.unsplash.com/photo-1722767912373-8f9942a4cc83?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Quincho y Parrillas",
    description: "Espacio compartido totalmente equipado para tus asados y reuniones. Cuenta con parrillas, mesas amplias y vajilla completa para compartir momentos inolvidables.",
    icon: <Coffee className="w-6 h-6" />,
    images: [
      "https://images.unsplash.com/photo-1579405317876-9340f1d26061?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1690574467148-af495c5e31d4?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1708363796879-8aa93b5eed4e?w=600&auto=format&fit=crop"
    ]
  }
];

const Spaces = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGalleryImages, setCurrentGalleryImages] = useState([]);

  const openLightbox = (images, index) => {
    setCurrentGalleryImages(images);
    setCurrentImageIndex(index);
    setSelectedImage(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentGalleryImages([]);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % currentGalleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + currentGalleryImages.length) % currentGalleryImages.length);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-cream-100">
        
        {/* --- INICIO DEL FONDO (Ajustado para mayor visibilidad) --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Mancha 1: Terracotta - Arriba Derecha - Aumentada opacidad a 0.3 */}
            <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-terracotta rounded-full blur-[80px] opacity-30 animate-pulse" style={{ animationDuration: '6s' }} />
            
            {/* Mancha 2: Forest - Centro Izquierda - Aumentada opacidad a 0.25 */}
            <div className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] bg-forest rounded-full blur-[80px] opacity-25" />
            
            {/* Mancha 3: Terracotta Light - Abajo - Aumentada opacidad a 0.3 */}
            <div className="absolute -bottom-[10%] right-[20%] w-[400px] h-[400px] bg-terracotta-light rounded-full blur-[60px] opacity-30" />
            
            {/* Textura de ruido un poco más visible */}
            <div className="absolute inset-0 opacity-[0.6] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
        </div>
        {/* --- FIN DEL FONDO --- */}

        {/* Contenido principal */}
        <div className="pt-32 pb-20 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-terracotta text-sm tracking-[0.2em] uppercase font-bold mb-4 block">Descubrí el Complejo</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-forest mb-6">Nuestros Espacios</h1>
                    <p className="text-forest-light max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Cada rincón está diseñado para inspirar calma. Desde el agua cristalina hasta la sombra de nuestros árboles añosos.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {spaces.map((space, index) => (
                        <motion.div 
                            key={space.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center relative`}
                        >
                            {/* Decoración sutil detrás del texto para resaltar capas */}
                            <div className={`absolute top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/30 blur-3xl -z-10 rounded-full ${index % 2 === 0 ? 'left-0' : 'right-0'}`}></div>

                            {/* Text Content */}
                            <div className="flex-1 space-y-8 relative">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white shadow-sm rounded-full text-terracotta">
                                        {space.icon}
                                    </div>
                                    <span className="h-px flex-1 bg-terracotta/30"></span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif text-forest">{space.title}</h2>
                                <p className="text-forest-light text-lg leading-relaxed font-light">
                                    {space.description}
                                </p>
                                <button className="text-terracotta text-sm font-medium tracking-widest uppercase border-b border-terracotta/30 pb-1 hover:border-terracotta transition-colors">
                                    Ver galería
                                </button>
                            </div>

                            {/* Images Grid */}
                            <div className="flex-1 grid grid-cols-2 gap-4 h-[500px] w-full">
                                <div 
                                    className="col-span-2 h-[320px] overflow-hidden rounded-sm cursor-pointer group relative shadow-xl"
                                    onClick={() => openLightbox(space.images, 0)}
                                >
                                    <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-500 z-10" />
                                    <img 
                                        src={space.images[0]} 
                                        alt={`${space.title} principal`}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"    
                                    />
                                </div>
                                {space.images.slice(1, 3).map((img, idx) => (
                                    <div 
                                        key={idx}
                                        className="h-[160px] overflow-hidden rounded-sm cursor-pointer group relative shadow-lg"
                                        onClick={() => openLightbox(space.images, idx + 1)}
                                    >
                                        <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-500 z-10" />
                                        <img 
                                            src={img} 
                                            alt={`${space.title} detalle ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"    
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-forest/95 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"><X size={40} /></button>
                    <button onClick={prevImage} className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors"><ChevronLeft size={48} /></button>
                    
                    <div className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <motion.img 
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            src={currentGalleryImages[currentImageIndex]}
                            className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
                        />
                        <div className="mt-4 text-white/60 font-light tracking-widest text-sm">
                            {currentImageIndex + 1} / {currentGalleryImages.length}
                        </div>
                    </div>

                    <button onClick={nextImage} className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors"><ChevronRight size={48} /></button>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
};

export default Spaces;