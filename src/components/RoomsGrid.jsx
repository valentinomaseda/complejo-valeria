import React from 'react';
import { Wifi, Coffee, Wind, Tv } from 'lucide-react';

const rooms = [
  {
    id: 1,
    title: "LAKE-VIEW SUITE",
    bed: "KING-SIZE BED",
    price: "$280",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    amenities: ["Lake View", "Free Wifi", "Breakfast", "AC"]
  },
  {
    id: 2,
    title: "GARDEN DELUXE",
    bed: "QUEEN-SIZE BED",
    price: "$220",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    amenities: ["Garden View", "Smart TV", "Mini Bar", "AC"]
  },
  {
    id: 3,
    title: "PRESIDENTIAL LOFT",
    bed: "CALIFORNIA KING",
    price: "$450",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    amenities: ["Panoramic View", "Jacuzzi", "Private Chef", "AC"]
  }
];

const RoomsGrid = () => {
  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4">NUESTRAS SUITES</h2>
          <p className="text-gray-500 tracking-widest uppercase text-sm">Confort y Elegancia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <div key={room.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 h-80">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-charcoal">
                  {room.price}<span className="text-xs text-gray-500">/night</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xs text-moss font-bold tracking-widest uppercase mb-2">{room.bed}</p>
                <h3 className="text-2xl font-serif text-charcoal mb-4 group-hover:text-moss transition-colors">{room.title}</h3>
                
                <div className="flex justify-center gap-4 mb-6">
                  {room.amenities.map((amenity, index) => (
                    <span key={index} className="text-[10px] uppercase tracking-wider text-gray-500 border border-gray-200 px-2 py-1 rounded-full">
                      {amenity}
                    </span>
                  ))}
                </div>

                <button className="text-sm border-b border-gray-300 pb-1 hover:border-charcoal transition-colors uppercase tracking-widest">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsGrid;
