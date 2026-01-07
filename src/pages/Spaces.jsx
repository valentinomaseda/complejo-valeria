import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Coffee, Waves, Trees } from 'lucide-react';

const spaces = [
  {
    id: 1,
    title: "Piscina Climatizada",
    description: "Disfrutá de nuestra piscina al aire libre, un oasis de relajación rodeado de naturaleza. Perfecta para refrescarte en verano o disfrutar del sol en nuestras reposeras.",
    icon: <Waves className="w-6 h-6" />,
    images: [
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1722767912373-8f9942a4cc83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1579405317876-9340f1d26061?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVpbmNob3xlbnwwfDB8MHx8fDI%3D",
      "https://images.unsplash.com/photo-1690574467148-af495c5e31d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1708363796879-8aa93b5eed4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
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
    <>
        {/* Adds padding to top to account for fixed navbar */}
        <div className="pt-30 pb-16">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-serif text-forest mb-6">Nuestros Espacios</h1>
                    <p className="text-forest-light max-w-2xl mx-auto text-lg font-light">
                        Descubrí los rincones pensados para tu relax y disfrute. Cada espacio está diseñado para hacer de tu estadía una experiencia única.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {spaces.map((space, index) => (
                        <motion.div 
                            key={space.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-3 text-terracotta mb-2">
                                    {space.icon}
                                    <span className="text-sm uppercase tracking-widest font-medium">Comodidades</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif text-forest">{space.title}</h2>
                                <p className="text-forest-light text-lg leading-relaxed">
                                    {space.description}
                                </p>
                            </div>

                            {/* Images Grid */}
                            <div className="flex-1 grid grid-cols-2 gap-4 h-[500px]">
                                <div 
                                    className="col-span-2 h-[300px] overflow-hidden rounded-lg cursor-pointer group relative"
                                    onClick={() => openLightbox(space.images, 0)}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                    <img 
                                        src={space.images[0]} 
                                        alt={`${space.title} principal`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"    
                                    />
                                </div>
                                {space.images.slice(1, 3).map((img, idx) => (
                                    <div 
                                        key={idx}
                                        className="h-[180px] overflow-hidden rounded-lg cursor-pointer group relative"
                                        onClick={() => openLightbox(space.images, idx + 1)}
                                    >
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                        <img 
                                            src={img} 
                                            alt={`${space.title} detalle ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"    
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
                    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button 
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                    >
                        <X size={40} />
                    </button>

                    <button 
                        onClick={prevImage}
                        className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                    >
                        <ChevronLeft size={40} />
                    </button>

                    <div 
                        className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.img 
                            key={currentImageIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            src={currentGalleryImages[currentImageIndex]}
                            alt="Vista ampliada"
                            className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
                        />
                        <div className="absolute -bottom-10 left-0 right-0 text-center text-white/80 font-light tracking-wide">
                            {currentImageIndex + 1} / {currentGalleryImages.length}
                        </div>
                    </div>

                    <button 
                        onClick={nextImage}
                        className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                    >
                        <ChevronRight size={40} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
};

export default Spaces;
