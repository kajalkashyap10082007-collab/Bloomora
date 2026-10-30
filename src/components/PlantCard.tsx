import { Link } from 'react-router-dom';
import { Droplets, Sun, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Plant } from '../data/plants';

export const PlantCard = ({ plant }: { plant: Plant }) => {
  return (
    <Link 
      to={`/plants/${plant.slug}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-700">
        <img 
          src={plant.image} 
          alt={plant.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 h-8 w-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <ArrowUpRight className="h-4 w-4 text-forest" />
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest text-stone-300 mb-3">
          <span className="text-sage">{plant.category}</span>
          <span className="h-1 w-1 bg-stone-200 rounded-full" />
          <span>{plant.difficulty}</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-forest group-hover:text-sage transition-colors duration-300 mb-2">{plant.commonName}</h3>
        <p className="text-stone-400 text-xs italic font-serif mb-4">{plant.scientificName}</p>
        
        <div className="flex items-center gap-6 pt-4 border-t border-stone-50">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400">
            <Sun className="h-3 w-3 text-sage" />
            <span>{plant.light}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400">
            <Droplets className="h-3 w-3 text-sage" />
            <span>{plant.water}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
